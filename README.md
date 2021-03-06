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

and open `localhost:3000`

Or with Docker: `docker run -p 8888:3000 annemano/simple-timezone-app` and open `localhost:8888` *(disclaimer: first time setting something like this)*

It was also deployed on Heroku: [simple-timezone-app](https://simple-timezone-app.herokuapp.com/)

## Front-End
I am using vanilla Javascript to set the current date and time, fetch the timezone name from the server, and send that information into the right cards in the HTML file.
I have separated the JS functions in different files according to what they do, trying to avoid code duplication.
I would normally separate my css components in different files and import them in style.css, but this one was short enough to keep in one file.

## Backend
One endpoint returns a JSON with the city of Tokyo and the timezone of Japan.
Since there are only two routes, the root and the api, I put them all in one server file. But this could get messy quickly if the app grows and would recommend to separate into different route files and import into the server file.

## Testing
When in the root of the project, run:
- `npm test`

This is new to me in Javascript. After some research I thought it would be best to use Jest (and supertest for endpoints) to run unit tests.
With only two test files, I've decided not to group them in a separate folder (I read different opinions on this) for now.

Issues I went through:
- Jest doesn't recognize "import" or "export" statements, but I have to use these for front-end JS files. I installed Babel to fix it.
- I also had to mock the DOM in order to test my JS functions, using JSDOM.

Overall this is a topic I definitely want to learn more about - I wasn't able to test everything I wanted to because of the way my JS files are set up (calling each other) and how they are using fetch and DOM elements.
I also didn't figure out how to test the actual window/screen - I feel like this would be easier if I had used a frontend framework? All I could find online on this topic was about React.

## Future Improvements
- Use React for the front-end part
- Fully test the app with a react testing library
- Implement a simple search form so that a user can choose which city they want to have, and add up to X amount of cards (need a proper timezone api)
- Change the background image according to the city and the current location

Also, I want to learn more about Docker (adding this [course](https://www.youtube.com/watch?v=fqMOX6JJhGo) to my list to start, happy to receive recommendations)

