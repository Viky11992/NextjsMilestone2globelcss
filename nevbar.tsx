import React from 'react'
import Link from 'next/link'

function nevbar() {
  return (
    <div className='mian'>
        <div className="nev">
        <div className="box">SA</div>
        <span>Shoiab arshad</span>
        <div className="left">
         
         <Link href="/">home</Link>
         <Link href="/about">about</Link>
         <Link href="/contect">contect</Link>
         
       </div>
        
        </div>

    </div>
  )
}

export default nevbar