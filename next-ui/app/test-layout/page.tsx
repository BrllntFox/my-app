import MainCard from '@/components/shared/MainCard'
import HorizontalScroller from '@/components/test/HorizontalScroller'
import PreviewCard from '@/components/test/PreviewCard'
import VerticalScroller from '@/components/test/VerticalScroller'
import { cn } from '@/lib/utils'
import { Card, ScrollShadow } from '@nextui-org/react'
import React from 'react'

const trees = [

  { _id: "1", vName: "Cây Bàng", sName: "Bambuso_ideae" },
  { _id: "2", vName: "Cây Đa", sName: "Ficus" },
  { _id: "3", vName: "Cây Dừa", sName: "Cocos nucifera" },
  { _id: "4", vName: "Cây Gạo", sName: "Oryza sativa" },
  { _id: "5", vName: "Cây Sồi", sName: "Quercus" },
  { _id: "6", vName: "Cây Dẻ Ngựa", sName: "Salix" },
  { _id: "7", vName: "Cây Phượng", sName: "Delonix regia" },
  { _id: "8", vName: "Cây Thông", sName: "Pinus" },
  { _id: "9", vName: "Cây Cỏ May", sName: "Acer" },
  { _id: "10", vName: "Cây Trúc", sName: "Bambusoideae" }

]

const TestLayout = () => {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className='flex flex-col md:flex-row w-full gap-10 md:gap-20 items-center md:items-start'>
        <div className="w-full py-[50vh] hidden sm:block">
          <VerticalScroller trees={trees} />
        </div>
        
        <div className=" sticky w-full top-0 flex h-screen items-center ">
          <PreviewCard trees={trees}/>
        </div>

        <div className="">
          <HorizontalScroller trees = {trees} />
          </div>
      </div>
    </div>

  )
}

export default TestLayout