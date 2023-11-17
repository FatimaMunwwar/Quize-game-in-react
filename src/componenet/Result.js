import React from 'react'
import'./Game.css'

const Result = (props) => {
  return (
    <>
    <div className='width height-one d-flex justify-content-center py-3'>
      <div>
      <div> <h1> you get score: {props.score} / {props.length}  </h1> </div>
     <button className='btn bg-danger d-flex align-items-cneter justify-content-center m-auto' onClick={props.handle}>Play Again</button>
      </div>
   
    </div>
    
    </>
    
  )
}

export default Result
