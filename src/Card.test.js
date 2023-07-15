import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

//smoke test
it("Renders without crashing", function() {
    render(<Card />);
});

//Snapshot test
it("matches snapshot", function() {
    const {asFragment} = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});