import {useState} from 'react'
import './App.css'
import Input from './components/input'
import Button from './components/button'
import { useSelector, useDispatch } from 'react-redux'
import { sum } from './reducers/sumSlice'
import type { RootState } from './store'

function App() {
  const dispatch = useDispatch()
  const sumValue = useSelector((state: RootState) => state.sum)
  const [one, setOne] = useState('')
  const [two, setTwo] = useState('')

  const sumTwoNumbers = () => {
    dispatch(sum({
      one,
      two
    }))
  }

  return (
    <>
      <h1>Sum two numbers together</h1>
      <div>
      <Input id="one" label="one" value={one} onChange={(value) => setOne(value)} />
      </div>
      <div>
      <Input id="one" label="two" value={two} onChange={(value) => setTwo(value)} />
      </div>
      <Button onClick={sumTwoNumbers}/>
      <h2>value:</h2>
      <div>{sumValue.value}</div>
    </>
  )
}

export default App
