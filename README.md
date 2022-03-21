This is my solution to [Frontend Mentor Space Tourism Challenge](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).

## Overview
The challenge is to build out this multi-page space tourism website and get it looking as close to the design as possible.

**User should be able to:**
- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

**Links**
- [Solution](https://github.com/NabillaTrisnani/frontendmentor_space-tourism)
- [Live Preview](https://nabillatrisnani-space-tourism.netlify.app/)

## My process
**Build by:**
- HTML5
- SCSS
- [Bootstrap 5](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
- [React](https://reactjs.org/)
- [AOS](http://michalsnik.github.io/aos/) for animation

**What I learned**
1. GET data from local json.
2. Using React Router V6.
3. How to use AOS in React and disabled it when it's on tablet or mobile using componentDidMount.
```
componentDidMount() {
    // initialise AOS
    AOS.init({
        // settings
        duration : 2000,
        //disable when device width is below 800px
        disable: function() {
                    var maxWidth = 800;
                    return window.innerWidth < maxWidth;
                 }
    });
};
```

## Author
- Frontend Mentor: [@NabillaTrisnani](https://www.frontendmentor.io/profile/NabillaTrisnani)
- Github: [@NabillaTrisnani](https://github.com/NabillaTrisnani)
- LinkendIn: [Nabilla Trisnani](https://www.linkedin.com/in/nabilla-trisnani/)
- Twitter: [@NabillaTrisnani](https://twitter.com/NabillaTrisnani)


