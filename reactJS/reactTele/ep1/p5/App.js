const header = React.createElement('h1',{id: 'header'},"Welcome to ReactDOM");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
// ReactDOM.render(header, document.getElementById("root"));

const Parent = React.createElement("div", {id: "parent"},[
    React.createElement("div", {id: "child"},[
        React.createElement("h1",{},"I am an h1 Tag"),
        React.createElement("h2",{}, "I am h2 Tag"),
    ]),
]);

console.log(Parent);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(Parent);