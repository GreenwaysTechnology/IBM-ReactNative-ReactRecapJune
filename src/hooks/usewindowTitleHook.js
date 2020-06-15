import React, { useEffect } from 'react';

//this hook not returning any value
export const useWindowSetTitle = screen => {
    //logic of custom hook
    useEffect(() => {
        //side effects
        document.title = screen;
    })
}