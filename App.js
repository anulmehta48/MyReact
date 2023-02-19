  import React from "react";
  import ReactDOM from "react-dom/client"
  

  
  /*
  * PARCEL:-- ABOUT INFORMATIONS:-
  * It create Server for our project
  * HMR- Hot Module reloading
  * File Watching Algorithms-c++
  * BUILDING
  * MINIFY
  * Cleaning Code
  * Dev and Production build
  * Super fast build Algorithm
  * Image optimaization also
  * caching while development
  * compressed 
  * compatible with older version of browser
  * HTTPS on dev
  * Port number also manage this
  * consitent hashing algorithms
  * it is zero config 
  * 
  */
  
      
  //   const heading = React.createElement("h1", {}, "this is Original React");
  const heading = React.createElement("h1", {id:"id"}, "heading 1");

  const heading2=React.createElement("h2",{id:"title"},"heading 2")

  const container=React.createElement("div",{id:"conatiner"},[heading,heading2])

  console.log(heading)

  const root = ReactDOM.createRoot(document.getElementById("root"));

//   root.render(heading);
  root.render(container); 