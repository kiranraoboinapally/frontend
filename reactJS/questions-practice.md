
### **Basic React Questions to Practice**

---

### 1. **Creating Your First Component**

* **Q**: How do you create a basic functional component in React?

  * **Task**: Create a component called `Greeting` that returns a simple greeting message like "Hello, world!".

---

### 2. **Using JSX**

* **Q**: What is JSX, and how is it different from regular JavaScript?

  * **Task**: Write a JSX expression that combines an `h1` tag and a `p` tag, and return it in a component.

---

### 3. **Props in React**

* **Q**: What are props in React, and how are they passed to a component?

  * **Task**: Create a component `Person` that accepts props for `name` and `age`, and renders a message like "Name: \[name], Age: \[age]".

---

### 4. **Rendering Lists with `.map()`**

* **Q**: How do you render a list of items dynamically in React using an array?

  * **Task**: Create an array of fruits (e.g., `['Apple', 'Banana', 'Cherry']`) and use `.map()` to display each fruit inside an `li` tag in a `ul` list.

---

### 5. **Handling User Input**

* **Q**: How do you handle user input in React using state?

  * **Task**: Create a form with an input field and a button. When the user types in the input field and clicks the button, display the entered text below the input.

---

### 6. **Using State to Toggle Visibility**

* **Q**: How do you manage visibility of elements in React using state?

  * **Task**: Create a button that toggles the visibility of a paragraph on and off when clicked.

---

### 7. **Event Handling in React**

* **Q**: How do you handle events like clicks in React?

  * **Task**: Create a button that, when clicked, changes the text in a `<h2>` tag.

---

### 8. **React Fragments**

* **Q**: What are React Fragments, and when should you use them?

  * **Task**: Create a component that returns two sibling elements (e.g., `h1` and `p` tags) without wrapping them in an extra `div`.

---

### 9. **Conditional Rendering**

* **Q**: How do you conditionally render elements in React?

  * **Task**: Create a component that displays a message like "You are logged in" if a boolean variable `isLoggedIn` is true, and "Please log in" if it's false.

---

### 10. **Component Nesting**

* **Q**: How do you nest one React component inside another?

  * **Task**: Create two components: `Header` and `Content`. The `Header` should contain a title, and `Content` should display a paragraph. Render the `Content` component inside the `Header` component.

---

### 11. **Destructuring Props**

* **Q**: How do you use destructuring to access props in a functional component?

  * **Task**: Create a component `User` that accepts `firstName` and `lastName` props. Use destructuring to access these props and display them inside a `p` tag.

---

### 12. **Handling Forms in React**

* **Q**: How do you handle form submissions in React?

  * **Task**: Create a simple form with an input field for the user's name. When the form is submitted, display the entered name below the form.

---

### 13. **Updating State with `setState()`**

* **Q**: How do you update the state in a React component using `setState()`?

  * **Task**: Create a button that increments a counter each time it is clicked. Display the counter value below the button.

---

### 14. **Passing Functions as Props**

* **Q**: How can you pass functions as props to child components in React?

  * **Task**: Create a `Counter` component with a button that increments a counter. Pass the button click function as a prop from a parent component.

---

### 15. **Event Handling with Arguments**

* **Q**: How can you pass arguments to an event handler in React?

  * **Task**: Create a button that, when clicked, logs a message with an argument like `"Hello, React!"`.

---

### 16. **Working with Arrays of Objects**

* **Q**: How do you map over an array of objects and render their properties?

  * **Task**: Create an array of objects where each object represents a book with a `title` and `author`. Use `.map()` to display a list of books.

---

### 17. **Class-based Components**

* **Q**: How do you create a class-based component in React?

  * **Task**: Create a class-based component that renders a simple message like "Welcome to React!" in an `h1` tag.

---

### 18. **Using `key` in Lists**

* **Q**: Why is the `key` prop important when rendering lists in React?

  * **Task**: Render a list of items (e.g., names of people) using `.map()` and ensure each item has a unique `key` prop.

---

### 19. **Using `useState` Hook**

* **Q**: How do you manage state in a functional component using the `useState` hook?

  * **Task**: Create a component with a button that toggles between two states: "ON" and "OFF".

---

### 20. **Using `useEffect` Hook**

* **Q**: What is the `useEffect` hook, and when would you use it?

  * **Task**: Create a component that logs a message to the console when it mounts (similar to `componentDidMount` in class components).

---

### 21. **Lift State Up**

* **Q**: What does it mean to "lift state up" in React?

  * **Task**: Create two components, `Parent` and `Child`. The `Parent` component should manage state, and the `Child` component should update that state through a function passed as a prop.

---

### 22. **Handling Arrays in State**

* **Q**: How do you update an array in React's state (e.g., adding or removing items)?

  * **Task**: Create a component where you can add an item to an array of tasks (e.g., a to-do list) and display the tasks.

---

### 23. **Using `map()` with Objects**

* **Q**: How do you use `.map()` with an object instead of an array?

  * **Task**: Create an object with keys as items and values as their descriptions. Use `Object.keys()` to iterate over the object and render the keys and values.

---

### 24. **Working with Nested Arrays**

* **Q**: How do you render elements from nested arrays in React?

  * **Task**: Create an array of categories, and each category contains an array of items. Use `.map()` twice to render the categories and their respective items.

---

### 25. **Passing Multiple Props to Components**

* **Q**: How do you pass multiple props to a child component?

  * **Task**: Create a `UserCard` component that receives `name`, `email`, and `age` as props, and display them inside a `div`.

---
