import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { useWindowWidth} from './hooks/useWindowidthHook';
import {useWindowSetTitle} from './hooks/usewindowTitleHook';


function CustomerComponent({ title }) {
    
    const [screen, setScreen] = useState(title)
    //title hook, which return does not return anything
    useWindowSetTitle(screen) 
    //window width hook which returns data.
    let currentWidth = useWindowWidth();
    return <div className="container">
        <h1>Customer Management App</h1>
        <h2>Current Screen Width : {currentWidth}</h2>
    </div>
}

const App = () => <CustomerComponent title="CMS - IBM" />

render(<App />, document.getElementById('root'));