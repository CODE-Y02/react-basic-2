## side effect or effect

### What are side effects in React according to you

- react basically concerned with bringing ui to the screen
- all logic inside of component function basically concerned with same
- ex it may have function delaing with input or some event etc .

- side effects refer to everything other than that , means code that conserned with timers or network calls like fetch .

- ex:- fetching list of product and whenever new product is added it must be displayed to ui

- to handle effects we use useeffect hook

---

### What is the problem that side effect can cause .

- it can result in infinite loop if not handled properly

---

### How does useEffect hook works and solve the problem

- use effect takes callback fn and dependency array ,
- whenever value in array changes use effect will fire callback fn

- use effect by default runs after first render and then execute callback
- then it check is dependency is updated or changed if yes then it will fire callback again

---

---

## USER effect hook

### What was the problem with the login which we are trying to solve

- everytime we refresh page we have to login i.e login is not persistent

- to solve it we can use local storage and check on every render that
  "login key " in local storage .

- but if we use that logic directly that it will cause infinite loop

---

### What was the mechanism used to solve the problem. Explain the steps

- we will use localstorage to save login and to check on every render we will use useeffect hook

- when we first login we will set loginkey in localstorage
- on every refresh use effect will run after render and fire callback
- in call back fn we will check loginkey
- if loginkey exist we will setLogin as true
- as we are setting state it will cause re render (no refresh)
- now we will not get login screen

> NOTE: refresh is like first render as it force re render all components

---

### What does this [] mean in useEffect ( () => cbfunction, []). What does the second argument used for.

- [] is dependency array
- it can take multiple variables .
- if the value of any variable in dependency array change it will fire cbfunction
- we can leave dependency array empty []
- this will fire cbfunction on (to be exact after) first render only

---

---

### What is the dependency important in the useEffect . If we dont use dependency , do you know what would happen

- think like you deposite 1000 rs in bank you will aslo want to reflect in your pass book or your bank wallet
- long story short when ever bank balance change you want it live status
- same thing with use effect dependency is something that if it changes you want to re render following component

- if we dont use dependency or empty [] , it may cause infinite loop
- as if theres no dependency array than callBack inside useeffect will be executed on every render of component

### Why do we have enteredEmail and enteredPassword in the dependency of useEffect

- as our logic inside use effect callback fn is based on those values
