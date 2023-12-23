# Parcel (Bundler)

- Create Devlopment Build for us
- Create Local Server ("localhost":1234)
- HMR - Hot Module Replacement
- File Watching Algorithms - Written in C++
- Tree Shaking - Remove un-used code for you
- Caching - Faster Builds
- Image Optimization
- Minification (minify our code for porduction ready)
- Bundling
- Compressing
- Consistant Hashing
- Code Splitting
- Differntial Bundling - Support Older versions of Browsers
- Error Handling
- Diagnostics
- HTTPs

# Babel (Transpiler)

- converts JSX into React Element
- Some Older version Browser does not know about ES6 so its Babel job to convert it such format that each browser can easily understand.
-

# JSX (Javascript Syntax)

- JSX (JSX Transpile the code before it reaches to js) -> Parcel -> Babel
- JSX is not a HTML. It is Like a HTML Syntax.
- JSX => Babel transpile it into React.createElement => its an React Element => at the end it is JS Object => HTML-Element(render)

# Props - Properties

- props is passing arugument to function.
- if we console.log(props) then we get an Object.
- when we want pass dynamic data to component it is pass as props.
- React takes a Props as argument and Wrap it as a object and pass to component.
- e.g of props = <Header name="Abhijeet" email="abhijeet@gmail.com" password="123456789"/>
- (props) => {props.name, props.email, props.password} OR ({name, email, password}) ways to write props.

# config driven UI -

- the name suggest UI driven by config (data)
- most of product based company use this config driven UI for seamless user experience.
- Config-driven UI is a technique that allows you to create user interfaces based on a configuration file, such as JSON, or a TypeScript file that defines the layout and content of the UI components.
- This can be useful for creating dynamic and customizable UIs without hard coding them.

# key -

- key play crucial role in react while rendering loop elements to the dom.
- main purpose of key is to uniqely identified element and where to add that perticular element in dom.
- if there is no key is provide react will not know about that looped elements and it treat every element as same.
- if no keys it re-render every elements.
- when we add key to that element with unique id then it start recognize it and if new element add or remove there it will only do operation for that perticular single element, not re-render every element.
- react give key as "warning" not as a error.
- every key must be uniquely identify.
- its optimize our app.
- react official docs says dont use index as key, its not recommended.

# React Hook - Normal JS Utility Function

# 1. UseState Hook.

- It not a normal js variable, it has superpower of local react state variable.
- It Sync with UI layer and Data layer.
- when ever data changes the ui will automatically changes with the help useState Hook.
- const [data, setData] = useState(value); ----syntax
- because of useState hook virtual dom can track of the differernce between current state and previous state woth help of setterFunction.
- if we use normal js variable then react can not keep track of that variable, so data will update but ui will not change..
- useState has local state variable which is only update by setter function which will react can track..and it will help react to update state or data.
- thats the main reason we need useState variable. thats the main reason normal js variable not working in react while updating UI.
- when ever there update in state, react will re-render that whole component and only update that perticular node. this process also knwon as Reconciliation.

# Reconcialiation Algo (React Fiber)

- It introduce in React version 16.
- When ever something changes on UI it is because of reconciliation process.
- Difference is finded by Diff Algorithm, and that difference is updated by Reconcilation.
- Focuses on updating the real DOM efficiently based on the changes identified during the diffing phase, enhancing rendering speed.
- when ever there update update in state, react will re-render that whole component and only update that perticular node. this process also knwon as Reconciliation.

# Diff Algorithm

- it keep track of all react node.
- it will find the difference between actual dom and virtual dom.
- Determines the difference between previous and new states.
- Provides a list of changes or operations to be applied
- it is written in c++

# Virtual Dom

- Virtual dom is respresentation of actual dom.
- it is present in Object
- whenever ui changes it will find the difference between 2 virtual dom then update the actual dom.
- this process is very superfast.
- virtual dom is 3 times faster than actual dom.
- Diff Algorithm and Reconciliation is part of Virtual Dom.
- React finds the difference between virtual dom efficiently and update the actual dom thats why React Fast.

# React Concept Follow ->

1. Loads the Page.
2. Render the page whatever Skelleton (static or dummy) present their.
3. After successfull page load it makes Api call.
4. on sucessfull api call response it will render the data on webpage.
5. It gives better ux.
6. Here React Render 2 times, but its not issue because its render cycle is superfast.
   1. When 1st time page loads.
   2. On API call or state changes or data changes.

# useEffect Hook

- useEffect Hook is just a normal javascript function.
- It takes 2 arguments ->
  1. callback function ()=>{},
  2. dependency array []
- syntax -> useEffect(()=>{},[])

- when component renders after that useEffect called.

- Basically, when 1st time render cycle completed its rendering task, then it will call callback function inside of useffect and do task which present inside of callback function.

- mostly useffect is use while calling api.
- if we get cors error during api call then its an browser part that our browser not allow us. we have to use cors extension download.
