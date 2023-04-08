import {render,screen} from '@testing-library/react'
import {Greet} from './Greet'
// To create a virtual DOM we import render method from the react testing library
test('Greet Renders Correctly!',()=>{

render(<Greet/> )
const textElement = screen.getByText('Hello');
expect(textElement).toBeInTheDocument();


})