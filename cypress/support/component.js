// Import commands.js using ES2015 syntax:
import './commands.js';

// Import React mount command
import { mount } from 'cypress/react18';

// Add the mount command
Cypress.Commands.add('mount', mount);