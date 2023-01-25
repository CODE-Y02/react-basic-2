# Use Reducer hook

1 When would you use useReducer and why ?

- use reducer is alternative to use state for complex stte management
- when we have multuple states managing varients of same thing we may use reducer to combine them in single state
- ex : if we have state enteredEmail and isEmailValid
- both are related to email or to a same thing
- other example is when ever we are updating state based on other sate

- In such case we can use useReducer .
- Because when ever we update state based on state we must use syntax like setState(oldstste => { //logic}) ;
- now in such case old state is state of same set state variable and we are updating it based on value of other state
- ex -

        setIsValidEmail( enteredEamil.trim().includes('@') );
        // now enteredEamil is another state

        in such case its highly possible that setIsValidEmail may execute even before enteredEamil value is set

---

2 Why do we create the emailReducer outside the functional component and not inside it?

- because reducer logic does not directly concerned with our components and for clean code prespective
- many time its possible thT REDUCER LOGIC IS very huge
- so having outside component make sure to clean code structure

---

3 What does the emailReducer do. Please explain

- its responsible for setting state based on action and returning updated state

---

4 How does dispatch actions work.

- dispach primarly take action type and may also contain value
- now action can be anything like string or boolean , but most common structure is object
- ex:

                dispatch({
                        type:"IAM_ACTION_A" ,
                        value : "THIS IS VALUE"
                })

- when ever the action is dispach reducerFunction will run and will return new updated state based on action
