import React, { useState } from "react";
import axios from "axios";

const useFlip = (initialState = true) =>{
    const [value, setValue] = useState(initialState);
    const toggle = () => {
        setValue(val => !val);
    }

    // return piece of state & function to toggle
    return [value, toggle]
}

const useAxios = (url) =>{
    const INITIAL_STATE = []
    const [data, setData] = useState(INITIAL_STATE)

    const addCard = async (formatter = data => data, restOfURL = '') => {
        const response = await axios.get(`${url}${restOfURL}`)
        setData(d => [...d, formatter(response.data)])
    } 

    const clearBoard = () => {
        setData(INITIAL_STATE)
    }
    // return piece of state & function to make axios call
    return [data, addCard, clearBoard]
}


  

export { useFlip, useAxios };