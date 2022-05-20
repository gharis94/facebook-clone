import React,{createContext,useEffect, useState} from 'react';


const INITIAL_STATE ={
    data:[],
    comments:[]
}

export const DataContext = createContext(INITIAL_STATE);


export const DataProvider = ({children}) =>{
    const [data,setData] = useState([]);
    const [comments,setComments] = useState([]);
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
    },[]);
    useEffect(()=>{
        const fetchComment = async() =>{
            try{
                const rsp = await fetch('https://jsonplaceholder.typicode.com/comments');
                const a = await rsp.json();
                const comments = a.filter((__, idx) => idx < 3);
                
                setComments(comments);
            }catch(error){
                console.log(error);
            }
            
        }
        fetchComment();
    },[])
    return(
        <DataContext.Provider value={{
            data,
            comments
        }}>
            {children}
        </DataContext.Provider>
    )

}