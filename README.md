# React-Portfolio

A deceptively simple looking portfolio for displaying various web applications I have contributed to.

I recently was able to host my portfolio on it's own server.

You can check it out at the following link,
[Aaron Waterman Rose's Portfolio](https://www.aaronwatermanrose.com)

## Summary

This portfolio was created to showcase different projects I have been working on.

The projects currently displayed on my portfolio are hacks I worked on during my time at the UC Berkeley Full Stack Web Development bootcamp.

I have continued to work on hacks from other hackathons I have attended, in order to keep current with my skills.

I built this portfolio using the MERN stack (MongoDB, Express, React, Node).

It looks simple but there is quite a bit of functionality I had to configure that I am quite proud of.

It is being hosted on it's own server which I set up myself, using Apache to serve the website.

The portfolio was a challenge to set up, but I felt it made the most sense to work it out myself.

And if you want to check it out on your phone, I did make it mobile responsive.

## Structure

I seperated the the website into three sections,

 - an About page
 - a Portfolio page
 - a Contact page

### About Page

It contains my picture and some information about me, pretty simple stuff.

### Portfolio page

This is where I display some of the projects I have worked on.

Here I display the name, logo, a summary, and the links to the application demo and the Github repository.

I will be updating this page with other projects when I feel they are presentable.

At the moment I am only displaying projects I worked during the bootcamp, but if you'd like to see what other kind of projects I am working on you can always take a look at my [Github](https://github.com/RexStrider?tab=repositories).

### Contact page

This page contains a form you can fill out to contact me.

Just provide your name, your email, a message, and click submit.

This will send a message to my email address.

If for any reason the message does not go through (you will be informed by a modal if this is the case), then you can still reach me by clicking on my gmail link at the footer of the page.

If you'd rather email me directly, you can always send a message to arwaterman@gmail.com

But I put a lot of work into this, so if you find yourself checking out my portfolio page, consider trying out the contact form.

A bit of a technical fact about the contact page, I used some regex to check for an email address before sending off the message.

I did my best to make it simple and straight forward to use.

If you have any constructive feedback for me, feel free to send it in your message.

### Header

It's pretty simple, it just contains the navigation links.

It shrinks to a hamburger style of menu on tablet to phone sized screens.

### Footer

Contains links to my email address, my github repository, and my Linkedin account.

## Technology

 - MERN stack (as previously mentioned)
 - Nodemailer
 - Materialize
 - JavaScript