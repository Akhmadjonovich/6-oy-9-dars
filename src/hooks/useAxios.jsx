import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useAxios = () => {
    let [data, setData] = useState(null)
    let [error, setError] = useState(null)
    let [loading, setLoading] = useState(false)

    let Base_URL = "http://localhost:3000"
    let params = "/candidate"
    let getData = async ()=>{
        setLoading(true)
        try{
            let res = await axios.get(Base_URL + params);
            setData(res.data)
        }catch(error){
            setError(error)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        getData()
    } , [params])
  return (
    {data, error , loading}
  )
}

export default useAxios