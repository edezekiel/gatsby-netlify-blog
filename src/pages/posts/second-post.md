---
date: 2019-04-25
title: 'Using React Router for a Single Page Application'
template: post
thumbnail: '../thumbnails/reactrouter.png'
slug: using-react-router-spa
categories:
  - JavaScript
tags:
  - javascript
  - react
  - routing
  - react-router
---

React doesn't come with a built-in router, but we can easily achieve routing with the `react-router-dom` library. **Routing** is how a web applications direct traffic. (If you know what routing is, feel free to skip this section.)

Example: If you go to [taniarascia.com](/), you end up on my home page. If you go to [taniarascia.com/me](/me), you're redirected to my about me page. If you go to [taniarascia.com/categories/javascript](/categories/javascript) or [taniarascia.com/categories/css](/categories/css), you end up on a category listing page. The routes for these pages look something like this:

- `/` - root
- `/:page_id` - page
- `/categories/:category_id` - category

I'm not actually making a folder called `categories` and filling it with a bunch of files like `javascript.html` or `css.html`, I just have one template and the router knows to direct to the proper template. Once it gets to the template, it can pull from the URL to know which variables to display - for example, JavaScript or CSS related posts.

This website also happens to be a **Single Page Application** (or SPA) - only one page is loaded, and every click to a new page loads some additional JSON data, but does not actually request a new resource like loading `index.html` and `about-me.html` would.

I'm going to show you how to set up a simple SPA in React with `react-router-dom`, and pull in data dynamically through the URL. Below is the source of the completed project if you get lost along the way.

- [View Source](https://github.com/taniarascia/router-example)
