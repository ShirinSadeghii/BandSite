## Images: ##
<blockquote class="imgur-embed-pub" lang="en" data-id="a/r88lnBn"><a href="//imgur.com/a/r88lnBn">BandSite Portfolio</a></blockquote>

## Overview ##

In this Project, the task was to create a Bandsite website by integrating live data from the provided API. The focus is on making the site dynamic by replacing hardcoded data with real-time data fetched from the server. The project includes creating a BandSiteApi class to handle API interactions, implementing features on the Bio Page for comments, and displaying shows data on the Shows Page.

## Tools & Resources ##

Sass: Utilized Sass for CSS preprocessing to enhance code conciseness and reusability.
Axios: Incorporated Axios for making HTTP requests to the provided API.
Postman: Used for manual testing of the API and understanding its functionality.
Git and GitHub: Employed version control to manage code changes and collaboration.

## Functional Requirements ##

### BandSiteApi Class ###

Implemented a class named BandSiteApi with the following methods:

* constructor: Accepts an API key, stores it, and sets the base API URL.
* postComment: Sends a POST request to the API to add comments.
* getComments: Sends a GET request to retrieve and sort comments.
* getShows: Sends a GET request to retrieve show data.

### Bio Page - Comments Section ###

* Displayed comment data fetched from the API.
* Enabled users to add new comments without reloading the page.
* Newly-added comments are displayed at the top.
* Incorporated placeholder for avatar images.

### Shows Page ###
* Displayed shows data retrieved from the API.

## Visual Design Requirements ##

* Ensured responsiveness to closely resemble provided mockups.
* Incorporated any feedback provided in previous sprints to meet client expectations.

## Implementation Requirements ##

* Followed the specified folder structure and naming conventions.
* Compiled CSS from Sass using variables and mixins.
* Used BEM convention for CSS classes.
* Implemented Flexbox for layouts.
* Utilized Axios for making API HTTP requests.
* Registered event handlers using addEventListener.
