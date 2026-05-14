import './App.css'
import { useState } from 'react'
import ScoresTable from './components/ScoresTable'

const initialScores = [
  { 이름: "John", 국어: 90, 영어: 90, 수학: 80, 과학: 90 },
  { 이름: "Peter", 국어: 90, 영어: 90, 수학: 80, 과학: 90 },
  { 이름: "Susan", 국어: 90, 영어: 90, 수학: 80, 과학: 90 },
  { 이름: "Sue", 국어: 90, 영어: 90, 수학: 80, 과학: 90 }
]

const initialInfo = {
  이름: "",
  국어: null,
  영어: null,
  수학: null,
  과학: null,
}

function App() {

  const [info, setInfo] = useState(initialInfo)
  const [scores, setScores] = useState(initialScores)

  const handleChange = (event) => {
    const { name, value } = event.target

    setInfo((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setScores((prev) => [...prev, info])

    setInfo(initialInfo)
  }

  return (
    <>
      <ScoresTable scores={scores} />

      <form onSubmit={handleSubmit}>
        <div>
          이름:
          <input
            type="text"
            name="이름"
            value={info.이름}
            onChange={handleChange}
          />
        </div>

        <div>
          국어:
          <input
            type="number"
            name="국어"
            value={info.국어}
            onChange={handleChange}
          />
        </div>

        <div>
          영어:
          <input
            type="number"
            name="영어"
            value={info.영어}
            onChange={handleChange}
          />
        </div>

        <div>
          수학:
          <input
            type="number"
            name="수학"
            value={info.수학}
            onChange={handleChange}
          />
        </div>

        <div>
          과학:
          <input
            type="number"
            name="과학"
            value={info.과학}
            onChange={handleChange}
          />
        </div>

        <button>제출</button>
      </form>
    </>
  )
}

export default App