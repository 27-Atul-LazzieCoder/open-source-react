/* <div id ="parent">
    <div id =" child1">
        <h1>hi me as 1.1</h1>
        <h1>hi me as 1.2</h1>
    </div>
    <div id ="child2">
        <h1>hi me as 2.1</h1>
        <h1>hi me as 2.2</h1>
    </div>
</div>
 */

// to do this in react using js which is known as JSX

const heading = React.createElement("div", { id: "parent" }, [
  react.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "hi i am h1 first child"),
    React.createElement("h2", {}, "hi i am h2 first child"),
  ]),
  react.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hi i am h1 second child"),
    React.createElement("h2", {}, "hi i am h2 second child"),
  ]),
]);

//JSX SOMETHING which help written this complex code of react ... use for any tag in react and make this life easier
console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
