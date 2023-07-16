import './EightBall.css'
import Random from './Random';
import DefaultAnswers from './Answers.js';
import { Choice } from './Random';
import React, {useState} from 'react';




const EightBall = ({answers = DefaultAnswers}) => {
   const [answer, setAnswer] = useState({
    msg:'Think of a Question.',
    color: 'black'
   });
   
   function handlesClick(e){
    setAnswer(Random(answers))
   }

    return (
        <div className="EightBallCenter">
            
            <div className="EightBall" style={{backgroundColor: answer.color}}>
                <h1 className="EightBallMsg" onClick={handlesClick}>{answer.msg}</h1>
            </div>
        </div>
    )
}



export default EightBall;