import "./News.css";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function News() {

const [calc, setCalc] =useState("");
const [result, setResult] =useState("");
const ops =['/','*','+','-','.'];
const updateCalc = value =>{
  if (
    ops.includes(value) && calc === '' ||
    ops.includes(value) && ops.includes(calc.slice(-1))
  ){
    return;
  }
  setCalc(calc+value);
  if (!ops.includes(value)){
    setResult(eval(calc+value).toString());
  }

}



  
  const createDigits= () =>{
    const digits=[];

    for(let i=1;i<10;i++)
    digits.push(
      <button className="bit" onClick={() => updateCalc(i.toString())} key={i}>
      {i}
      </button>
    )
    return digits;
  }
  const calculate= () =>{
    setCalc(eval(calc).toString());
  }
  const deleteLast = () =>{
    if(calc == ''){
      return;
    }
    const value = calc.slice(0,-1);
    setCalc(value);
  }
  


  return (
  <div className="tainer">
  
  <div className="calculator">
  
  <div className="display">
 {result ? <span>({result})</span> : ''}
 {calc || "0"}
  </div>

  <div className="operators">
    <button className="bit" onClick={() => updateCalc('/')}>/</button>
    <button className="bit" onClick={() => updateCalc('*')}>*</button>
    <button className="bit" onClick={() => updateCalc('+')}>+</button>
    <button className="bit" onClick={() => updateCalc('-')}>-</button>
    <button className="bit" onClick={deleteLast}>DEL</button>
  </div>

<div className="digits">
  {createDigits() }
  <button className="bit" onClick={() => updateCalc('0')}>0</button>
  <button className="bit" onClick={() => updateCalc('.')}>.</button>
  <button className="bit" onClick={calculate}>=</button>
</div>

  </div>



  </div>
  );
}
