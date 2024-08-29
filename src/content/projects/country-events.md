---
title: "Country Events"
description: "The Country Events web app is a React app using React Query, Tailwind, and Serverless functions that makes API reuests for country data and event data from Eventbrite."
heroImage: "/country-events.png"
---

## Summary

This project was developed to learn more about React Query and using Serverless functions to hide API secrets on a frontend-focused project. I’m using the [restcountries.eu](https://restcountries.eu) API to retrieve the country names and demographic statistics for each country. When you click on a specific country, the name of the country is then passed into the serverless function call to the Eventbrite API, which returns the events for that country and some related data.

## Future Plans

Future plans for this project include adding a way to save events you’re interested in attending and being able to click through to purchase tickets at Eventbrite. This will requrie a pretty big revamp because I wasn’t intending to add a database or authentication when I started this project. I will probably do a rewrite using Remix.
