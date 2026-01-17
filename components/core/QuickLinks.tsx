import React from 'react'
import { BellDuoIcon, DepartmentDuoIcon, MailDuoIcon, CalenderDuoIcon } from './Icons'
import { Separator } from '../ui/separator'
import Link from 'next/link'

const QuickLinks = () => {
  return (
    <nav className="bg-theme-500">
      <div className="mx-auto py-4 grid grid-cols-2 md:grid-cols-4">

        {/* ITEM 1 */}
        <div className="flex items-center justify-center gap-2 p-2 border-r border-yellow-300/40"
          style={{
            color: 'gold'
          }}
        >
          <DepartmentDuoIcon color="gold" size={35} />
          <span>Departments</span>
        </div>

        {/* ITEM 2 */}
        <div className="flex items-center justify-center gap-2 p-2 md:border-r md:border-yellow-300/40"
          style={{
            color: 'gold'
          }}
        >
          <CalenderDuoIcon color="gold" size={35} />
          <span>Calendar</span>
        </div>

        <Separator className='bg-yellow-300/40 my-1 self-center md:sr-only' />
        <Separator className='bg-yellow-300/40 my-1 self-center md:sr-only' />


        {/* ITEM 3 */}
        <Link href={'/posts'} className="flex items-center justify-center gap-2 p-2 border-r border-yellow-300/40"
          style={{
            color: 'gold'
          }}
        >
          <BellDuoIcon color="gold" size={35} />
          <span>Notices</span>
        </Link>

        {/* ITEM 4 */}
        <Link href={'/about'} className="flex items-center justify-center gap-2 p-2"
          style={{
            color: 'gold'
          }}
        >
          <MailDuoIcon color="gold" size={35} />
          <span>Contact Us</span>
        </Link>

      </div>
    </nav>
  )
}

export default QuickLinks
