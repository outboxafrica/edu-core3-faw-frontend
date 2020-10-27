import React,{useState} from 'react'
import './Answers.css'

function Qions() {
  const [isLoading, setLoading] = useState(true);
  const[state, setState] = useState([])

  const People = () => {
    setLoading(false)
    fetch("https://teamfaw5.herokuapp.com/api/questions")
      .then((res) => res.json())
      .then((data) => setState(data.question))
      .then(()=> setLoading(true))
  };
  return (
    <div className='vip'>
         {!isLoading ? <div><h4>Getting questions...!!!</h4>
         <img style={{width:"200px",height:"200px"}} src="img/loader.gif" /></div> : state.map(b=>{
           return <ol><li>{b.description}</li></ol>
          })
        } 
        <button onClick={People}>View All Questions</button>
        
    </div>
  );
}

export default Qions;