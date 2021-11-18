
# MyReads: A Book Tracking Web App

    MyReads web app is created using React.js as a part of the Udacity's React Nanodegree program.

## Description

    In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

    * Currently Reading
    * Want to Read
    * Read

    Additionally you can search and add books to any shelf.

## Development

    A static example of the CSS and HTML markup was provided, and a backend API to communicate with a Backend Server from Udacity for book information and long term storage.Then I added interactivity to the app by refactoring the static code into react components.

## Starter Code

    https://github.com/udacity/reactnd-project-myreads-starter

## Backend Server

The provided file BooksAPI.js contains following methods to perform necessary operations on the backend:

* ``` getAll ``` To get all the books from the API
* ``` update ``` Update shelf information of the book
* ``` Search ``` book in the database

## Installation

    * Clone/Download this repo.
    * Run npm install  or yarn install in the project directory to install dependencies.
    * Run the project with npm start .

## Project Specification

    * The main page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and all of its authors.
    * The search page has a search input field. As the user types into the search field, books that match the query are displayed on    the page.
    * Each book (in the main page, or in the results of a search) has a control that allows users to move it between shelves. The control is tied to each book instance.
    * Component state is passed down from parent components to child components. The state variable is not modified directly - setState() function is used correctly.
    * Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.
    * UI and URL in the browser’s address bar are controled using react router.
    


