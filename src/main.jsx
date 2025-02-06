import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/Routes'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster
      position="top-center"
      reverseOrder={true}
      toastOptions={{
        // Define default options
        error:{
          icon: '⚠️',
          position: 'top-left'
        },
        duration: 2000,
        style: {
          backgroundImage: 'linear-gradient(90deg, rgba(88,23,151,1) 4%, rgba(123,45,198,1) 32%, rgba(83,36,138,1) 58%, rgba(108,24,179,1) 88%)',
          color: '#fff',
        },
      }}
    />
    <RouterProvider router={routes} />
  </StrictMode>,
)
