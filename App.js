

/*
**
* HMR Hot Module Replacement
File Watcher Algorithm

*/
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = document.getElementById("root");

const heading = document.createElement("h1");
heading.innerHTML= "This is from Javascript";

root.append(heading);

// This is from React it would completely override the contents of root element.

const rHeading = React.createElement('h1',{},'This is from React');

const rRoot = ReactDOM.createRoot(root);

rRoot.render(rHeading);

// adding multiple elements in a div using React

const first = React.createElement("h1",{key:'first'},"This is a h1 element");

const second = React.createElement('h2',{key:'second'},'Please enter a text');

const firstInput =React.createElement('input',{id:'firstInput',key:'firstInput',type:'text',style:{
    display:'block',
    margin:10
}});

const button = React.createElement('input',{key:'submit',type:'button',value:'Click Me!',
style:{
    color:'white',
    background:'blue',
    height:'30px',
    width:'100px',
    borderRadius:10,
    margin:10,
    cursor:'pointer'
     },
onClick :  function(){
    const textValue = document.getElementById('firstInput').value;
    console.log('Your entered text is: '+textValue);
}
});


const container = React.createElement('div',{id:'container'},[first,second,firstInput,button]);

//const rootElement = ReactDOM.createRoot(root);

rRoot.render(container);