import React from 'react'

const curve = () => {
    const backgroundStyle = {
        background: 'linear-gradient(135deg, #0079BF, #4A90E2)',
       
        position: 'relative',
        overflow: 'hidden',
      };
    
      const curveStyle = {
        position: 'absolute',
        bottom: '-50px', // Adjust the curve height
        left: '0',
        right: '0',
        height: '100px', // Adjust the curve height
        background: '#FFF', // Background color of the curve
        borderRadius: '50%', // Makes it a semi-circle
      };
  return (
    <div style={curveStyle}></div>
  )
}

export default curve