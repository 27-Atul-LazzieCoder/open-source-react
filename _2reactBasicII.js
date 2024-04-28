// most important and costly thing in React or in browser is that
// DOM nodes need to be manipulate(change continuously or update or hide the changes)

// how we can give attributes to our tag
// it create an object only
const heading = React.createElement(
  "h1",
  { id: "heading" }, // or
  // {id: "heading" , xyz:"abc"},
  "Hlw this is my first React code: "
);

// console.log(heading);   //in console we see that the object // a react element--->normally a js object...
const root = ReactDOM.createRoot(doucment.getElementById("root"));
root.render(heading); // render function/method  is converting this object into  create that h1 tag and put that inside the root

// II method
/*
<div>
    <div>
        <h1>hello i am h1 tag</h1>
    </div>
</div>

ReactElement(object)=> HTML(Browser Understands)
*/
// to write this code in react or in JS
const parent = React.createElment(
  "div",
  { id: "parent" },
  React.createElment(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "this is my h1 tag")
  )
);

console.log(parent); //object
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
