import React from 'react'
import "./styles.css"

const boxes = () => {
  return (
    <>
        <div className='landscape'>
            <button className='horizontal' disabled>
                Up
            </button>
            <div className='portrait'>
                <button className='vertical' disabled>
                    Left
                </button>
                <div className='container'>
                    <div className='box'></div>
                </div>
                <button className='vertical'>
                    Right
                </button>
            </div>
            <button className='horizontal'>
                Bottom
            </button>
        </div>
    </>
  )
}

export default boxes