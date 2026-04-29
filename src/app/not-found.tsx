import { Button } from '@/components/ui/button'
import React from 'react'
import { APP_NAME } from '../../constants'
import Image from 'next/image'

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col border items-center justify-center gap-1">
      <Image
        src="/images/logo.svg"
        alt={`${APP_NAME} logo`}
        width={48}
        height={48}
      />
      <div className="p-6 text-center rounded-lg shadow-md">
        <h1 className="text-3xl-bold-bold">Not Found</h1>
        <p className="text-destructive">Could not found the requested page</p>
        <Button variant="default">
          Back to Home
        </Button>
      </div>
    </div>
  )
}

export default NotFound
