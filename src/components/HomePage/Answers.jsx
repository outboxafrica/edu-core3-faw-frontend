import React,{useState} from 'react'
import './Answers.css'

function Tions() {
    const [state, setState] = useState([]);

  const People = () => {
    fetch("https://teamfaw5.herokuapp.com/api/answers")
      .then((res) => res.json())
      .then((data) => setState(data))
  };
  return (
    <div className='vip'>
     {state.map(b=>{
         return <ol><li>{b.description}</li></ol>
        })}
         <button onClick={People}>View All Answers</button>
        
    </div>
  );
}

export default Tions;
