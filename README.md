# Intro

This project is created for my Shopify Internships Winter 2021 application.

Made by me, Etienne Giroux, egiroux@gmail.com

A live version of the site is hosted [here](https://shoppies.eggiroux.vercel.app/).

## Tech used

The project uses React and Redux for the UI and its data.
I used @Material-ui and React-icons for alerts and icons.

## Features

- API call to OMDB.
- Add / Remove Items to the nominations list.
- Add button is disabled when an item is already on list.
- List counter indicates how many movies are left to add on the list.
- Alert banners when the list is complete and when list is submitted.
- The list is persisted when leaving the page.
- Reactive mobile design.

## Installation

clone this repo

```
git clone git@github.com:eggiroux/shoppies.git

```

From the project folder

```
yarn install

```

Include your OMDB key in the .env file

```
REACT_APP_OMDB_API_KEY=

```

Run the application

```
yarn start
```
