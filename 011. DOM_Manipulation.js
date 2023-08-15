/*
DOM stands for Document Object Model which is a platform and language neutral interface that allows programs
and script to dynamically access and update the content, structure, and style of a document.

JavaScript can change all the HTML elements in the page
JavaScript can change all the HTML attributes in the page
JavaScript can change all the CSS styles in the page
JavaScript can remove existing HTML elements and attributes
JavaScript can add new HTML elements and attributes
JavaScript can react to all existing HTML events in the page
JavaScript can create new HTML events in the page
In other words, the HTML DOM is a standard for how to get, change, add, or delete HTML elements.

So the definition of DOM manipulation will be when we use JavaScript to add, remove, and modify elements
of a website is called DOM Manipulation
*/

// Simplest Example of DOM Manipulation
/* Here we are changing the content inside the html tag using DOM manipulation
inside the index.html
    <h2 id='title'>Hello World</h2>
    <script src='script.js'></script>
inside the script.js
    cconsole.log("Hello")
    let title = document.getElementById('title')
    console.log('before manipulation: ',title.innerText)
    let message = 'Goodbye World!'
    title.innerText = message
    console.log('after manipulation: ',title.innerText)
*/

/* Here we are changing the HTML tag itself using DOM manipulation
inside the index.html
    <div id='title'>
        <h2>Hello World</h2>
    </div>
    <script src='script.js'></script>
inside the script.js
    console.log("Hello")
    let title = document.getElementById('title')
    console.log('before manipulation: ',title.innerText)
    let message = 'Goodbye World!'
    title.innerText = message
    console.log('after manipulation: ',titleDiv.innerText)
    titleDiv.innerHTML = `<p>${message}</p>`
*/

// we can change attributes, styling and also can remove any element, or we can also react
// on any element using DOM Manipulation, Let's learn this with an Exercise 3