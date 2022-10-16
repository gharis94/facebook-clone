import React,{createContext, useState,useEffect} from 'react';

const INITIAL_STATE ={
    users:[]
}

export const UserContext = createContext(INITIAL_STATE);


export const UserProvider = ({children}) =>{
    const [user,setUser] = useState([]);

    useEffect(()=>{
        const fetchData =async() =>{
            const rsp = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await rsp.json();
            //setUser(data);
        }
        fetchData();
    },[])
    return(
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}