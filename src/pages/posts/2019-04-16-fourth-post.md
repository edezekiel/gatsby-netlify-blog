---
date: 2019-04-16
title: 'Looping Using ES6 Syntax (JavaScript)'
tags: ['third', 'second', 'fifth']
---

##JavaScript Loops Using for...of and for...in.
Earlier this week I was working on a coding problem that involved looping through characters in strings. I wanted to loop over all the characters in two strings to determine whether they were anagrams. This kind of task is common in technical interview situations.

This made me take a closer look at Javascript for loops. I was especially interested in the for...of and for...in loops, so I wrote this post to share what I found out.

##Looping Through Elements in a String using for...of
So, what’s a good way to loop through characters in a string? One approach is to use a traditional for loop:

for (let i = 0; i < string.length; i++) {console.log(string.charAt(i))}
This kind of for loop has been around in Javascript since its inception twenty years ago. However, ES6 introduced some spiffy new syntax.

Since the introduction of ES6, you can use a for...of loop:

for (character of string) {console.log(character)}
Isn’t the for...of statement much easier to read than the traditional for loop! It also requires less typing, which means less room for error.
