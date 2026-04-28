# Web Development Frameworks - Week 3 Exercise

## Objective

The goal of this exercise is to practice and demonstrate your skills in React component props, basic events, and state handling.

You will clone the provided project to your computer, implement the solution, and test it locally. Once all tests pass (`npm test`), commit and push your solution to the GitHub Classroom repository.

## Task Overview

Your task is to create a **cost estimation calculator** for a cloud service provider. The calculator should compute the cost of using virtual machines (VMs) based on:

- The number of virtual machines required by the customer.
- The price of a single VM per hour (provided as a prop).

The calculator should display the **total cost per hour**, **day**, **month**, and **year**.

### Requirements

1. **Component Implementation**:
    - Create a React component named `CostCalculator`.
    - Accept a prop `priceOfSingleVMPerHour` (type: `number`) representing the cost of a single VM per hour.
    - Render the `CostCalculator` component in the `App` component.

2. **UI Structure**:
    The `CostCalculator` component should render:
    - A heading: **VM Cost Calculator**.
    - A `label` element for the input field with:
        - `for` attribute set to `vmNumber`, in React this must be `htmlFor`.
    - An `input` element for entering the number of VMs with the following attributes:
        - `type="text"`, `id="vmNumber"`, `placeholder="Number of VMs"`.
    - Cost calculations (in `p` elements) displayed as:
        - `Cost per hour: (cost)`
        - `Cost per day: (cost)`
        - `Cost per month: (cost)`
        - `Cost per year: (cost)`

3. **Expected HTML Structure**:
    When the price of a single VM per hour is 0.5 (e.g., 0.5 dollars/hour), assume:
    - **1 day = 24 hours**
    - **1 month = 30 days**
    - **1 year = 8760 hours (365 days)**

    Example HTML output when the number of VMs is 1:
    ```html
    <h1>VM Cost Calculator</h1>
    <label for="vmNumber">Number of VMs</label>
    <input type="text" id="vmNumber" placeholder="Number of VMs" value="1">
    <div>
      <p>Cost per hour: 0.5</p>
      <p>Cost per day: 12</p>
      <p>Cost per month: 360</p>
      <p>Cost per year: 4320</p>
    </div>
    ```

4. **State Management**:
    - The input field should allow users to specify the number of VMs.
    - Calculate and display the updated costs dynamically as the user changes the number of VMs.

5. **DOM Restriction**:
    The `CostCalculator` component must handle all DOM structure creation and updates. Do not create or manage the DOM structure in the `App` component.

## Instructions

1. Clone the project to your local machine.
2. Execute `npm install` to install dependencies
3. Implement the `CostCalculator` component according to the task description.
4. Test your implementation by running `npm test` and ensure that all test cases pass.
5. Once you have confirmed your solution works, commit and push the changes to the GitHub Classroom repository.

## Available Scripts

Inside the project directory, you can run the following commands:

### `npm run dev`
Runs the app in development mode. Open your browser in the localhost address and port indicated in your terminal after executing the command. The page will reload as you make changes, and you may also see any lint errors in the console.

### `npm test`
Launches the test runner to test your implementation. Refer to [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
