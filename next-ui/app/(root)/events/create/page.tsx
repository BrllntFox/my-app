import EventForm from '@/components/shared/EventForm'
import { auth } from '@clerk/nextjs'
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Link } from '@nextui-org/react'
import React from 'react'


const EventCreatePage = () => {
  const {sessionClaims} = auth()
  const userId = sessionClaims?.userId as string
console.log(userId)
  return (
    <section className="flex my-auto">
    
    <div className="flex flex-row items-center justify-between gap-8 md:gap-16">
    <Card isFooterBlurred className="w-[400px] h-[640px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
        <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://placehold.co/600x400"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="https://placehold.co/600x400"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Breathing App</p>
            <p className="text-tiny text-white/60">Get a good night's sleep.</p>
          </div>
        </div>
        <Button radius="full" size="sm">Get App</Button>
      </CardFooter>
    </Card>   

    {/* Form card/ */}
    <div className="w-[400px]">
  <EventForm type="Create" userId={userId} />
      </div>
     </div>

  </section>
  )
}

export default EventCreatePage