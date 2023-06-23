"use client"

import Link from 'next/link'
import Image from 'next/image'
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";

const Border = () => {
  return (
    <>
      <div className='absolute bottom-10 left-10 z-[2] text-xs'>
        <div className='inline-flex'>
          <Link href="https://www.linkedin.com/in/ngoctrinh/" className='mr-2'>
            <RxLinkedinLogo className='text-lg'/>
          </Link>
          <Link href="https://github.com/TrinhNgoc" className='mr-2'>
            <RxGithubLogo className='text-lg'/>
          </Link>
        </div>
      </div>
      <div className='absolute right-10 top-16 z-[2] text-base'>
        <Link href="/about" className='mr-6'>
          About
        </Link>
        <Link href="/work" className='mr-6'>
          Work
        </Link>
      </div>
      <div className='absolute left-10 top-10 z-[2] text-xs'>
        <Link href="/">
          <Image src="/img/trinh.PNG"
            width={70}
            height={80}
            alt="Logo with the word Trinh" />
        </Link>
      </div>
      <div className='absolute bottom-10 right-10 text-xs'>2023</div>
    </>
  )
}

export default Border;