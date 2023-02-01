  //   const heading = React.createElement("h1", {}, "this is Original React");
  const heading = React.createElement("h1", {id:"id"}, "heading 1");

  const heading2=React.createElement("h2",{id:"title"},"heading 2")

  const container=React.createElement("div",{id:"conatiner"},[heading,heading2])

  console.log(heading)

  const root = ReactDOM.createRoot(document.getElementById("root"));

//   root.render(heading);
  root.render(container);