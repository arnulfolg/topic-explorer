# GitHub Topic Explorer

## Assignment:

Your task is to build a React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic, and how many stargazers they have. And so forth.

To interact with the Github GraphQL API you'll need to have
  * a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
  * You'll want to make use of the key in the .env file within your application

You may use whatever React framework or library you find useful. URL routing is optional.


## Evaluation:

* We will pay particular attention to the way the code is organized, and to the overall readability
* Unit tests will be greatly appreciated
* Design will be ignored, however usability and accessibility will be taken into consideration
* Remember to update this README with instructions on how to install, run and test your application
* Your first goal is to have a working app, but feel free to improve the application however you see fit
* We hope that you can complete the assignment within 2 hours but don't set any time constraints
* Please reach out per email or by opening an issue if anything is unclear or blocking you

Best of luck

## Dev Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is using [Tailwind CSS](https://tailwindcss.com/) for the styles.

To use the demo app, you have to setup a GitHub Token in the REACT_APP_GITHUB_TOKEN variable in the .env file (in the root fo the project). To create a GitHub Token, you can visit [this link](https://github.com/settings/tokens)



### How to run app & test


To install dependencies

```sh
npm install
```

To run the demo app in development mode

```sh
npm run start
```



### Future Improvements

Feel free to elaborate on how you would improve any of the following topics 

* Code Structuring:

* Refactoring:

* Additional Features:

- To impove usability, I would like to add a form to enter the GITHUB TOKEN directly in the app. But that would mean the app should have been structued a bit differently. This would allow any people to add its token in a production environment. Another way to solve this, would be to add authentication with GitHub and use an Auth Token instead.

- I would like to add animations when the items are being removed and added back.

- Another good feature would be to add a stack of visited routes / visited queries, so users would be able to go back to their previuos search. Currently the URL loads the current search, but that isn't been used for anything right now. In future versions this would be a good way to go back.

- Also a message when the query returned nothing would be good as well, but this could be missleading, as the API returns no results when you search for a repo with no stars and no related topics as well as when the repo doesn's exist.



### Author
* [Arnulfo Loredo](https://www.linkedin.com/in/arnulfolg/)  