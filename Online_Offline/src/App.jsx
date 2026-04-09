import React from 'react'
import useNetworkStatus from './useNetworkStatus'

function App() {
  let isOnline = useNetworkStatus();
  return (
    <div>
       Network: {isOnline ? "Internet Available" : "Internet Unavailable"}
    </div>
  )
}

export default App
