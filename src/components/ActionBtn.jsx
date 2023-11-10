import React from 'react'
import Link from 'next/link'

const ActionBtn = ({text, link,className }) => {
  return (
    <Link href ={link}>
    <button className= {className}>
        {text}
    </button>
    
    </Link>
  )
}

export default ActionBtn
