# Module 5 Challenge: Password Generator

## Overview

In this week’s challenge I've been tasked with creating an application that an employee can use to generate a random password based on criteria they’ve selected. This has been achieved by modifying the starter code. 

This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that I've written. It has a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of Password Special Characters from the OWASP Foundation](https://www.owasp.org/index.php/Password_special_characters).

## Technologies Used

* HTML
* JavaScript
* CSS

## Project Structure

* **index.html** - The HTML file containing the main structure of the application.
* **script.js** - The JavaScript file that contains all the JS functions, loops and arrays for the application.
* **style.css** - The CSS file containing all the styling for the entire application.

## Instructions/Demo for user

1. Open the page from the [deployed link](www) - See the below image for reference.

    ![Page Demo](/assets/demo.JPG)

2. Click on the 'Generate Password' button, you'll be faced with some prompts which will determine what your password will include.

    ![Prompt Example Demo](/assets/prompt.JPG)

3. Your password once generated will populate to the text box as below:

    ![Completed Demo](/assets/completed.JPG)



## Instructions

The following image shows the web application's appearance and functionality:

![password generator demo](./assets/05-javascript-challenge-demo.png)


* Generate a password when the button is clicked
  * Present a series of prompts for password criteria
    * Length of password
      * At least 8 characters but no more than 128.
    * Character types
      * Lowercase
      * Uppercase
      * Numeric
      * Special characters ($@%&*, etc)
  * Code should validate for each input and at least one character type should be selected
  * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

## Grading Requirements

This challenge is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * The challenge should not produce any errors in the console when you inspect it using Chrome DevTools.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot, and link to deployed application.


## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
