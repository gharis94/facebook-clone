import React,{createContext,useEffect, useState} from 'react';


const INITIAL_STATE ={
    data:[]
}

export const DataContext = createContext(INITIAL_STATE);


export const DataProvider = ({children}) =>{
    const [data,setData] = useState([]);

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                console.log('start')
                const rsp = await fetch('https://jsonplaceholder.typicode.com/photos');
                const a = await rsp.json()
                const data = a.filter((__,idx)=>idx<99)
                setData(data);
            }catch(error){
                console.log(error);
            }
            
        }
        fetchData();
    },[])
    return(
        <DataContext.Provider value={{
            data
        }}>
            {children}
        </DataContext.Provider>
    )

}