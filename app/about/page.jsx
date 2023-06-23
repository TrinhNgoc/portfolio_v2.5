/* eslint-disable tailwindcss/no-custom-classname */
"use client"

import React from 'react';
import Drawer from '@/components/dom/Drawer';
import Border from '@/components/dom/Border';

export default function Page() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="relative h-full w-full overflow-hidden bg-neutral-900">
          <div className="absolute inset-8 border-2 bg-neutral-900">
            <div className='absolute left-0 top-0 h-full w-full'>
              <div className='flex h-full w-full items-center justify-center'>
                <div>
                  <h1 className='mx-10 mb-8 text-2xl md:text-4xl lg:mx-40 xl:mx-96'>Hi! I&apos;m Jenny.</h1>
                  <p className='mx-10 mb-3 text-sm md:text-lg lg:mx-40 xl:mx-96'>I&apos;m a Front-end Developer from Hawaii.</p>
                  <p className='mx-10 mb-3 text-sm md:text-lg lg:mx-40 xl:mx-96'>I love crafting visually stunning websites using various CMS, with my go-to tech stack being Next.js, React, and Tailwind CSS, but I&apos;m also into exploring new tech to push boundaries</p>
                  <p className='mx-10 mb-3 text-sm md:text-lg lg:mx-40 xl:mx-96'>Lately, I&apos;ve been diving into WebGL and 3D design with Three.js, Drei, and R3F, adding some awesome visual experiences to my apps.</p>
                  <p className='mx-10 mb-3 text-sm md:text-lg lg:mx-40 xl:mx-96'>I find immense joy in pursuing my hobbies. From experimenting with flavors in the kitchen to mastering the art of baking, my culinary adventures are always a treat. I also have a creative side, expressing myself through drawing, while my beloved feline companions keep me entertained with their playful antics.</p>
                </div>
              </div>
              <Border />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
