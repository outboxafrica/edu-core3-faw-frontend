import React,{useState} from 'react'
import './Answers.css'

function Qions() {
  const [state, setState] = useState([]);

  const People = () => {
    fetch("https://teamfaw5.herokuapp.com/api/questions")
      .then((res) => res.json())
      .then((data) => setState(data.question))
  };
  return (
    <div className='vip'>
     {state.map(b=>{
         return <ol><li>{b.description}</li></ol>
        })}
         <button onClick={People}>View All Questions</button> 
        
    </div>
  );
}

export default Qions;