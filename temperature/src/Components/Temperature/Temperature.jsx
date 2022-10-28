import './style.css'
import {useState} from 'react'

function ConvertTemperature(){

        const[tem,setTem]=useState(0)
        const[scale,setScale]=useState("kelvin")
        const[result,setResult]=useState(0)
const entrada=(event)=>{
    const {value,name}=event.target
    if(name==="degrees"){
        setTem(value)
    }else{
        setScale(value)
    }

}

const submit=()=>{
    if(scale==="kelvin"){
        setResult(Number(tem)+273.15)
    }else if(scale==="fahrenheit"){
        setResult((tem*1.8)+32)
    }else if(scale==="celsius"){
        setResult((Number(tem)-32)*(5/9))
    }
}




    return (
        <main id="container">
            <div className="degrees" >
                <p id='title1'>Degrees</p>
                <input className="number" name="degrees" value={tem} onChange={entrada}></input>
                    <div className="results">
                        <p>Result</p>
                        <span id="res">{result}</span>
                    </div>
            </div>

            <section className="section">

                <h4>Type</h4>
                <select className="type" name="type"onChange={entrada} >
                    <option value="kelvin">Kelvin</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="celsius">Fahrenheit a Celsius </option>
                </select>
            </section>

            

            <footer className="feet">

                <div className="buttomClass">
                    <button id="buttom" type="submit" onClick={submit}>Convert</button>
                </div>

             
               
            </footer>
            
        </main>
    )
}

export default ConvertTemperature