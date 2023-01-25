import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
});

// inside create context need not to be object it can be any thing (initial state val)

// AuthContext is a obj that has component in it
// < AuthContext.provider >

export default AuthContext;
