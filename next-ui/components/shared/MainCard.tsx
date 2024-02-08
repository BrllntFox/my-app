"use client"
import { cn } from '@/lib/utils'
import { useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { usePreview } from "@/lib/context/PreviewContext"
import { usePreviewStore } from '../test/Store'
type Props = {
  v_name?: string,
  s_name?: string,
  _id: string | null
}
const MainCard = ({ v_name, s_name, _id }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  // const {preview, setPreview} = usePreview()
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" })
  const setInViewPreview = usePreviewStore((state) => state.setInViewPreview)
  const inViewPreview = usePreviewStore((state) => state.inViewPreview)

  useEffect(() => {
    if (isInView) setInViewPreview(_id)
    if (!isInView && inViewPreview === _id) setInViewPreview(null)
  }, [isInView, _id, setInViewPreview])
  return (
    <div ref={ref} className="py-16">
      <p className={cn(isInView ? "text-white" : "text-gray-600", 'text-4xl md:text-5xl transition-colors')}>{v_name}</p>
      <p className="text-xl md:text-3xl text-gray-500 font-light">{s_name}</p>
    </div>
  )
}
export default MainCard
