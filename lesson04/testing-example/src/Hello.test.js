import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hello from "./Hello";

it('says hello to me', () => {
    const {getByText} = render(<Hello just_a_name="Kristian"/>);
    expect(getByText(/hello kristian/i)).toBeInTheDocument();
});
