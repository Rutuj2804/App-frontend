import { CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
    return (
        <div className='loader'>
            <CircularProgress color="secondary" />
        </div>
    )
}

export default Loader