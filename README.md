# MyReact
Q1. what is Emmet?
Ans- Emmet is essential toolkit for web developers it allows to type shortcuts 
that are then expanded into full peace of code for writing HTML and CSS based on abbreviation structure and it depends what you passed and it dynamically converted into boiler-plate or full-fledge code. Emmet is mostly used for HTML, XML, CSS.

Q2. what is difference between Framework and Library?
Ans- 
Framework	
1.Framework is collections of libraries that implements particularly methodology. Example-Angular, Vue 	
2.Inversion of control in Framework decides when we have to call the library.	
3.Framework used for build or deploy application quickly.	
4.A change in one part of application does not affect the entire application.
5.It Increased the application development cost.	
6.we have to up-to-date with new/deprecated feature of every version.	

Library
1.Libiray is collections of packages That is implements a particular function or modules, popular libraries are React and jQuery.
2.Inversion of control in Developer decides when we have to call the library.
3.Library is used for reusable the function and enhance functionalities of Application.
4.A change in one part of application does not affect the entire application.
5.It Reduce the application development cost.
6.Using a library in our code tied to that library and be Aware of new/deprecated library.

Q3. React is a Library or a Framework?
Ans- React is a Library, so what is diff between library and framework
Framework-A Framework is collection of libraries, API, compiler. It is based on MVC architecture A framework is place where you can write your own code inside in already defined structure. That means you have code already written and you can write your logics somewhere in-between. Example- Angular, Vue, Django.

Library- A library is collection of packages and functions and modules, that is focus on solving a specific problem that means A library where you can put or take your own structure using bare minimum things of those packages and functions and modules. That means you have huge library are written by other developers and you can take that library and use somewhere in your code structure with bare minimum things. So how we can make it like a framework so that we use libraries and makes UI components using like React, Redux, React-Router, CSS and more and compose it together and use the React like a framework.

Q4. why React is known as React?
Ans- Its called react because it is reacts whenever we have changed something in our code. React was Developed by Facebook, a site that is constantly updates their data to improve user interface development and more effectively change(react) to when the user doing things like – mouse clicking , submitting and typing.

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
    
Q9. Why we use crossorigin attributes in script tag for react-CDN link?
Ans-If you used React from a CDN links then you have to keep the crossorigin attribute set because it verify that you are using sets the Access-Control-Allow-Origin*: HTTP header. The purpose of crossoringin attributes is used to share the resources from one domain to another domain. Basically, is used to handle the CORS requests and It enables a better error handling experience in React

Q10. What is difference between React and ReactDOM?
Ans- React JavaScript library that is used for building user interface (UI). The react package contains React.createElement(), React.Component, React.Children and other helpers related to elements and components classes. You can think as these universal helpers that helps to build the components in react.  

ReactDOM  is also JavaScript library that allows to interact with the DOM. The react-dom package contains ReactDOM.render(), and react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup() And it is responsible for rendering the UI in browser it basically used for whichever have you created using react like tags, attribute, objects and their values so ReactDOM takes that values and put inside in your root html components and whatever anything is written over there it makes Override or replace all with new things that you are giving modified things.

Q11.What is difference between react.development.js and react.production.js file via CDN?
Ans- The development build is used -as name suggest for development reasons. In that we are taking several times to development build and in this time, we not made public our application.

The production build in other hand, runs on production mode which means this is the code running in your client’s machine in public mode and it running on any server using some domain name. You have source, map, debugging and often times hot reloading ability in those builds and also you can used webpack for minifying things before made public/production this.

Q12.What is async and defer?
Ans- async and defer are Boolean attributes which are used along with script tags to load the external script efficiently into on our webpage. When we load any webpage in browser then two things happen -1. Html parsing 2. Script loading.

1.Normal html parsing   <script src=”” ></script> 
In this basically browser parsing html normally and when the script tags cames then it will stop and blocked the rendering of html and fetch the script values and execute the script and when the script executed done then it will come back and parse html again.  

2.Using async attribute <script async src=”” ></script>
In this basically browser parsing the html and if any script tag happens then  it fetched by the network along with the html parsing asynchronously and when it fetched and available in the browser it stop the html parsing and execute the script tag and when script executed done then it will came back and parse the html again.

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
	const root=React.DOM.createRoot(document.getElementById(“root”))
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
Ans- when you build the whole website using only html+ CSS +JavaScript then it gets huge and complicated and when you change any small things it affected others  alsbut using React, we can use this separately where we want to use this and it only changes those things only like using root. That is beauty of React and you can also use in your existing projects.  

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
 
Q25. why should I import my CSS in html into head tag?
Ans – you should because if you placed your CSS in head to its load first so that it increases the performance of your web page but if when you have multiple CSS and you want to add CSS in your code part then it will loading in orders so it will override first so it will be confusing and complicated so that put it on head part.

Q26. which company that is not use React?
Ans Google is not used React otherwise almost all company are used React.

Q27.when is it production ready app?
Ans-We need to Minifying, removing console, servers, bundle things, optimization, cashing etc. so make you fast running app used bundler or webpack’s like- vite, parcel, webpack’s. 

Q28.what is bundler or webpack’s? why we need this?
Ans- It is a package. It packages like a module of JavaScript file or some peace of code they are made production ready our application so that if we want to use these packages in our code, we have to use package manager for it like- npm i vite
Some bundlers are like- vite, parcel, webpack’s. and old React app is used bundler that is=> create-react-app webpack and this webpack used babel.

Q29. What is NPM?
Ans- NPM is stands for Node Package Manager. It is a tool for package management and the default package manager for Node projects. NPM installed when NodeJS is installed on machine. It comes with command-line interface (CLI) that is used for interact with online database of NPM. This database is called NPM Registry and it hosts public and private packages to add or update the packages and we use CLI for interact with this database like- npm alternative is yarn

How we initialized npm we use like this-
=> npm init        this follows the configurations steps and create package.json
=> npm init -y   this is skip the setup steps for configuration.
npm does not stands for node package manager without this name you can assume any name for it. Like – no paints mom, nhi pta mujhe. But all the package of your application or project that is manage by NPM. And why we have to use npm because we need lots of thing or packages because our react app cannot build our app by just injecting React into our Application so that it is useful for us- Like=>npm init (npm initialization) or we can use yarn also instead of npm.
Like=>npm init -y (this is skips some steps)

Q30.why, we use npm in react App?
Ans- we want to manage packages that is why we use npm in react app because react app is huge app and it just not run by itself because there have lots of super powers which are needs to helps other and those super power came with different different packages which packages are presented by using npm.

Q31.what is package.json?
Ans- This file is mandatory for every node project. It contains basic information about project. when you used npm init command then whichever configuration have you given by yourself that all configurations’ details are stored in this package.json file. Like –
Project details, version, descriptions, author, git repository, dependencies etc.

Q32.what is dependencies or dev dependencies?
Ans-Dependencies is basically all the package that our project needs called dependencies its contains library like – React, Angular, Vue, Express, jQuery etc.  
=> npm install packagename or npm i packagename --save 

Dev dependencies that is helpful for developers for doing fast development in organized manner a lot of things that is called dev dependencies. It contains modules/packages like-parcel, vite, webback, nodemon etc.
=> npm install -D packagename or npm i packagename --save-dev

Q33.what is packge.lock.json?
Ans-This file is automatic generated by npm modified things commands. It is very important file in our app to know what exact version of your packages are running currently in your production mode so using that records it re-generated the all packages of app and also we don’t want uncertainties on our machine or project on production so we have package.lock.json which locks the version of packages for us. It proof you have that which exact version have you used in your app. So please make sure you don’t put this file inside git-ignore. 


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
Ans- npm=> this is node package manager for installing the packages 
Use like=> npm i, npm run
npx=> it is same like npm but it executes npm packages without downloading    it that means it is equal like => npx == npm run


Q37.What is tree shaking?
Ans-when we use bundlers like webpack or parcel then it will minifying our code, removing dead code. It is relying on importing and exporting of modules in JavaScript files and bundling our code in one single file for production ready that is known as tree shacking. It only used needed modules/functions from installed packages and unused modules/functions ignored by parcel.



Q38.What is Hot Module Replacement?
Ans- when we have changed modules(files) in our app in anywhere in any file then HMR take the responsibility to reloading the file and make changes only that you have changed like add or remove in our file in running state without full reload. It saves valuable development time that is called hot module replacement.  

Q39.What is parcel? List down all superpower of parcel and any 5 describe in your words?
Ans- Parcel/webpack is a type of web application bundler that is used for development and production purpose. It gives power to our application with different type of functionalities and features. It run by using entry point of our file like HTML, JavaScript Parcel is most important bundler for react application- 
=> INSTALL=> npm install -D parcel 
=> RUN     => npx parcel <entry point>
=> BUILD  => npx parcel build <entry point>
1.Create a server
2.HMR- Hot Module Replacement
3.File watcher algorithms -C++
3.Bundling
4.Cleaning our code
5.Dev and Production build
6.Super-fast build algorithm
7.Image Optimization 
8.Cashing while development 
9.Compression 
10.Compatible with older version of browser
11.Https server on dev
12.Port number management 
13.Consistent Hashing algorithm
14.Zero configuration came







#Create server=>  Parcel is ignite our app and create very fast development server on http://localhost:1234 and it reloaded by itself when you do changes in your code.

#Bundling=> when we run the parcel then it will create two file one is the 
.parcel-cache in this it store the some file for reload quickly and increase dev server speed and second file dist that is build like a production ready app file.

#Compatible with older version of browser=> when we use browserlist and inside you passed “last two versions” then it insures you that you can be able to use you app in all browser which has last two version and also you specified your app only for run in this browser like chrome so that time “last two chrome versions”.

#Https server on dev=>we can use our dev server in https secure mode using 
--https while running our run command like - npx parcel index.html --https 

#Port number=>when we use two different different app in one file and when we run both app server same time then parcel create two different server with different PORT number for each app that means it manage the post number  


Q40.What is .parcel-cache?
Ans-.parcel-cache is used by parcel to reduce the building time. It stores information about your project when parcel build it, so that when you re-build then it does not have to re-parse and re-analyze everything from scratch. Its is key reason why parcel can be so fast in development mode. 

Q41.What is NPX?
Ans-NPX is stands for Node Package Execute. npx is a tool that is used to execute the packages. It comes with npm when you installed npm then npx automatically will be installed. It is a npm package runner that can execute any package that you want form npm registry without even installing that package.


Q42.What is .gitignore? what we add and not add into it?
Ans-.gitignore is a text file that name suggests ignore so that whichever file or folder that you don’t want to add on git those file is ignore by .gitignore when you commit the file for GitHub repository so it will not goes into your GitHub so that you have to take file/folder name and put inside your .gitignore file. 

And which file that will be re-generated by server that file we add in .gitignore and which file not be able to re-generated by the server that file we not add in .gitingore file. Some common file that we are generally we adds in .gitignore like-
node_modules, .env, .parcel-cache, dist …. etc.

Q43.Why should not modify package.lock.json?
Ans- you should not have modify package.lock.json because this file is very important file of your app and it is a generated file so it is not designed for manually edited or changeable and its main purpose to track the entire tree of dependencies including dependencies of dependencies and also it track the exact version of each dependencies so you don’t have to edit them and you should have to add commit package.lock.json file in your repository. 

Q44.what is node_modules? It is good idea to push that on git?
Ans- node_modules is like a cache for your external modules that you used in your app project and your project is depends upon this modules. When you use npm to install node modules packages then they downloaded form web and copied into your node_modules folder and node.js use that modules using by importing without any specific path. 
I am saying cache it because it will be re-generated from scratch at any time by just reinstalling all dependencies using=> npm i 

It is not good idea to push that on git because node_modules is very heavy file so if you pushed in your git then it takes large memory space to store and it is also re-generated by dev servers so you don’t have to worry about that so that never add node_modules on GitHub.



Q45.what is dist folder?
Ans- dist folder contains minimized version of the our source code. when we used build command using parcel bundler then dist folder is created. This is created production ready app for us that we can used for hosted our app on another severs. => npx parcel build index.html

Q46.what is browserlist?
Ans- Browserlist is a npm package that is used for making our code compatible for all type of browsers and we can also use in separated manner or according to our requirement. => npm I browserlist and add in package.json file like this-
"browserslist": [
    "last 10 Chrome versions ",  defiantly works in chrome
  ]

**********Laying the Foundation**********

Q47.What is Pollyfill?
Ans-Make the older browser understable our new code, the new code converted 
into an older code which browser can understand that is called pollyfill. Because 
here babel do this conversion automatically. 

Example -ES6 is the newer version of JavaScript. So if I am working on 1999s made
Browsers  so my browser will not understand what is this let, const, new Promise.
So there is replacement code for these functionalities which compatible with older
Version of browsers. So this is what happen when we write “browserlist” our code
is converted into older version.

Q48.What is Babel?
Ans- It is JavaScript package/library that is used to convert code written in newer
version of JavaScript ES6(2015,16,17, etc) code that can be run in older JS-engine.
Babel is comes with Parcel webpacks.


Q49.what is render?
Ans-render means something updating in DOM

Q50.What is Reconciliation?
Ans-It helps to make react application fast and work efficient by minimizing the amount of work that needs to be done to update the changes in DOM.
So, you don’t have to worry about what changes in every update. 
Example-
<ul>
        <li>first</li>
        <li>second</li>
</ul>
 Now you want to add one more list so when you adding element at end of the children then tree will be work fine.-
<ul>
        <li>first</li>
        <li>second</li>
        <li>second</li>
</ul>

Render () function creating a tree of react element so when you do next changes render () will return different tree of react element. So that when you add new element top of over top on an element then react will have to do lots of efforts react will have to re-render everything that means React will have to change the 
Whole DOM tree.
Example -
<ul>
        <li>new Element</li>
        <li>old</li>
        <li>old</li>
</ul>
As React has to re-render Everything for this so it will not to give you good performance. In large-scale application it is far too expensive.
So here solution for this problem Keys came into the picture in React. 
 
What is key in react?
Ans- React Supports key attributes. It keeps tracks of keys. When children have unique keys, attribute then react uses that key and find the original child element in original tree with subsequence of tree and modify only needed elements that making tree conversion efficient.
Example-
<ul>
        <li key=2014 >new Element</li>
        <li key=2015 >old</li>
        <li key=2016 >old</li>
</ul>
 Thus, makes react has to do very less work so that always use keys whenever you have multiple children.


Q51.What is React.createElement?
Ans-React.createElement() is creating an Object. This is Object is converted into HTML code and put upon DOM. But if you want to build a Big HTML structure Then using createElement() is not a good solution.so that Here JSX came into the picture.

Q52.**what is JSX?
Ans- When Facebook created React, the major concept of behind beginning react 
was that we want to write a lot of HTML code using JavaScript because JS is very 
performant. So that instead of createElement we use now JSX because in createElement has code messy or difficult to read problems so always use JSX.
This is called JSX Expressions also and this is called React Elements.
-> React.createElement(“h1”, {id=”title”}, ”hello word”);
-> const myElement = <h1 id=”title”>hello word</h1>;

=>**BUT OUR BROWSER CANNOT UNDERSTAND JSX, ONLY BABEL UNDERSTAND THIS CODE*

JSX stands for JavaScript XML.JSX is not a HTML inside JavaScript. JSX is the HTML like Syntax Only. JSX allows us to write HTML in JavaScript and place them in the DOM without any createElement(), and appendChild() methods.
JSX makes it easier to write and add, HTML in React. JSX is converts HTML tags into react elements.
Example 1 using JSX-
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);  

=> JSX => React.createElemet => Object => HTML(DOM)

Example 2 without using JSX-
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

=> React.createElemet => Object => HTML(DOM)

Q53.What is Advantage of JSX?
Ans-   1. Readability
    	2.Less code
	3.Maintainablity
	4.No repetition
	5.Synthentical sugar
	6.Developer Experience  

***************Everything Component in React***************

Q54.what is component in React?
Ans-As we know that everything is component in react. It can be anything like –
Searching bar, navigation bar, header, footer, div container, etc.
 Basically, we have Two type of component in React-
1.Functional component New way of writing the code
2.class based component  Old way of writing the code


1.Functional component => 
=>It is nothing but a JavaScript function.
=>It is JavaScript function which returns some peace of React Element or JSX.
=>For any component, Name start with Capital letters only.
=>It is not mandatory but it is a convention.
Example –
const Heading = () => {
	return (<h1>This is Functional Component</h1>); 
}


How to Render the React Element and React functional component-
React Element	Functional Component
const heading=(
  <h1 id=”title” key=”p1”>Hello World</h1>
)	const heading=()=>{
 return (
   <h1 id=”title” key=”p1”>Hello  World</h1>);
};
React element is finally an Object. 	Functional component is finally a
JavaScript Function
Render for use like- 
Render function=> (heading)
Inside other=>{heading}	Render for use like- 
Render function=> (<Heading/>)
Inside other=> <Heading/>
                     =>  {Heading ()}

Q55.What is component composition in React?
Ans- It is just a fancy name for components. When we have to use a component
Inside in another component that is called component composition.
Example-
const Mycomonent = () => {
	return (
		<div>
			<Heading/> or {Heading ()}
			<h2>Namaste React</h2>
			<h2>Namaste React</h2>
</div>
);
};


Q.56.What is benefit of writing JSX?
Ans- Whenever we write JSX code inside you can write any peace of JavaScript code between parenthesis { } It will work same like JavaScript.
=>JSX is very Secure.
=>JSX makes your app safe from hacker attacks like-(cross-site-scripting attacks).
=>It does sanitization.
Example-
const data = api.getdata();
const HeaderComponent = () => {
	return (
		<div>
		{data}
		<h1>Hello word</h1>
</div>
);
};



Q57.What is Superpower of JSX?
Ans-Using JSX, you can write markup(html) inside JavaScript, providing you with a superpower to write logic and markup of component inside a single .jsx file.
JSX is easy to maintain and debug.
Example =>
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}

Q58.Role of type attributes in script tag? What option can I use there?
Ans- The type attributes specify the type of the script. The type attribute identify the content between the <script> and </script> tags. It has a default value” which 
is “text/javascript”.
 text/javascript: It is basic standard of writing javascript code inside the <script>.
Syntax => <script type="text/javascript"></script>
text/ecmascript: This value indicate that script is following ECMAScript Standard.
module: This value tells the browser that script is module that can import/export              other file inside it.
text/babel: This value indicate that script is babel type and require babel to transpile it.
text/typescript: This value as name suggest script is written in typescript.

Q59.{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
Ans- {TitleComponent}: This value describes the TitleComponent as a javascript expression(element) or a variable. The {} can embed a javascript expression or a variable inside it.
<TitleComponent/> : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the {<  />} expression.
<TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.
Suppouse if you have some child component then use like this –
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>

Q60.Is JSX is Mandatory for React?
Ans-JSX is an Extension Syntax that allows writing HTML and Javascript together easily in React and is used to create React elements. These elements are then rendered to the React DOM. Each JSX element is just to make use of React easy and for calling React.createElement(component, props, …children) with less work. So, anything that is done with JSX can also be done with just plain JavaScript. So JSX is not mandatory but is used for writing better and clean code instead of writing code using React.CreateElement.
