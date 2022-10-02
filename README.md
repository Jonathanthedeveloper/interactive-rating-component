# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties


### What I learned


```css
:root {
  --orange: hsl(25, 97%, 53%);
  --white: hsl(0, 0%, 100%);
  --lightgrey: hsl(217, 12%, 63%);
  --mediumgrey: hsl(216, 12%, 54%);
  --darkblue: hsl(213, 19%, 18%);
  --verydarkblue: hsl(216, 12%, 8%);

  --transition: all ease 1000ms;
}

.rating-contain {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--darkblue);
  border-radius: 20px;
  width: 30%;
}
```
```js
ratings.forEach(rating => {
    rating.addEventListener("click", function(){
        removeStyle()
        rating.style.backgroundColor = "hsl(217, 12%, 63%)"
        rating.style.color = "hsl(0, 0%, 100%)"
        rate = rating.textContent;
})
});


function removeStyle(){
   for(let i = 0; i < ratings.length; i++){
    ratings[i].style.backgroundColor = "hsl(216, 12%, 8%)";
    ratings[i].style.color = "hsl(217, 12%, 63%)"
   }
}
```

**Note: Delete this note and the content within this section and replace with your own learnings.**


## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Errorman2003)
- Twitter - [@yourusername](https://twitter.com/err_or_man)


