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
