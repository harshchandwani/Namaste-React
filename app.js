const parent = React.createElement("div",
    {id:"parent", xyz:"abc"}, 
    React.createElement("div", 
        {id:"child"}, 
        [React.createElement("h1",{},"This is H1"), React.createElement("h2",{},"This is H2")]
    )
);


const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hey there from Reactjs")
//createElement(tag, object, innerHTML)


// heading is an Object, we are creating an element at the end of the day 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
