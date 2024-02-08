import { Card } from '@nextui-org/react'
import React from 'react'
import Image from "next/image"
import { usePreviewStore } from '../test/Store'
import FileUploader from './FileUploader'
import { motion } from 'framer-motion'

const PlantImgUploader = () => {
    const imgUrl = usePreviewStore((state)=>state.imgUrl)
    const imgH = usePreviewStore((state)=>state.imgH)
    const imgW = usePreviewStore((state)=>state.imgW)
      // Calculate aspect ratio of the image
      const imgAspectRatio = imgW / imgH; 
      // Calculate the final width of the image based on the container width
      const finalWidth = 450;
      // Calculate the final height of the image based on the final width and original aspect ratio
      const finalHeight = Math.round(finalWidth / imgAspectRatio);
  return (
    <>
     {imgUrl&&(
    <div className="p-5 md:p-10">
       
       <Card className="relative w-full items-center">
        <Image 
         height={`${finalHeight}`}
         width="400"
         alt="New Plant"
         src={imgUrl}
         
        /> 
    </Card>
      </div>

     )}
   
    <div className="">
     <FileUploader userId="fakeId" />  
      </div>
    </>
  )
}

export default PlantImgUploader