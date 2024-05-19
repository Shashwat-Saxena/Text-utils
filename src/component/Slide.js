import React,{useState} from 'react';

const Slide = () => {
    const [mynum, setmynum] = useState();
    const arr = [30, 40, 50, 60, 70]
    const [index, setindex] = useState(0);

    // let Count = 0;

    const increasenum = () => {
        setmynum(arr[index]);
        setindex((index + 1) % arr.length)
    }

    // const increaseCount = () => {
    //   setCount(arr[count+1] )
    // //   num = (num + 1) % arr.length;
    //  count= setCount(count+1);
    //   console.log("count: ", count);
    // }
    return (
        <div>
            <h1>{mynum}</h1>
            <button onClick={increasenum }>click here</button>
        </div>
    )
}

export default Slide;
