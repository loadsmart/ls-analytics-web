import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TopNavigation } from '@loadsmart/loadsmart-ui'
import { EmbeddedReport } from './components/EmbeddedReport'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopNavigation>
        <TopNavigation.Logo url='/'>
          <img src='loadsmart_logo.svg' alt='The Logo' />
        </TopNavigation.Logo>
        <TopNavigation.Menu align='right'>
          <TopNavigation.Menu.Item label='Managed Anatlytics' url='#'/>
          <TopNavigation.Menu.Item label='logout' onClick={() => {
            console.log("logout")
          }} />
        </TopNavigation.Menu>
      </TopNavigation>
      <EmbeddedReport />
    </>
  );
}

export default App
