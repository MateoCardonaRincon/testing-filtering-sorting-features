import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import BugsPage from './components/BugsPage'
import { getBugs } from './services/bugService'
import { getAllBugs } from './state/bugSlice'

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllBugs(getBugs()))
    }, [])

    return (
        <div className="App">
            <BugsPage />
        </div>
    )
}

export default App
