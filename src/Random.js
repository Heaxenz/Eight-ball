import DefaultAnswer from "./Answers.js";
import Answers from "./Answers.js";

  const Choice = (arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
    
  }

  export default Choice;