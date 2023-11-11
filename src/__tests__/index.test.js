import { fireEvent, render, screen } from "@testing-library/react";
import Hero from "../components/Hero";
import "@testing-library/jest-dom";
import Counter from "../components/Counter";

// describe("Hero", () => {
//   it("Hero text should be available", () => {
//     render(<Hero />);
//     const heading = screen.getByTestId("heading", {
//       name: /A simple bookmark manager/i,
//     });
//     expect(heading).toBeInTheDocument();
//   });
// });

//for counter components
// describe("Counter", () => {
//   it("should add 1 to count", () => {
//     //...invite the component to test its units....
//     render(<Counter />);
//     //call the units using asigned testIds or any other parameters
//     const incrementBtn = screen.getByTestId("incrementbtn");
//     const count = screen.getByTestId("count");
//     //when a click even is made on button,
//     fireEvent.click(incrementBtn);
//     //count is expected to have a text-content of 1
//     expect(count).toHaveTextContent(1);
//   });

//   it("should decrement count by 1", () => {
//     render(<Counter />);
//     const decrementBtn = screen.getByTestId("decrementbtn");
//     const count = screen.getByTestId("count");
//     fireEvent.click(decrementBtn);
//     expect(count).toHaveTextContent(-1);
//   });
// });

/*For related tests, in this case, we'd want to predefine the variables, but has to be with special 
functions like 
1   before()
2   after()
3   beforeEach()
4   afterEach()
*/
//In this case
// describe("Counter", () => {
//   let incrementBtn, count, decrementBtn;

//   beforeEach(() => {
//     render(<Counter />);
//     incrementBtn = screen.getByTestId("incrementbtn");
//     count = screen.getByTestId("count");
//     decrementBtn = screen.getByTestId("decrementbtn");
//   });

//   it("should add 1 to count", () => {
//     fireEvent.click(incrementBtn);
//     expect(count).toHaveTextContent(1);
//     console.log(count)
//   });

//   it("should decrement count by 1", () => {
//     fireEvent.click(decrementBtn);
//     expect(count).toHaveTextContent(-1);
//   });
// });
