# MyReact
run the server using => npx parcel index.html or npm run start or npm start 

Q1. what is Emmet?
Ans- Emmet is used for abbreviations for different-different sort expressions and it depends what you passed and it dynamically converted into boiler-plate or full code. Emmet is mostly used for HTML, XML, CSS.

Q3. React is a Library or a Framework?
Ans- React is a Library, so what is diff between library and framework
Framework-A Framework is collection of libraries, Api, compiler. It is based on MVC architecture A framework is place where you can write your own code inside in already defined structure. That means you have code already written and you can write your logics somewhere in-between. Example- Angular, Vue, Django.

Library- A library is collection of object and functions and modules, that is focus on solving a specific problem that means A library where you can put or take your own structure using bare minimum things of those object and functions and modules. That means you have huge library are written by other developers and you can take that library and use somewhere in your code structure with bare minimum things. So how we can make it like a framework so that we use libraries and makes UI components using like React, Redux, React-Router, CSS and more and compose it together and use the React like a framework.

Q4. why React is known as React?
Ans- Its called react because it is reacts whenever we have done something in our code. React was Developed by Facebook, a site that is constantly updates their data to improve user interface development and more effectively change(react) to when the user doing things like – mouse clicking , submitting and typing.

Q5. How does browser run html code? How it understood?
Ans- It understood because it came from browser API and because browser knows what is document because it has java-script engine that knows what is happing in your browser. It knows about window, window.document …. etc

Q6. what is CDN?
Ans- It is a Content Delivery Network refer to geographically distributed group of servers which work together to fast delivery of internet content.
CDN allows to quick transfer of loading internet content including like Html pages, Java-script files, stylesheets, images and videos. Today is CDN services is widely used by major sites like -Facebook, Netflix, Amazon.
It is also help to protect our websites against some common malicious attacks such as Distributed Denial of Services (DDOS).

Q7. what is CDN in Java-script file in React?
Ans- It is just like a Java-script code that is called react that is someone else is written for us or we can say that a Facebook engineer written for us. They gives us super power of react so that we can use this directly in our code and used react functionalities. 

Q8. what is cross origin in react?
Ans-In React, Cross Origin Resource Sharing (CORS) refers to a method that allows to make requests to the servers and deployed at the different domains for loading resources. Like- if you have frontend and backend two different domain then you need cors.
In the react cross- origin load the resources and gives us react functionalities for use and it gives us React and ReactDOM and here is Two Java-script files that is –
1-First is core of React for Development used in React native – Mobiles Android.
2-Second is for ReactDOM that is used for Web Version for-Web Development.
    
Q9. why we use crossorigin attributes in script tag for react-CDN link?
Ans-If you serve React from a CDN links then you have to keep the crossorigin attribute set because it verify that you are using sets the Access-Control-Allow-Origin*: HTTP header. It enables a better error handling experience in React

Q10. What is difference between React and ReactDOM?
Ans- React library is responsible for creating views and react gives us many functionalities like- React.createElement(), React.document.getElementbyId()  
For creating the html tags, objects of attributes and value of that objects by using React.
ReactDOM is responsible for rendering the UI in browser it basically used for whichever have you created using react like tags, attribute, objects and their values so ReactDOM takes that values and put inside in your root html components and whatever anything is written over there it makes Override or replace all with new things that you are giving modified things.

Q11.What is difference between react.development.js and react.production.js file via CDN?
Ans- The development build is used -as name suggest for development reasons. You have source, map, debugging and often times hot reloading ability in those builds and also you can used webpack for minifying things.

The production build in other hand, runs on production mode which means this is the code running in your client’s machine and it running on any server using some domain name.

Q12.What is async and defer?
Ans- async and defer are Boolean attributes which are used along with script tags to load the external script efficiently into our webpage. When we load any webpage in browser then two things happen -1. Html parsing 2. Script loading.


1.Normal html parsing   <script src=”” ></script> 
In this basically browser parsing html normally and when the script tags cames then it will stop and blocked the rendering of html and fetch the script values and execute the script and when the script executed done then it will come back and parse html again.  

2.Using async attribute <script async src=”” ></script>
In this basically browser parsing the html and if any script happens then fetched by the network along with the html parsing asynchronously and when it fetched and available in the browser it stop the html parsing and execute the script tag and when script executed done then it will came back and parse the html again.

3.Using defer attribute <script defer src=””></script>
In this basically browser parsing html along with script tags fetched by network parallelly and first html parsing completely and then only script tag will be executed. It is mostly used because defer maintains the order of execution of script tags.

Q13.how you can write <h1>tag in Hello word using HTML?
Ans-
 <!DOCTYPE html>
<html>
<head>
	<title>React</title>
</head>
<body>
	<div id=”root”>
		<h1>Hello Word</h1>
	</div>
</body>
</html>	

Output Hello Word

Q14. how you can write <h1>tag in Hello word in HTML using JavaScript?
Ans- So here we use script tag for DOM manipulation like this-
<!DOCTYPE html>
<html>
<head>
	<title>React</title>
</head>
<body>
	<div id=”root”></div>
</body>
<script>
	const heading=document.createElement(“h1”)
	heading.innerHTML=”hello word”
	const root=document.getElementById(“root”)
	root.appendChild(heading)
</script>
</html>
Output Hello Word

Q15. how you can write <h1>tag in Hello word in HTML in using React?
Ans-As we know React is library yes, and when it is a library so it is just like any other library. you can inject react library in your code by using bare minimum things. Here we are using react library using script links by cdn links Like-
<!DOCTYPE html>
<html>
<head>
	<title>React</title>
</head>
<body>
	<div id=”root”></div>
</body>
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
 <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script>
	const heading =React.createElement(“h1”,{ }, “Hello Word”)
	const root=React.DOM.createRoot(document.getElementById(“root”)
	root.render(heading)
</script>
</html>
Output Hello Word





Q16.At the end React.createElement or react elements what returns or what it is gives to us ? like- console.log(heading)
Ans- At the end React elements returning nothing but an object, this is not jsx this is just plain JavaScript Objects only. Like-{$$typeof,key,props,_store,prototype….}

Q17.what is React.DOM.createRoot(document.getElementById())?
Ans- ReactDOM is just like html DOM and it takes the elements id like(id=”root”) so whichever id you passed inside ReactDOM it makes it main root element of application where our React runs. So whatever you render using render() method in application that is rendered in this root.


Q18.what is root and what is root.render() method does?
Ans-A root is place where react runs and In every React Applications has only one root. And here we are passing the react elements inside the root so Basically this render method takes react element and modify/injected in our DOM or put inside in our html page.

Q19. Why do we need to create root?
Ans- we have to create root because react needs to know that where do you want to use react or where you want to put your all stuff.

Q20.Can we have multiple root in our react application?
Ans- Generally in our app we just see only one root and one render method in react that is only single place where you injecting react inside in our application.
This is the stuff that you done only once time in app.

Q21. why we use react and why react is library explain in brief?
Ans- when you build the whole website using only html+ CSS +JavaScript then it gets huge and complicated and when you change any small things it affected others but using React, we can use this separately where we want to use this and it only changes those things only like using root. That is beauty of React and you can also use in your existing projects.  

Q22.what is shorted program in react?
Ans- The CDN links are the shorted program in react.

Q23.what is parts of React.createElement(“h1”,{ }, “Hello word” ) explain it?
Ans- React gives us many functionalities for creating objects so here we have three Arguments of createElement ()- 
1.Tags </> => which html tags do you want to create.
2.Object {props} => All Attributes for id, className, props and all JavaScript    function and method we can write here.
3.Value/message “hello world” => whatever tags or elements have you created inside that element you can put some value in it using this third argument.

Q24.why react is popular?
Ans- The best things in react is its API it is very easy and simple. The reason why it is popular is because its API is very easy and anything that you write it make sense to understood what is it.

When React is build they came with style of writing code about that they wanted to write their whole html code in JavaScript that why react came with idea of write html CSS you can write in JavaScript so you don’t have to go to your html file for do anything so that’s why JSX came into the picture so when the React build it will came with React.createElement(“h1”, {id=”title”}, ”hello word”) but when you write multiple element together using like this in one file so it become very confusing and complicated this is not user friendly so that we use separated files of our element like app.js or other files.js.
 
Q25.why should I import my CSS in html into head tag?
Ans – you should because if you placed your CSS in head to its load first so that it increases the performance of your web page but if when you have multiple CSS and you want to add CSS in your code part then it will loading in orders so it will override first so it will be confusing and complicated so that put it on head part.

Q26. which company that is not use React?
Ans Google is not used React otherwise almost all company are used React.

Q27.when is it production ready app?
Ans-We need to Minifying, removing console, servers, bundle things, optimization, cashing etc. so make you fast running app used bundler or webpack’s like- vite, parcel, webpack’s. 

Q28.what is bundler or webpack’s?
Ans- It is a package. It packages like a module of JavaScript file or some peace of code they are made production ready our application so that if we want to use these packages in our code, we have to use package manager for it like- npm i vite
Some bundlers are like- vite, parcel, webpack’s. and old React app is used bundler that is=> create-react-app webpack and this webpack used babel.

Q29. What is NPM?
Ans- npm does not stands for node package manager without this name you can assume any name for it. Like – no paints mom, nhi pta mujhe. But all the package of your application or project that is manage by NPM. And why we have to use npm because we need lots of thing or packages because our react app cannot build our app by just injecting React into our Application so that it is useful for us- Like=>npm init (npm initialization) or we can use yarn also instead of npm.
Like=>npm init -y (this is skips some steps)

Q30.why, we use npm in react App?
Ans- we want to manage packages that is why we use npm in react app because react app is huge app with just not run on react their lots of super powers which are needs and those super power came with different different packages which packages are presented by using npm.

Q31.what is package.json?
Ans- when you have used npm init then whichever configuration have you got that all configurations details are stored in this package.json file. Like –
Project details, version, descriptions, author, git repository, dependencies etc.

Q32.what is dependencies or dev dependencies?
Ans-Dependencies is basically all the package that our project needs called dependencies and Dev dependencies that is helpful for developers for doing fast in organized manner a lot of things that is called dev dependencies like-parcel, nodemon etc.

Q33.what is packge.lock.json?
Ans-It is very important file in our app to know what exact version of your packages are running currently in your production and also we don’t want uncertainties on our machine or project on production so we have package.lock.json which locks the version of packages for us. It proof you have that which exact version have you used in your app. So please make sure you don’t put this file inside git-ignore. 


Q34.how we can ignite our app?
Ans- Using vite, parcel, webpack we can ignite our react app like-
=> npm install parcel   (used for production and installed globally)
=> npm install -D parcel  (used for development or dev dependencies)
                            ^
	         --save-dev (same thing)

Q35.how the dependencies upgrade or update automatically?
Ans- when we installed a package using npm its installed in package.json file and here we have to insure that for upadation for caret (^) and tilde (~) like –
"devDependencies": {
    "parcel": "^2.8.3",  if you want update automatically use ^ for miner versions. 
    "parcel": "~2.8.3",  if you want update automatically use ~ for major versions.
    "parcel": "2.8.3",   if you don’t want update and use only this so use normally. 
  }

Q36.what difference between npm and npx?
Ans- npm=> this is node package manger for installing the packages 
         npx=> execute using npm of npm packages and servers.


/*
  * PARCEL:-- ABOUT INFORMATIONS:-
  * It create Server for our project
  * HMR- Hot Module replacement 
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
  * 
  */
  