import "antd/dist/reset.css"
//import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfigProvider } from "antd"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider      //edit all primay , secondary color of entire app.. features like dark mode ect is easily applicable using this
      theme={{
        token: {
          colorPrimary: "#9e055e", //primary color
          
        },
      }}          
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
)
