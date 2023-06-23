"use client"
import Scene from '@/components/canvas/Scene'
import Items from '@/components/canvas/Items'
import Border from '@/components/dom/Border'

export default function Page() {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center bg-[#151515]'>
        <div className="relative h-full w-full bg-neutral-900">
            <div className="absolute inset-8 overflow-x-hidden border-2 bg-neutral-900">
              <div className='absolute left-0 top-0 h-full w-full'>
                <Border />
              </div>
                <Scene>
                    <Items />
                </Scene>
            </div>
        </div>
    </div>
  )
}

