/* global describe test expect */

import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MyDemoComponent from "../MyDemoComponent";

configure({ adapter: new Adapter() });

describe("<MyDemoComponent/>", () => {
    test("renders", () => {
        const component = shallow(<MyDemoComponent />);
        const childComponent = component.find("b");
        expect(childComponent.length).toEqual(1);
    });
});
