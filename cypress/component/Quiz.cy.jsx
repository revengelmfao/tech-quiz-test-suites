import React from 'react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.fixture('questions.json').as('questionsData');
  });

  it('renders the start screen initially', () => {
    cy.mount(<Quiz />);
    cy.contains('button', /start quiz/i).should('be.visible');
  });

  it('starts the quiz when the start button is clicked', function() {
    // FIXED: Correct API endpoint
    cy.intercept('GET', '/api/questions/random', { body: this.questionsData }).as('getQuestions');
    cy.mount(<Quiz />);
    cy.contains('button', /start quiz/i).click();
    
    // Verify the first question appears, but don't assume specific text
    cy.get('h2').should('be.visible');  // Assuming questions are in h2 tags
    cy.get('button.btn-primary').should('have.length.at.least', 2); // Should have answer choices
  });

  // Test case: Verifies the quiz advances to the next question after answering
  it('moves to the next question when an answer is selected', function() {
    cy.intercept('GET', '/api/questions/random', { body: this.questionsData }).as('getQuestions');
    cy.mount(<Quiz />);
    cy.contains('button', /start quiz/i).click();
    
    // Wait for question to load
    cy.get('h2').should('not.be.empty');
    
    // Get the current question text 
    cy.get('h2').invoke('text').then(initialQuestion => {
      cy.log('Initial question:', initialQuestion);
      
      for (let i = 0; i < 10; i++) {
        cy.get(".btn.btn-primary").first().click();
      }
      
      // Check that the question changed
      cy.get('h2').invoke('text').then(newQuestion => {
        expect(newQuestion).not.to.eq(initialQuestion);
      });
    });
  });
  
  it('shows the final score when all questions are answered', function() {
    const shorterQuiz = this.questionsData.slice(0, 2); // Just 2 questions for faster testing
    
    cy.intercept('GET', '/api/questions/random', { body: shorterQuiz }).as('getQuestions');
    cy.mount(<Quiz />);
    cy.contains('button', /start quiz/i).click();
    
    // Answer each question by clicking the first button
    shorterQuiz.forEach(() => {
      cy.get('button.btn-primary').first().click();
      cy.wait(300); // Give time for UI updates
    });
    
    // Check for score display with more flexible matching
    cy.contains(/score|your score|result/i).should('be.visible');
    cy.get('.alert-success').should('be.visible');
  });
});