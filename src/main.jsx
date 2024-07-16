import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Error from './pages/Error';

// Defines the routes to wich the components will render
const router = createBrowserRouter([
  {
    // Renders the App component with the pages as it's childrens
    path:'/',
    element: <App />,
    errorElement: <Error />,
    children:[
      {
        // Sets the About me page as the index
        index:true,
        element: <AboutMe />,
      },
      {
        path:'/contact',
        element: <Contact />,
      },
      {
        path:'/portfolio',
        element: <Portfolio />,
      },
      {
        path:'/resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
