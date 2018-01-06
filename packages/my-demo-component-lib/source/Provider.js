import React, { Component } from "react";
import invariant from "invariant";

import { NavigationProvider, RouteMapper, safeJsonStringify } from "jarl-react";

import { navigateStart, navigateEnd, navigateTransitionIn } from "./actions";

class Provider extends Component {
    /**
     * Initalise route mapper and setup state from current URL
     */
    constructor(props) {
        super(props);
        invariant(props.store, "Provider must receive a store");
        invariant(
            typeof props.store.getState === "function",
            "Provider must be given a Redux store"
        );
        invariant(
            props.routes &&
                (props.routes instanceof RouteMapper ||
                    Array.isArray(props.routes)),
            "Invalid routes property: must be an array or a RouteMapper instance"
        );
        invariant(
            typeof props.store.getState === "function",
            "Provider must be given a Redux store"
        );
        invariant(props.history, "Provider must receive a history object");
        this.ensureRouteMapper(props.routes);
        const state = this.getNavigationState();
        if (!state.location) {
            const path = props.history.location.pathname;
            const match = this.routeMapper.match(path);
            if (match) {
                // Dispatch to set up initial redux state immediately
                // TODO: This feels like a bad pattern, not sure
                // best thing do to though, needs review.
                this.props.store.dispatch(navigateEnd(match.state));
            }
        }
    }

    /**
     * If different routes passed in for any reason, make sure
     * we use the right RouteMapper
     */
    componentWillReceiveProps(nextProps) {
        // TODO: Some duplication here and SimpleProvider. Make a
        // ProviderBase class?
        if (nextProps.routes !== this.props.routes) {
            this.ensureRouteMapper(nextProps.routes);
        }
    }

    getNavigationState() {
        const { store, reducerMountPoint = "navigation" } = this.props;
        return store.getState()[reducerMountPoint];
    }

    handleNavigateStart = state => {
        this.props.store.dispatch(navigateStart(state));
        if (this.props.onNavigateStart) {
            return this.props.onNavigateStart(state);
        }
        return null;
    };

    handleNavigateEnd = state => {
        this.props.store.dispatch(navigateEnd(state));
        setTimeout(() => {
            this.props.store.dispatch(navigateTransitionIn(state));
        }, 1);
    };

    ensureRouteMapper = routes => {
        this.routeMapper =
            routes instanceof RouteMapper ? routes : new RouteMapper(routes);
    };

    render() {
        const { store, routes, ...others } = this.props;
        const navigation = this.getNavigationState();
        return (
            <NavigationProvider
                {...others}
                routes={this.routeMapper}
                state={navigation}
                onNavigateStart={this.handleNavigateStart}
                onNavigateEnd={this.handleNavigateEnd}
                context={() => ({
                    store
                })}
            />
        );
    }
}

export default Provider;
