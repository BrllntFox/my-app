"use client"
import React, { useState } from 'react'
import { CldImage, CldUploadButton, CldUploadWidgetInfo } from 'next-cloudinary';
import { usePreviewStore } from '../test/Store';
import { Button } from '@nextui-org/react';


const FileUploader = ({ userId }: { userId: string }) => {
  const [resource, setResource] = useState<CldUploadWidgetInfo | undefined>(undefined);
  const imgUrl = usePreviewStore((state) => state.imgUrl)
  const setImgUrl = usePreviewStore((state) => state.setImgUrl)
  const imgH = usePreviewStore((state) => state.imgH)
  const imgW = usePreviewStore((state) => state.imgW)
  const setImgH = usePreviewStore((state) => state.setImgH)
  const setImgW = usePreviewStore((state) => state.setImgW)
  React.useEffect(() => {
    setImgUrl(resource?.secure_url as string)
    setImgH(resource?.height as number)
    setImgW(resource?.width as number)
    console.log(imgH, imgW)
  }, [resource])

  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <Button as="div">
        <CldUploadButton
          className={"bg-blue"}
          onUpload={(result, widget) => {
            setResource(result.info as CldUploadWidgetInfo)
            console.log(result.info)
            widget.close();
          }}
          uploadPreset="sx5pcmf8"
        >
          Upload Picture
        </CldUploadButton>
      </Button>

    </div>
  )

}


export default FileUploader