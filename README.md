# Wizeline_Academy_FrontEnd

### Front-end Challenge

## Introduction

The purpose of this challenge is to apply all the techniques and best practices covered during the front-end sessions to a real framework.

## Tech Stack

•	Javascript
•	Testcafe

## Project Structure
```
|-- ...
|-- pom           # Main Page Object Model folder.
|   |-- data      # Data provider, Roles.
|   |-- pages     # All the pages, including Common/Base page.
|   |-- tests     # Our test files are located here (only one fixture per file).
|   |-- ...
'-- package.json
'-- .env
'-- config files
'-- ...
```

## Pre-requisites

1. Node.js (latest version).
2. Browsers used (must be installed): Chrome, Firefox.

## Project Setup

1. Clone this repository.
2. Go to repository folder.
3. Run ```npm install```
4. Create a .env file with the following variables:

EMAIL=your@email.com
PASSWORD=your_password
BASE_URL=website_url/

## Dependencies
- testcafe
- dotenv
- babel-eslint
- eslint
- eslint-plugin-testcafe

## Scripts
- ``` test-chrome```: Runs all the tests on a chrome instance.
- ``` test-chrome-headless```: Runs all the tests on a headless chrome instance.
- ``` test-projects-headless```: Runs all the tests from the Project fixture on a chrome instance.
- ``` test-task-chrome```: Runs all the tests from the Task fixture on a chrome instance.
- ``` test-login-chrome```: Runs all the tests from the Login fixture on a chrome instance.
- ``` test-smoke```: Runs all the Smoke Tests on a chrome instance.
- ``` test-smoke-headless```: Runs all the Smoke Tests on a headless chrome instance.
- ``` test-currency-chrome```: Runs all the Login tests on two instances of chrome.
- ``` lint```: Runs eslint for all the files contained in the pom folder
- ``` lint-init```: Initializes eslint.
