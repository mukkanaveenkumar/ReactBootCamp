import {useState, useEffect} from 'react';

const ProfileFC = (props) => {
    const {name} = props;
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(()=>{
        const timer = setInterval(() => {
            console.log("THis is from Profile Functional Component");
        }, 1000);
        console.log("useEffect");
        return ()=>{
            clearInterval(timer);
            console.log("Use Effect Return");
        }
    },[]);
    console.log("render");
    return(
        <div>
            <h1>This is from Profile Functional Component</h1>
            <h2>Name from Props : {name}</h2>
            <h2>Increment: {count}</h2>
            <h2>Decrement: {count2}</h2>
            <button
            onClick={()=> {
                setCount(count+1);
                setCount2(count2-1);
            }}
            > FC Counter</button>

        </div>
    );
}

export default ProfileFC;