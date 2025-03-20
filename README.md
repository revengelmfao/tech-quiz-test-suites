# 19 Testing: Tech Quiz Test Suite

![License](https://img.shields.io/badge/License-MIT-blue.svg)
<img alt="React" src="https://img.shields.io/badge/React-18+-blue.svg">
<img alt="Cypress" src="https://img.shields.io/badge/Cypress-13+-green.svg">
<img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-4.4+-green.svg">
<img alt="Express" src="https://img.shields.io/badge/Express-4.17+-green.svg">
<img alt="Node.js" src="https://img.shields.io/badge/Node.js-16+-green.svg">

## Description

This project demonstrates the importance of ensuring reliability and robustness in modern web applications through comprehensive testing. The Tech Quiz application has been enhanced with Cypress for both component and end-to-end tests, ensuring that the application meets user demands and performs efficiently under various conditions. The app is built using the MERN stack (MongoDB, Express.js, React, and Node.js) and allows users to take a quiz of random technical questions and view their final score. The focus of this project is on implementing a thorough testing strategy that validates both individual components and the complete user flow.

## Table of Contents

* Installation
* Usage
* Features
* Testing
* Contributing
* License
* Questions

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/tech-quiz-test-suite.git

# Navigate to the project directory
cd tech-quiz-test-suite

# Install dependencies for server and client
npm install

# Rename environment variables file
cp .env.example .env

# Start the application
npm run start
```

## Usage

Once the application is running, you can:

1. Start a new quiz by clicking the "Start Quiz" button
2. Answer a series of technical questions
3. View your final score after completing all questions
4. Take the quiz again to improve your score

The application will be available at: http://localhost:3000

To run the tests:

```bash
npm run test
```

## Features

- **Interactive Quiz**: Answer technical questions and test your knowledge
- **Random Questions**: Each quiz session presents a unique set of questions
- **Score Tracking**: View your performance at the end of the quiz
- **Responsive Design**: Optimized for both desktop and mobile experiences
- **Comprehensive Test Suite**: Component tests and end-to-end tests ensure reliability

## Testing

The application includes two types of Cypress tests:

### Component Tests:
- Tests the Quiz component in isolation
- Verifies the component renders correctly
- Ensures the quiz starts when the start button is clicked
- Confirms questions advance when answers are selected
- Validates that the final score is displayed correctly

### End-to-End Tests:
- Tests the complete user flow through the application
- Verifies that the quiz starts when the start button is clicked
- Ensures questions are presented sequentially as the user answers them
- Confirms the quiz completes and displays the final score
- Validates that users can start a new quiz

## Contributing

Bradley Santiago

## License

This project is licensed under the MIT license.

## Questions

If you have any questions, please feel free to contact me at [BradleySantiago4@gmail.com](mailto:BradleySantiago4@gmail.com). You can also find more of my work at [https://github.com/revengelmfao](https://github.com/revengelmfao).
