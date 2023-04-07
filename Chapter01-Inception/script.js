//Using Js
/* const root = document.getElementById("root");
const heading = document.createElement("h1");
heading.innerText = "Hello World";
root.append(heading);
 */

//Using React

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// Notes:
/* 
For nested elments we have following examlpes.
<div id="parent">
    <div id="child">
    <h1>I am H1 tag</h1>
    </div>
</div>
 */

/* const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am H1 tag")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); */

/* 
<div id="parent">
    <div id="child">
    <h1>I am H1 tag</h1>
    <h2>I am H2 tag </h2>
    </div>
</div>
 */
/* const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); */

/* 
<div id="parent">
    <div id="child1">
    <h1>I am H1 tag</h1>
    <h2>I am H2 tag </h2>
    </div>
    <div id="child2">
    <h1>I am H1 tag</h1>
    <h2>I am H2 tag </h2>
    </div>
</div>
 */

/* const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
  [
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am H1 tag"),
      React.createElement("h2", {}, "I am H2 tag"),
    ]),
  ],
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
 */
//This nested loops are not easy to write and readable for that we use JSX in React.
