// Isko top level wrapper ki tarah use karenge, so that sabhi ko context avail ho

import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    const [user, setUser] = React.useState(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;