import React, { useState } from 'react'

const State = () => {
    const [num, setNum] = useState(0)
    function Increment() {
        if (num<10){
            return setNum(num+1)
        }

     
        
    }

    function Decrement() {
        if(num>0){
            return setNum(num-1)
        }
       
        
    }

   
    return (
        <div className='App'>
            <h1>
                {num}
            </h1>
            <button className='btn btn-sm btn-outline-success mx-5' onClick={Increment} > Increment </button>
            <button className='btn btn-sm btn-outline-danger mx-5' onClick={Decrement}> Decrement </button>
        </div>
    )
}

export default State
