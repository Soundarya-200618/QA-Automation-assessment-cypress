# Cypress Automation Assessment

This repository contains an automated Cypress test solution for the technical assessment involving UI testing on [matchingengine.com](https://www.matchingengine.com/).

## Assessment Requirements

The automation script performs the following steps:

1. Visit [https://www.matchingengine.com/] website.
2. Expand the ‘Modules’ section in the header
3. Click ‘Repertoire Management Module’ from the dropdown
4. Scroll to the ‘Additional Features’ section
5. Click on ‘Products Supported’
6. Assert the list of supported products under the heading:  
   “There are several types of Product Supported:”

## Technologies Used

- [Cypress](https://www.cypress.io/) for end-to-end testing
- JavaScript (ES6+)
- Google Chrome (browser for test execution)

## How to Run the Tests

### Prerequisites

Make sure the following are installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Google Chrome](https://www.google.com/chrome/)

### Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/Soundarya-200618/QA-Automation-assessment-cypress.git
cd QA-Automation-assessment-cypress
```

2. **Install project dependencies:**

```bash
npm install
```

3. **Run Cypress tests in Chrome (headless mode):**

```bash
npx cypress run --browser chrome
```

4. **Or run Cypress with the interactive test runner:**

```bash
npx cypress open
```

In the Cypress UI, select the browser as **Chrome** and run the tests.
