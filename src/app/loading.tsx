import Image from 'next/image'
import React from 'react'

function Loading() {
  return (
    <div style={ 
        {
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }
    }>
      <Image src="/loader.gif" alt='Loading ...' height={64} width={64} /> 
    </div>
  )
}

export default Loading
