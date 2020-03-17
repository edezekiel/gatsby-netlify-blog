---
date: 2020-03-17
title: "Recursion and DOM Nodes"
published: false
tags: ["javascript"]
canonical_url:
cover_image: ../../images/coverImages/2020-03-17-cover-image.jpeg
---

This week I completed Eloquent JavaScript Chapter 14 (yay!). 
The second exercise in this chapter was pretty challenging but I'm proud of my solution. 

The exercise was to create my own version of the <code>getElementByTagName</code> method. Before I get into my solution, let's go over some background information about the the Document Object Model (the "DOM").

<h2>The DOM is a Tree</h2>

The DOM is basically a tree. The base node of the tree is <code>document</code>. Subsequent nodes are either "element"
nodes or "text" nodes. 

Element nodes can contain elements nodes, which can contain element nodes, and so on. Text nodes form "leaves" of the tree. 

<h2>Flattening a Node</h2>

To get all of the elements in a document/node that contain a given tag name, I needed to recursively search through each element in that node. 

I broke the problem into two parts. First, I wanted to 
"flatten" a given node. Second, I wanted to filter out
nodes that match a given element name (i.e., 'h1'). The
second part is trivial so I'm leaving it out of this post. 

Here is my solution for recursively flattening a dom node:

```javascript
const flattenNode = (node) => {
    const arr = Array.from(node.childNodes);
    // reduce(callack = flatReducer, initialValue = [])
    return arr.reduce(flatReducer, []);
}

// The first time the callback is called, accumulator and 
// currentValue can be one of two values. If initialValue is 
// provided in the call to reduce(), then accumulator will 
// be equal to initialValue, and currentValue will be equal 
// to the first value in the array.
const flatReducer = (accumulator, currentValue) => {
    return accumulator.concat(
        (currentValue.nodeType === Node.ELEMENT_NODE  && (!!currentValue.childNodes)) ? 
        [].concat(currentValue).concat(flattenNode(currentValue))
        : currentValue
    )
}
```

Thank you [stack overflow](https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays) for inspiration on how to use reduce to recursively flatten an array.

<h2>Reduce</h2>

My solution makes use of the native JavaScript Array method <code>reduce</code>. As usual, [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) has great documention on this method.

To summarize, the <code>reduce</code> method takes a callback 
function (a "reducer") and an initial value. 

I defined the callback function ("flatReducer") separately to 
improve readability. The initial value is set to an empty array.

If the currentValue is an Element Node and it has child nodes, 
I recursively call the flattenNode function on that currentValue. Eventually everything gets concatenated and we get a flattened array of each element inside a dom node.

It still takes me a while to wrap my head around recursive 
functions, but it's so much fun to use.

I hope you've enjoyed this post!