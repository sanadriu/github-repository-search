# About the project

This project is an app to search repositories from Github, by using its API. It has been developed with React, written in TypeScript and styled with TailwindCSS. Libraries such as Axios.js and React-Query have been used to manage API Rest queries.

## How to run it.

First step is to clone the repository with the next URL: `https://github.com/sanadriu/github-repository-search.git`

Later, in the project directory, you will have to run `npm install & npm install -D` to install all the dependencies required to run the app.

The app makes use of environment variables, such that you will have to create a `.env` file in the project folder where you will have to specify 2 values:

- REACT_APP_GITHUB_AUTH_TOKEN: It's an authentication token used to interact with the GitHub API.
- REACT_APP_GITHUB_URL: It's currently `https://api.github.com`

Once the installation has been finished, as it's an app created with Create-React-App, you must run `npm start` to run it in development mode, which will Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

If you would like to create a bundle for the app, minified and optimized to be run in production mode, you must run `npm build` folder.

## Future Improvements:

- Implement Storybook, which is an open source tool for building UI components and pages in isolation.
- Implement testing.
- Implement GraphQL to fetch repositories from Github API.

## Personal feedback:

It's the first time I used TypeScript in a project. It has helped my in having a better control of the types that some values must have when passing them as argument for functions or components. When creating components, it has been similar as using the React-PropTypes library. It's appreciated to know the type of the parameters of new functions without guessing if I had to pass a value with A or B type. I have also tried make the request with GraphQL after finished the basic requirements, but I finally haven't implemented it.
