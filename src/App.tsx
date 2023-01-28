
import './App.css'
import { ComponentTest } from './components'
import ErrorBounderies from './utilities/ErrorBounderies';
import { useEffect, useState } from 'react';

function App() {
 
const [name, setName] = useState<string | null>(null);

useEffect(() => {
setTimeout(()=>{
setName('Lola')
},2000)

  
}, [])

  return (
    <div className="App">
    <ErrorBounderies  fallBackComponent={<h1>Ups!! Algo salió mal</h1>} renderCondition={name} >
      <ComponentTest name={name} />  
    </ErrorBounderies>
  
    </div>
  )
}

export default App
