import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return <div>Hello World</div>
}

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
