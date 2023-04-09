// Test Requirements: Greet  accepts a string representing name of the individual ,
// if a name is supplied then greet should output Hello name that was suppplied, or else simply hello
import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test('Renders Greet With Name', () => {

    render(<Greet  name="Mohan" />)
    const greetMessage = screen.getByText('Hello Mohan');
    expect(greetMessage).toBeInTheDocument()


});

test('Renders Greet  Correctly', () => {
    render(<Greet  />)
    const getElement = screen.getByText('Hello');
    expect(getElement).toBeInTheDocument()

})