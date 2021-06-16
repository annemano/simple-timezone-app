# simple-timezone-app
## Introduction
Originally, I thought I would take the opportunity to use the MERN stack for this project, since React, Node.js and Express are on my "to learn" list. So I started a basic React course.
However, after a day, it became clear that:
- I would not be making use of React's main advantage, reusable components, at this stage
- I want to take more time learning React properly and probably wouldn't do it justice with 1 day of video tutorial

While I do believe that in order to be a scalable app, this would require a front-end framework, I've decided to build it with just HTML/CSS/JS.

As for the backend, while I've learned Ruby on Rails during the bootcamp, I felt it was "overkill" for this type of simple app. I thought I'd be best served with Node.js and Express, and I built it following several tutorials/blog posts and adapting to my current project.

In the end, my mindset was to keep it **as simple as possible**.

## How to run it
When in the root of the project, run:
- `npm install`
- `npm start`

## Front-End
I am using vanilla Javascript to set the current date and time, fetch the timezone name from the server, and send that information into the right cards in the HTML file.
I have separated the JS functions in different files according to what they do, trying to avoid code duplication.

## Backend
Since there are only two routes, the root and the api, I put them all in one server file. But this could get messy quickly if the app grows and would recommend to separate into different route files and import into the server file.

## Testing
This is new to me in Javascript. After some research I thought it would be best to use Jest (and supertest for endpoints) to run unit tests.
With only two test files, I've decided not to group them in a separate folder (I read different opinions on this) for now.
When in the root of the project, run:
- `npm test`

