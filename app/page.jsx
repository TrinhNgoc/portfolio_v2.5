/* eslint-disable tailwindcss/no-custom-classname */
"use client"

import React from 'react';
import Particles from '@/components/canvas/Particles'
import Border from '@/components/dom/Border';

export default function Page() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="relative h-full w-full overflow-hidden bg-neutral-900">
          <div className="absolute inset-8 z-10 border-2 bg-neutral-900">
            <div className='absolute left-0 top-0 h-full w-full'>
              <div className='z-[1] flex h-full w-full items-center justify-center text-center'>
                <Particles />    
              </div>
              <Border />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
