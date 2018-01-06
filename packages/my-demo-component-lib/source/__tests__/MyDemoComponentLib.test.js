/* global describe test expect jest */
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MyDemoComponent from "my-demo-component";

import MyDemoComponentLib from "../MyDemoComponentLib";

configure({ adapter: new Adapter() });

describe("<MyDemoComponentLib/>", () => {
    test("renders", () => {
        const component = shallow(<MyDemoComponentLib />);
        const childComponent = component.find(MyDemoComponent);
        expect(childComponent.length).toEqual(1);
        const props = childComponent.props();
        expect(props).toMatchObject({
            message: "Foo"
        });
    });
});
