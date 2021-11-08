import * as React from "react"
import { webpack } from "webpack"
import "./App.scss"
import * as webpackImage from "./assets/webpack.svg"
 
const  App = () => {
    const [counter, setCounter] = React.useState<number>(0)
    const [demand, setDemand] = React.useState<number>(1)


    const onIncrement = (demand: number) => {
        setCounter(counter+demand)
    }

    const onDecrement = (demand: number) => {
        setCounter(counter-demand)
    }
    
    console.log(counter)
    console.log(demand)

    return(
        <div className="container">
            <h1>Counter App </h1>
            <h3> {counter} </h3>
            <div className="form">
                <div className="input">
                    <input
                        value={demand}
               
                        onChange={(e) => setDemand(Number(e.target.value))}
                    />
                </div>
                <div className="button-group" >
                    <button onClick={()=> onIncrement(demand)} >Increment</button>
                    <button onClick={()=> [setCounter(0), setDemand(1) ] } >Reset</button>
                    <button onClick={()=>onDecrement(demand)} >Decrement</button>
                </div>
            </div>
            <img src={webpackImage.default} />
        </div>
    )
}

export default App