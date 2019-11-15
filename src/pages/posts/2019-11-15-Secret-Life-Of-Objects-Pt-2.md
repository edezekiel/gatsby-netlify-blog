---
date: 2019-11-15
title: "The Secret Life of Objects, Part 2"
published: false
tags: ["javascript", "webdev", "beginners"]
canonical_url:
cover_image: ../../images/coverImages/2019-11-15-cover-image.jpeg
---

This post wraps up my two-part series on <a href=https://eloquentjavascript.net/06_object.html>Eloquent JavaScript</a>, chapter 6. 
Checkout <a href="2019-10-30-Secret-Life-Of-Objects.md">part one</a> if you haven't read it yet.

I am so happy to have finally completed Eloquent JS chapter six. This has been a personal milestone of my for a long time. 

![](https://media.giphy.com/media/lnlAifQdenMxW/giphy.gif)

Below are my answers to Exercises 3 and 4 of the chapter.

##Iterable Groups

Exercise 3 requires us to make the <code>Group</code> class from Exercise 2 iterable. It took me a minute
to realize that this was really a two part problem. First, I had to create the <code>GroupIterator</code> 
class. Second, I had to replace the <code>Group</code> <code>Symbol.iterator</code> with 
the newly created <code>GroupIterator</code>.

```javascript
class GroupIterator {
    constructor(group) {
        this.entries = group.entries;
        this.i = 0;
    }

    next() {
        if (this.i === this.entries.length) return {done: true};

        let value = this.entries[this.i]

        this.i++;

        return {value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
```

###Lessons Learned

Even after reaching this solution I still felt like there was JavaScript magic going on. Some part of the
language specification was smart enough to know that a <code>Symbol.iterator</code> with a <code>next</code>
method should work with a <code>for...of</code> loop.

So, I did a little digging online. Turns out ECMAScript 2015 introduced something called an "iterator protocol".
<a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable>MDN</a> 
has a great summary on this language feature:

>The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite), and potentially a return value when all values have been generated.
>An object is an iterator when it implements a next() method with (some additional) semantics.

##Borrowing a Method

The second exercise asks us to fix a malformed call to the <code>hasOwnProperty</code> method. Here
is my solution:

```javascript
let map = {one: true, two: true, hasOwnProperty: true};

console.log(hasOwnProperty.call(map, "one"));
// -> true
```

###Lessons Learned

This problem was deceptively tricky. It took me a while to realize that the local 
execution environment had a <code>hasOwnProperty</code> method just laying around. 

If you're interested in testing this out, just pull up DevTools in chrome and 
type <code>hasOwnProperty</code>. This will return the function, seemingly out
of thin air. 

If you're interesed in learning about the DOM execution environment, check out
my post <a href="2018-12-13-Where-Is-The-DOM.md">Where is the DOM?</a>

###Concluding Thoughts

I has a lot of fun solving these exercises. Now that I've finished Chapter 6, I can't wait to 
tackle the rest of Eloquent JavaScript.