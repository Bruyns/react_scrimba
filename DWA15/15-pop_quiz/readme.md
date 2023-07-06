1. Why do we need to `import React from "react"` in our files?
when making components that uses react internally you need to import react so the 
IDE intentifies what to use. in react 17 and later this is done automatically
- the JSX syntax is defined in react and needs it to be inside the codebase

2. If I were to console.log(page) in index.js, what would show up?
if page was a constant and had html elements inside it it would display the html
elements as it apears in the DOM.
-returns base javascript object with all the react elements that describes what react should eventually add to the DOM

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
the child elements need to be surrounded by a parent element.
-we need all of our JSX to be nested in a single parent

4. What does it mean for something to be "declarative" instead of "imperative"?
declarative means you code what needs to be done and the pc does everything else as to how it should be done. imperative means the developer neeeds to specifically tell 
the pc how the task should be done in steps
-

5. What does it mean for something to be "composable"?
- we have small pieces that we can put together to make somehting greater with the individual pieces.