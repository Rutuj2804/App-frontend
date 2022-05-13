import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { userRoutes, authRoutes } from './routes/AllRoutes'
import Layout from './hocs/Layout'
import NonAuthLayout from './hocs/NonAuthLayout'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {
                        userRoutes.map((route, i)=>(
                            <Route 
                                key={i} 
                                path={route.path} 
                                element={<Layout>{route.component}</Layout>}
                            />
                        ))
                    }
                    {
                        authRoutes.map((route, i)=>(
                            <Route 
                                key={i} 
                                path={route.path} 
                                element={<NonAuthLayout>{route.component}</NonAuthLayout>}
                            />
                        ))
                    }
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App