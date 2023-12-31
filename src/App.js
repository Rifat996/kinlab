import React from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import Blog from './Blog';
import Services from './Services';



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/services' element={<Services />} />
      </Route>
      
    )
  )



  return (
    <>
    
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;



const Root = () => {

  

  return <>
  <style>{`
          body {
            font-family: 'Fjalla One', sans-serif;
             background-color: #F8B700;
            }
        `}</style>

     


      <div>
        <Outlet />
      </div>
  </>

}