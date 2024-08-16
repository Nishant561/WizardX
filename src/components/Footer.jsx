import React, { useEffect, useState } from 'react'

function Footer() {

    const [date , setDate] = useState('')

    useEffect(()=>{
        const date = new Date()
        setDate(date.getFullYear())
    })

  return (
    <>
      <div className='w-full'>
                <h1 className='bg-green-400 py-4 text-2xl font-semibold text-center'>Copyright reserved by Nishant Baruwal {date}</h1>
      </div>
    </>
  )
}

export default Footer
