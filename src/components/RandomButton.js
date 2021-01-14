import React, {useState, useEffect} from "react"
import axios from "axios";
import {RANDOM_ADVICE_URL} from '../Constant'
import Advice from './Advice'




function RandomButton() {
  const [randomAdvice, setRandomAdvice] = useState('')

  const fetchData = async () => {
    try {
      const response = await axios.get(RANDOM_ADVICE_URL);
      console.log(response.data);
      //we use deconstruction with slip because its in the jason data
      const { slip } = response.data;
      setRandomAdvice(slip)
    }
    catch (err) {
        console.log('Error', err)
    }
  }

  useEffect(() => {
      fetchData();
  }, [])
  
  return (
    <div>
        <h2>Random Advice</h2>
        <button onClick={fetchData}>Get Random Advice</button>
        <Advice advice={randomAdvice.advice} />
      </div>
    )
}

export default RandomButton;