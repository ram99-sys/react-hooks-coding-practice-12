import {useState} from 'react'
import './index.css'

const LettersCalculator = () => {
  const [userInput, setUserInput] = useState('')

  const onChangeUserInput = event => {
    setUserInput(event.target.value)
  }

  return (
    <div className="app-container">
      <div className="calculator-container">
        <h1 className="heading">Calculate the Letters you enter</h1>
        <label htmlFor="phrase" className="label-element">
          Enter the phrase
        </label>
        <br />
        <input
          type="text"
          name="phrase"
          className="text-input"
          placeholder="Enter the phrase"
          onChange={onChangeUserInput}
        />{' '}
        <br />
        <p type="button" className="letters-count">
          No.of letters: {userInput.length}
        </p>
      </div>
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image-sizing"
        />
      </div>
    </div>
  )
}

export default LettersCalculator
