import {render} from 'react-dom';
import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

// class CounterComponent extends React.Component {

//     state = {
//         counter: 0 // inital value
//     };

//     //Listener method
//     onIncrement = () => {
//         let counter = this.state.counter + 1;
//         this.setState({ counter });
//     }

//     render() {
//         console.log('render method is called', this.state.counter);
//         return <div className="container">
//             <h1>Counter Application</h1>
//             <h3>Counter : {this.state.counter}</h3>
//             <button className="btn btn-success" onClick={this.onIncrement}>+</button>
//         </div>
//     }
// }

//basic useState Hook
// function CounterComponent(props) {
//     //hooks
//     const [counter, setCounter] = useState(10)

//     function onDecrement() {
//         setCounter(counter - 1)
//     }
//     return <div className="container">
//         <h1>Counter Application</h1>
//         <h2>Counter : {counter}</h2>
//         {/* <button onClick={() => setCounter(prevState => {
//             console.log(`Previouse State ${prevState}`)
//             return prevState + 1
//         })}> +</button> */}
//         <button onClick={() => setCounter(counter + 1)}>+</button>
//         <button onClick={onDecrement}>-</button>

//     </div>
// }
// const Application = () => <CounterComponent />

// ReactDOM.render(<Application />, document.getElementById('root'));


// const CounterComponent = (props) => {
//     //hooks
//     const { seedValue } = props;
//     const [counter, setCounter] = useState(seedValue)

//     const onDecrement = () => {
//         setCounter(counter - 1)
//     }
//     return <div className="container">
//         <h1>Counter Application</h1>
//         <h2>Counter : {counter}</h2>
//         {/* <button onClick={() => setCounter(prevState => {
//             console.log(`Previouse State ${prevState}`)
//             return prevState + 1
//         })}> +</button> */}
//         <button onClick={() => setCounter(counter + 1)}>+</button>
//         <button onClick={onDecrement}>-</button>

//     </div>
// }

// CounterComponent.defaultProps = {
//     seedValue: 2
// }

// const Application = () => <>
//     <CounterComponent seedValue={10} />
//     <hr></hr>
//     <CounterComponent />

// </>

// ReactDOM.render(<Application />, document.getElementById('root'));

//multi state variable.


// function Counter(props) {
//       const [incrementValue, setincrementValue] = useState(props.incrementSeed);
//       const [decrementValue, setdecrementValue] = useState(props.decrementSeed);
      
//       return <div>
//             <h1>Counter App</h1>
//             <h2>Increment Value : {incrementValue}</h2>
//             <h2>Decrement Value : {decrementValue}</h2>

//             <button onClick={() => setincrementValue(prevState => {
//                   console.log(`Previouse State ${prevState}`)
//                   return prevState + 1
//             })}>
//                   increment
//           </button>
//             <button onClick={() => setdecrementValue(decrementValue - 1)}>decrement</button>
//       </div>
// }


// render(<Counter incrementSeed={50} decrementSeed={20} />, document.getElementById('root'));

const FeedBack = (props) => {
      const state = { like: 10 };
      const [feedback, setFeedback] = useState(state);
      const increment = () => {
            let like = feedback.like + 1;
            setFeedback({ ...feedback, like });
      };
      return <div>
            <p>Your Feedback {feedback.like}</p>
            <button onClick={increment}>
                  increment
         </button>
      </div>;
};
render(<FeedBack />, document.getElementById('root'));
