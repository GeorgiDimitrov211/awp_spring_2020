import React from "react";
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonCallback from "./ButtonCallback";

it('adds one number correctly ', async () => {
    // This is a mock callback function
    const onClick = jest.fn();

    // Render the NewRecipe component with the mock callback
    const {getByText} = render(<ButtonCallback callback={onClick}/>);

    // Click on button
    fireEvent.click(getByText(/Click this button!/i));

    // Expect the callback to have been called
    expect(onClick).toHaveBeenCalled();
});
