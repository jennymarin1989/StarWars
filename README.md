## Star Wars Lego Tech test

The main goal of performing this tech test to is build a small ES6 + based React application which uses an autocomplete search to search for 'People' from the Star Wars movies using the open source Star Wars API.

## User Stories

```
As a LEGO user,
So I can get more information about StarWars,
I want to have access to the StarWars Portal with one click.

As a user,
So I can get information about People from Starwars,
I want to be able to search for a specific character

AS a user,
So is easy for me to find the People from StarWars,
I want to be able to use an autocomplete search

As a user,
So I can know more details about the characters from Starwars,
I want to be able to view the name, height , birth-date and gender on the screen.


```

## Approach

My first step was a brainstorm of ideas and creation of user stories using the domain model as a guide to understand the user requirements.

To have a better understanding of this application, I drew a mockup with the client requirements showing idea of an initial MVP.

Mockup of the MVP:
<p>
<img src="https://user-images.githubusercontent.com/29259526/42257375-368e3e9a-7f4e-11e8-9f3c-ddce91531bab.png" width="400" ="align-center">
</p>

So, having an idea of the Minimun  Viable Product(MVP) and the requirements, I have started to plan the implementation of the app using React and Jest as a testing framework.

I've followed Test Driven Development principles, starting with basic tests to render a basic component like title and testing more complicated units of code later on. My idea was to reuse react components to keep my code DRY, therefore, I created parent and child components so I was able to pass parameters from parent to children.

To complete this tech test, it was required the use of StarWars API's, so I spent few hours reading the swapi documentation and getting an idea about how to get the data from the endpoint, at the end , I came to the conclusion of using a query to make a GET request to the API.

This project was developed in 2 and half days.