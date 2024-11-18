import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Review from './pages/Review/Review'

import './styles/Main.scss'

/**
 *
 * @returns
 */

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/review/:id',
        element: <Review />
    },
])

/**
 *
 *
 */

function App() {

    return (
        <>
            <Header />
            <RouterProvider router={router} />
            <Footer />
        </>
    )
}

export default App
