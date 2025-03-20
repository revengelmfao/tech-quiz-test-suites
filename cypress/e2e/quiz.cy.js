// suite of tests
describe("Quiz", () => {
  // Test to check if the quiz page loads 
  it("should load and show start quiz button", () => {
    // Load the page
    cy.visit("/quiz");
  });

  it("should start the quiz and load questions", () => {
    // Load the page
    cy.visit("/quiz");
    cy.get("button").contains("Start Quiz").click();
    cy.get(".card").find("h2", { timeout: 10000 }).should("exist");
    cy.get(".btn.btn-primary").should("have.length.greaterThan", 0);
  });

  // Test to check if the user can answer a question
  it("should allow the user to answer a question", () => {
    cy.visit("/quiz");
    // Button being pulled by text and clicked to start the quiz
    cy.get("button").contains("Start Quiz").click();
    cy.get(".btn.btn-primary").first().click();
    // used for loading the next question
    cy.get(".card").find("h2").should("exist");
  });

  // Test to check if the user can complete the quiz
  it("should show the final score when the quiz is completed", () => {
    cy.visit("/quiz");

    // Start the quiz
    cy.get("button").contains("Start Quiz").click();

    for (let i = 0; i < 10; i++) {
      cy.get(".btn.btn-primary").first().click();
    }

    cy.get(".alert.alert-success")
      .should("be.visible")
      .and("contain", "Your score:");
  });

  // Test to check if the user can restart the quiz
  it("should allow the user to restart the quiz", () => {
    // Load the page
    cy.visit("/");
    cy.get("button").contains("Start Quiz").click();

    // Start the quiz
    for (let i = 0; i < 10; i++) {
      cy.get(".btn.btn-primary").first().click();
    }

    // Check if the final score is displayed
    cy.get(".alert.alert-success")
      .should("be.visible")
      .and("contain", "Your score:");
    cy.get("button").contains("Take New Quiz").should("be.visible").click();

    // Getting the h2 element to check if the quiz has started
    cy.get("h2").should("exist");
  });
});