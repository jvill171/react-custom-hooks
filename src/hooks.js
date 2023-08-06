import React, { useState } from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";

const useFlip = (initialState = true) =>{
    const [value, setValue] = useState(initialState);
    const toggle = () => {
        setValue(val => !val);
    }

    // return piece of state & function to toggle
    return [value, toggle]
}

const useAxios = (url) =>{
    const [data, setData] = useState([])
    console.log(`IN useAxios(${url})`)

    const makeAxiosCall = async (formatter = data => data, restOfURL = '') => {
        console.log(`makeAxiosCall = async(formatter, restOfURL=${restOfURL})`)
        const response = await axios.get(`${url}${restOfURL}`)
        setData(d => [...d, formatter(response.data)])
    } 
    
    // return piece of state & function to make axios call
    return [data, makeAxiosCall]
  }
  

export { useFlip, useAxios };