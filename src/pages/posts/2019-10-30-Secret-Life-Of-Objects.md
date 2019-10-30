---
date: 2019-10-30
title: "The Secret Life of Objects"
published: false
tags: ["javascript", "webdev", "beginners"]
canonical_url:
cover_image: ../../images/coverImages/2019-10-30-cover-image.jpeg
---

##The Secret Life of Objects

In my ongoing quest to master JavaScript, there have been several obstacles. One of the biggest
obstacles is chapter six of <a href=https://eloquentjavascript.net/06_object.html>Eloquent JavaScript</a>. I got through chapters 1-5 before starting the Flatiron bootcamp, but reaching
this chapter was like hitting a wall. That was over six months ago.

When I first came across this chapter JavaScript was really the only programming language I knew. I hadn't started learing Ruby and certainly didn't have experience with class-based languages like Java. Even after learning Ruby I still couldn't master this chapter. 

This blog post is part 1 of 2. In this post, I will discuss my solutions for the first two exercises in this chapter. 

##A Vector Type

###Solution

```javascript
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  coordinates() {
    console.log(`Coordinates ${this.x} and ${this.y}`);
  }
  
  plus(vec) {
  	return new Vec(this.x + vec.x, this.y + vec.y);
  }
  
  minus(vec) {
   return new Vec(this.x - vec.x, this.y - vec.y);
  }
  
  get length() {
   return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  }
}
```

###Lessons Learned



##Groups

###Solution

```javascript
class Group {
  constructor(arr) {
    if (arr === undefined) {
	  	this.entries = [];
    } else {
      this.entries = arr
    }
  }
  add(val) {
	if (!(this.has(val))) {
      this.entries.push(val);
    }
  }
  
  delete(val){
    if ((this.has(val))) {
      this.entries.splice(this.entries.indexOf(val), 1);
    }
  }
  
  has(val){
    return this.entries.includes(val)
  }
  
  static from(arr) {
    return new Group(arr)
  }
}
```