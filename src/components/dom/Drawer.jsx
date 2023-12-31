"use client"

import Link from 'next/link'

const Drawer = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar w-full">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn-ghost btn-square btn">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div> 
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal z-[1001]">
              <Link href="/about" className='mr-6'>
                About
              </Link>
              <Link href="/work" className='mr-6'>
                Work
              </Link>
            </ul>
          </div>
        </div>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
        <ul className="menu z-[1001] h-full w-2/3 bg-neutral-900 p-4">
          <Link href="/about" className='mr-6'>
            About
          </Link>
          <Link href="/work" className='mr-6'>
            Work
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Drawer;