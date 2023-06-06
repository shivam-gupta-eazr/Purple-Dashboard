import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decrementData } from '../redux/Action';

export const ProjectStatus = () =>{
    const dispatch = useDispatch()
    const value = useSelector(state => state?.data?.data?.users)
    console.log(value,'dec')

    const [data,setData] = useState([])
   
    // useEffect(()=>{
    //     const fetchData = async () => {
    //         const res =  await fetch('https://dummyjson.com/users').then(res => res.json()).then(data =>(data.users));
    //        setData(res)
    //     }
    //    fetchData()
                    
    // },[])

    console.log(data)
    return (
        <>  
        {value?.slice(0,5).map((val,ind)=>{
            return (
                <tr key={ind}> 
                <td>{val.id}</td>
                <td>{val.firstName}</td>
                <td>{val.domain}</td>
                <td>
                          <ProgressBar variant="gradient-success" now={val.age}/>
                        </td>
                </tr>

            )
        })}
        
        </>
    )
}