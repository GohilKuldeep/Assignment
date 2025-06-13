import './App.css'
import FirebaseAuth from './FirebaseCrudAndAuth/FirebaseAuth'
import FirebaseCrud from './FirebaseCrudAndAuth/FirebaseCrud'
import HomeScreen from './FirebaseCrudAndAuth/HomeScreen'
import JsonApiCrudData from './JsonApiCrudData'
import PublicApiData from './PublicApiData'
import { Routes,Route } from 'react-router'

function App() {

  return (
    <>
    <PublicApiData />
    {/* <Routes>
        <Route path='/' element={<FirebaseAuth />} />
        <Route path='/dashboard' element={<HomeScreen />} />
      </Routes> */}
    </>
  )
}

export default App
