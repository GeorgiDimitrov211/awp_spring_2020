import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListSum from "./ListSum";

it('renders with the correct sum of 2 + 2 + 2 + 2', () => {
    const {getByText} = render(<ListSum numbers={[2,2,2,2]}></ListSum>);
    // Testing for a specific string
    expect(getByText("2 + 2 + 2 + 2 = 8")).toBeInTheDocument();
});

it('renders with the correct sum of 1 + 2 + 3', () => {
    const {getByText} = render(<ListSum numbers={[1,2,3]}></ListSum>);
    // Testing using a regular expression (regexp)
    expect(getByText(/1 \+ 2 \+ 3 = 6/i)).toBeInTheDocument();
});

it('renders with the correct sum of only one element', () => {
    const {getByText} = render(<ListSum numbers={[1]}></ListSum>);
    // Testing using a callback function
    expect(getByText(text => text.includes("1 = 1"))).toBeInTheDocument();
});