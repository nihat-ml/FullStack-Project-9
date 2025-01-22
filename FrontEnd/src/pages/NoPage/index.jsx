import React from 'react'
import { useNavigate } from 'react-router-dom'

function NoPage() {
    const navigate = useNavigate()
  return (
    <>
        <div style={{display:'flex', justifyContent:"center", alignContent:"center"}}>404 NOT FOUND</div>
        <button style={{display:'flex', justifyContent:"center", alignContent:"center"}} className='backBtn' onClick={() => navigate("/")}>Back to Home</button>
    </>
  )
}

export default NoPage