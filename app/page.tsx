import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='bg-blue-100'>Booking</div>
        <div className='col-span-2 bg-red-100 order-first md:order-last'>Map</div>
      </div>
    </div>
  )
}
