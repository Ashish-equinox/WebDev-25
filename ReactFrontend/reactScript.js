var app = document.getElementById("react-app");
var root = ReactDOM.createRoot(app);

// this way of executing code was fine but real way to do it is below method
// root.render(descriptionMethod("Ashish"));

// this is the correct way of writing react code cuz react has to return code in html format for browser to render so better use that format from start; also we can use different js functions which couldn't be possible in the previous way
root.render(<DescriptionComponent fullName="Moksh" collegeName="Reyansh College of Hotel Management"/>)

// here its simple js function which when called returns a jsx object as .render only accepts jsx objects

// these h1 tags aren't html tages they are jsx tags and are recognized by react as js objects
// these js objects are then converted to html by react and displayed on the browser

/* function descriptionMethod(){
    return <h1> React Managed Code {name} </h1>
} */

function DescriptionComponent({fullName, collegeName}){
    return <h1> React Managed Code by:- {fullName} , {collegeName}</h1>
}

// Props :- like parameters in functions ; they are objects that are passed from function call to the function
// Props of a fn are read only in react as they should be used in a fn only and not modified


