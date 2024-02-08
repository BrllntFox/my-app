"use client"
import { Card } from '@nextui-org/react'
import React from 'react'
import { cn } from '@/lib/utils'
import { usePreviewStore } from './Store'
import { Preview } from '@/lib/context/PreviewContext'
import FileUploader from '../shared/FileUploader'

const gradients = [
  "from-orange-50 to-red-300",
  "from-orange-50 to-amber-300",
  "from-green-50 to-cyan-300",
  "from-emerald-50 to-purple-400"
]


const PreviewCard = ({ trees }: { trees: Preview[] }) => {
  const inViewPreview = usePreviewStore((state) => state.inViewPreview)
  const [rdGd,setrdGd] = React.useState('')
  React.useEffect(() => {
    setrdGd(`${gradients[(Math.floor(Math.random() * gradients.length))]}`);
  }, [inViewPreview])
  return (
    <div className="relative w-full">
      <Card className={cn(rdGd,
        "static w-1/2 transform-x-1/2 transform-y-1/2 aspect-square bg-gradient-to-br transition-colors flex items-center text-3xl font-bold duration-3000 opacity-1/2"
      )}>
        text
      </Card>
      <div className="absolute bottom-0 right-0 h-full z-10">
      <FileUploader userId={"fakeId"} />
        </div>
    </div>
  )
}

export default PreviewCard