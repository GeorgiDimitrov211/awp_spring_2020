import React from "react";
import {fireEvent, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import AddNumber from "./AddNumber";

it('adds one number correctly ', async () => {
    // Render the component
    const {getByText, getByRole} = render(<AddNumber/>);

    // Type in number and then click on button
    await userEvent.type(getByRole("textbox"), "42");
    fireEvent.click(getByRole("button"));

    // Expect the number to be there
    expect(getByText(/Sum: 42/i)).toBeInTheDocument();
});

it('adds many numbers correctly ', async () => {
    // Render the component
    const {getByText, getByRole} = render(<AddNumber/>);

    // Type in numbers and then click button after each number
    await userEvent.type(getByRole("textbox"), "2");
    fireEvent.click(getByRole("button"));
    await userEvent.type(getByRole("textbox"), "2");
    fireEvent.click(getByRole("button"));
    await userEvent.type(getByRole("textbox"), "6");
    fireEvent.click(getByRole("button"));

    // Expect the number to be there
    expect(getByText(/Sum: 10/i)).toBeInTheDocument();
});

