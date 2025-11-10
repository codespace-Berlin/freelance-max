import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Header } from '@/payload-types'

export async function Header() {
  const headerData: Header | null = await getCachedGlobal('header', 1)()

  if (!headerData) {
    // Return a minimal header if database is not available
    return (
      <header className="container relative z-20">
        <div className="py-8 flex justify-between">
          <Link href="/">
            <span className="text-xl font-bold">Logo</span>
          </Link>
        </div>
      </header>
    )
  }

  return <HeaderClient data={headerData} />
}
