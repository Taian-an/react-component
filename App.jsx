import './App.css'
import Greetings from './Greetings'
import User from './User'

function App() {
  return (
    <div className="card">
      <Greetings />
      {/* 建議：將名字改為大寫以符合截圖視覺 */}
      <User name="VORAMETH LAORRATTANASAK" />
    </div>
  )
}

export default App