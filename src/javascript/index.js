//import '../css/styles.css';
import logMessage from './logger.js'
console.log('Webpack starter Project');

window.onload = ()=> {
    document.querySelector('h1').innerHTML = "js is working!";
    logMessage("this is my logger running in index.js, but imported from logger.js");
}