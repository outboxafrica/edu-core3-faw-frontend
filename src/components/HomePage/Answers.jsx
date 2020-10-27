import React,{useState} from 'react'
import './Answers.css'

function Tions() {
  const [isLoading, setLoading] = useState(true);
  const[state, setState] = useState([])

  const People = () => {
    setLoading(false)
    fetch("https://teamfaw5.herokuapp.com/api/answers")
      .then((res) => res.json())
      .then((data) => setState(data))
      .then(()=> setLoading(true))
  };
  return (
    <div className='vip'>
         {!isLoading ? <div><h4>Getting answers...!!!</h4>
         <img style={{width:"200px",height:"200px"}} src="img/loader.gif" alt="spinner" /></div> : state.map(b=>{
           return <ol><li>{b.description}</li></ol>
          })
        } 
        <button onClick={People}>View All Answers</button>
        
    </div>
  );
}


export default Tions;
