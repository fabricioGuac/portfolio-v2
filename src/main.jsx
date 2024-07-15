import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';
import Error from './pages/Error.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    Element:<App />,
    errorElement:<Error />,
    children:[
      {
        index:true,
        element:<AboutMe />,
      },
      {
        path:'/contact',
        element:<Contact />,
      },
      {
        path:'/portfolio',
        element:<Portfolio />,
      },
      {
        path:'/resume',
        element:<Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
