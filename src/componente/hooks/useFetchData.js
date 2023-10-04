import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetchData } from '../helpers/fecthData'

export const useFetchData = (endpoint) => {
    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const getData = async () =>{
        //recupera data y isloadiong de fetchData
        const {data, isLoading} = await fetchData(endpoint)
        setdata(data)
        setisLoading(isLoading)
        
    };
 
    useEffect(() => {
       getData()
       
      }, [endpoint])
  return (
    {data,
    isLoading}
  )
}
