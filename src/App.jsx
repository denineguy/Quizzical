import React, { useState } from "react"
import './App.css'

export default function App() {
    const [isActive, setIsActive] = React.useState(false)
    const [quizData, setQuizData] = React.useState([])
    const [isError, setIsError] = React.useState(false)
    
    // React.useEffect(function() {
    //     console.log("Effect ran")
    //     fetch(`https://opentdb.com/api.php?amount=5&category=14&difficulty=medium&type=multiple`)
    //         .then(res => res.json())
    //         .then(data => setQuizData(data))
    // }, [])
    
    // React.useEffect(() => {
    //     startQuizzical()
    // }, [])
    
    console.log(quizData)
    console.log(isActive)
    const startQuizzical = () => {
        console.log("hello" + 1)
        setIsActive(true)
        fetch(`https://opentdb.com/api.php?amount=5&category=14&difficulty=medium&type=multiple`)
            .then(res => res.json())
            .then(data => setQuizData(data))
            .catch(error => setIsError(true))
        console.log(isActive);
    }
    return (
        <div className="quiz_container">
            <img src="../src/assets/yellow_blobs1.png" className="yellow_blob"/>
            <img src="../src/assets/blue_blobs1.png" className="blue_blob"/>
            <h1 className="quiz_header">Quizzical</h1>
            <p className="quiz_subheader">Some description if needed</p>
            <p>isActive: {isActive ? "true": "false"}</p>
            <p>isError: {isError ? "true": "false"}</p>
            <button className="quiz_button" onClick={startQuizzical}>Start quiz</button>
        </div>
    )
}
