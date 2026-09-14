ABOUT PROJECT:
My project name is DevStack,which is a modern web application designed to help developers showcase, manage, and build their ideal technology stack effortlessly.


THE TECHNOLOGIES I USED:
 Frontend: HTML, CSS, JavaScript 
 Icons: Devicon CDN Vector Logos
 Version Control: Git, GitHub,Netlify

KEY FEATURES OF MY PROJECT:
Interactive Tech Cards: Explore various technologies with ratings, descriptions, and dynamic badges.
Stack Management:* Easily add or remove technologies to/from your dynamic stack with real-time UI updates.
Smart UI States:Interactive button feedback, empty stack warnings, and seamless stack count updates.



(** React Concepts & Interview Questions **)

1. What is JSX, and why is it used in React?
JavaScript XML is a syntax extension which  lets us write HTML-like code inside JavaScript.
It is used because it makes writing and understanding component structure much easier and visual compared to raw JavaScript methods.

2. What is the difference between props and state?
Props (Properties):Read-only data passed from a parent component to a child component (external data).
State: Dynamic data managed within the component itself that can change over time based on user interactions (internal data).

3. What does the useState hook do, and where did you use it in this project?
The useState hook allows a component to create and track state variable changes. When state changes, React re-renders the component. 
Usage: In this project, it is used to store the cart array to track selected technologies.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
The useEffect hook handles side-effects (like fetching data, subscribing to services, or updating the DOM) after rendering. 
 Usage: It is used to fetch the initial tech data from a local JSON or API once when the component mounts.

5. Why does every item in a .map() list need a unique key prop?
React uses the key prop to identify which items have changed, been added, or removed.
It helps React re-render only the modified elements efficiently rather than re-rendering the entire list.

7. What is conditional rendering? Show one place you used it.
Conditional rendering means showing or hiding UI elements based on specific conditions or boolean logic.
 Example: Displaying the "No technologies selected yet" empty message when the cart array length is 0.

 8. How do you pass data from parent to child, and child back to parent?
Parent to Child: Data is passed down directly using *props*.
Child to Parent:The parent passes a *callback function* as a prop to the child, and the child calls that function with data as an argument.
