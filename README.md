### Personal Portfolio Site

### Built for CS 510 Introduction to Web Development
Author: Robin Su

Term: Spring 2022

This a my final project created for Introduction to Web Development. It is a single-page website that highlights my previous work experience, projects, and a short bio. It also includes a contact form where site visitors can send me a message (via email).

I used a combination of HTML, CSS, JavaScript, and [jQuery](https://api.jquery.com/) to create all of the elements for the site. 

I used classes from [Bootstrap 5](https://getbootstrap.com/) to help create a few elements, including: 
 - main layout - spacing, flexbox classes, and row/col classes
 - button styling and button hover behavior
 - navbar (specifically, the .navbar-toggler class and JavaScript plugin for collapse functionality)
 - contact form / form control

For the contact form, I used the [EmailJS](https://www.emailjs.com/docs/sdk/send-form/ ) SDK to implement functionality to allow site visitors to send me an email. I used [Font Awesome](https://fontawesome.com/) for my social media links, as well as font sizing using their predefined classes


The deployed site can be accessed at [robinjsu.github.io/portfolio](https://robinjsu.github.io/portfolio).

This site can also be deployed locally using node/npm. See instructions below. I used the [Express](https://expressjs.com/) JavaScript framework to set up the server.

### Instructions for Local Deployment

Requirements: To deploy locally, you must have [NodeJS](https://nodejs.org/en/) (v16.15.1 LTS) installed. It includes [npm](https://docs.npmjs.com/about-npm) (v8.6.0), which will be used to install all dependencies and to spin up the server. All dependencies are listed in `package.json`.

### To Run:

 1. Clone this repo
 2. From the root directory, where  `package.json` lives, run the following command in a terminal to install all dependencies: 
 ```
    npm install
 ``` 
 3. From the same root directory, run site on the local server listening on `port 5000` with:
 ```
    npm start
 ```
 4. In a browser tab, view the site at 
 ```
    http://localhost:5000
 ```
 5. `ctrl-c` to stop server

### Resources:

 - Using custom fonts - https://www.digitalocean.com/community/tutorials/how-to-load-and-use-custom-fonts-with-css
 - Bootstrap 5 - https://getbootstrap.com/
 - EmailJS: https://www.emailjs.com/docs/sdk/send-form/ 
 - Font Awesome - https://fontawesome.com/
 - NodeJS (latest versions) - https://nodejs.org/en/
 - Express - https://expressjs.com/

