/**
 * FileName: app.js
 * 
 * @author Kevin Ma
 * @date June 8, 2016
 * 
 * StudentID: 300867968
 * website: comp125-s2016-lesson5.azurewebsites.net
 * @description This file is the main javascript file for the website
 */

(function () {
    "use strict";

    /**
     * This function uses the document.title to switch javascript function
     * when the page switches.
     * 
     * @function PageSwitcher
     * @returns {void}
     */
    function PageSwitcher() {
        switch (document.title) {
            case "Home":
                Home();
                break;
            case "About Me":
                About();
                break;
            case "Contact Me":
                Contact();
                break;
            case "Projects":
                Projects();
                break;
        }
    }

    /**
     * This function injects some text into the first paragraph of a page
     * based on it's document.title property
     * 
     * @function InitialText
     * @returns {void} 
     */
    function InitialText() {
        var paragraph = document.getElementsByTagName('p')[0];

        paragraph.textContent = "This is my first paragraph on the " + document.title + " page.";
    }

    /**
     * This function provides JavaScript code for the Home page
     * 
     * @function Home
     * @returns {void}
     */
    function Home() {
        InitialText();

        var parentElement = document.querySelector('div.row')

        var firstParagraph = document.querySelector('div.row p')

        var secondParagraph = document.createElement('p')

        parentElement.insertBefore(secondParagraph, firstParagraph)

        secondParagraph.textContent = 'secondParagraph'
    }

    /**
     * This function provides JavaScript code for the Home page
     * 
     * @function About
     * @returns {void}
     */
    function About() {
        InitialText();

    }

    /**
     * This function provides JavaScript code for the Contact page
     * 
     * @function Contact
     * @returns {void}
     */
    function Contact() {

    }

    /**
     * This function provides JavaScript code for the Projects page
     * 
     * @function Projects
     * @returns {void}
     */
    function Projects() {
        InitialText();

    }

    window.addEventListener("load", PageSwitcher);

})();