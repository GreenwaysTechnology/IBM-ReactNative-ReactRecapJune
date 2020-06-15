import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';


// class Customer extends React.Component {
//       state = {
//             screen: 'Inventory System'
//       }
//       add = () => {
//             this.setState({ screen: 'Customer Manager App - Add ' })
//       }
//       render() {
//             return <div>
//                   <h1>Customer Manager App: using Side effects</h1>
//                   <button onClick={this.add} >Add</button>
//             </div>
//       }
//       //side effeects with inital / mount cycle
//       componentDidMount() {
//             //imperative dom
//             document.title = this.state.screen;
//       }
//       //side effects with update cycle
//       componentDidUpdate() {
//             document.title = this.state.screen;
//       }
// }





function Customer(props) {

    const [screen, setScreen] = useState('Customer Manager App');
    //Performing side effects
    useEffect(function () {
        //side effects
        console.log('useEffect' , new Date())
        document.title = screen;
    });
    function changeTitle() {
        setScreen('Customer Manager App -Add');
    }
    return <div>
        <h1>Customer Manager App: Function using Side effects</h1>
        <button onClick={changeTitle} >Add</button>

    </div>
}

//useEffect = componentDidMount + componentDidMount + componentWillUnMount




// render(<Customer />, document.getElementById('root'));


// function CustomerComponent({ title }) {
//     const [screen, setScreen] = useState(title)
//     //declare variable to hold currnt window width
//     const [width, setWidth] = useState(window.innerWidth);
//     //feature using hooks

//     //feature using hooks


//     //set screen title 
//     useEffect(() => {
//         console.log('use Efffect')
//         //side effects
//         document.title = screen;
//         //handler function
//         const handlerResize = () => setWidth(window.innerWidth)
//         window.addEventListener('resize', handlerResize)

//         //componentwillUnmount
//         return () => {
//             window.removeEventListener('resize')
//         }

//     })
//     return <div className="container">
//         <h1>Customer Management App</h1>
//         <h2>Current Screen Width : {width}</h2>
//     </div>
// }

const App = () => <Customer title="Customer Manager App" />

render(<App />, document.getElementById('root'));
