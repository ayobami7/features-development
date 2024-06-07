import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className='flex items-center justify-center'>
        <div className='flex flex-row justify-between p-2 m-2 gap-10'>
            <Link href="/features/Testimonials">Testimonials</Link>
            <Link href="/features/WalletPage">Wallet Page</Link>
            <Link href="/features/assignment">Assignment</Link>
            <Link href="/features/result">Result</Link>
        </div>
    </nav>
  )
}

export default Navbar