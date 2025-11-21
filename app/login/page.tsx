import React from 'react'
import FormLogin from '@/components/FormLogin'
import Carousel from '@/components/Carousel'

type Props = {}

function page({}: Props) {
  return (
     <>
          <main className="w-full flex min-h-screen bg-[#F7F9F8] bg-center">
                  <FormLogin />
                  <Carousel />
          </main>
    </>
  )
}

export default page