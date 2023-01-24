## debouncing

---

#### What is debouncing? What is the problem with the app if we don't use debouncing?

- it is optimization technique
- in current application we are seting state on every key stroke
- save thing goes for network call
- debouncing is way to save this kind of calls

---

#### How does the we debouncing in code?

- we wrap current code into settimer with 500ms
- and we return clenup funtion in use effect
- inside clenup we remove timer using timerIdentifier

        useEffect(()=> {
            const identifer = setTimer(()=>{
                // logic --> setting state or fetch call
            } ,  time) ;

            return () =>{
                // this is cleanup fn
                clerarTimeout(identifer)
            }

         },[ deps])

- in case on key inputs we will run code one we pause typing for timers time delay

---

#### When does the cleanup function get called

- CLEAN UP WILL BE RUN BEFORE ANY USE EFFECT BUT NOT ON FIRST RENDER

---

#### Why do even need to have cleanup functions?

- if we dont have cleanup we will have many timers in pending
- As we may have many callback for timer register in we api wnvirement but we want output of most recent
- therefore its most ideal to clear previous regitered callback when registering new

### When does the useEffect hook get called in the lifecycle. Before rendering or after rendering?

> One first render

- use effect will get called 'AFTER FIRST RENDER COMPLETED' irrespective of dependency passed
- in first render case cleanup will not be done

- THIS FIRST RENDER IS CALLED COMPONENT DID MOUNT

> On Re - render

- on render if dependency satisfied unless its not present
- clean up will be called before useEffect and then use effect will be called

> This cleanUp is called as un mount and re-rendering use to use effect is called Re-mount

> NOTE: useEffect will always get called after rendering
