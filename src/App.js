import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { userRoutes, authRoutes } from './routes/AllRoutes'
import Layout from './hocs/Layout'
import NonAuthLayout from './hocs/NonAuthLayout'
import { connect } from 'react-redux'
import { get_user } from './redux/actions'
import "aos/dist/aos.css"

const App = ({ get_user }) => {

    useEffect(()=>{
        if(localStorage.getItem('token'))
            get_user();
    }, [])

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

export default connect(null, { get_user })(App)