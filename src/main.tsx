import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {createHashRouter, RouterProvider} from 'react-router-dom'
import Home_page_01 from './moduls/home_page/Home_page_01.tsx'
import Footballer_list_01 from './moduls/footballer_list/Footballer_list_01.tsx'
import Not_found_01 from './moduls/not_found_page/Not_found_01.tsx'


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home_page_01 /> }, 
      { path: "list", element: <Footballer_list_01 /> },
      { path: "*", element: <Not_found_01 /> }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={new QueryClient()}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </QueryClientProvider>
)
