"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Image,
  Input,
  Button,
  Textarea,
} from "@nextui-org/react";
import React from "react"

import TagInput from "./Tag";
import PlantImgUploader from "./PlantImgUploader";
import { usePreviewStore } from "../test/Store";
type EventFormProps = {
  userId: string;
  type: "Create" | "Update";
};

const PlantForm = ({ userId, type }: EventFormProps) => {
  const imgUrl = usePreviewStore((state)=>state.imgUrl)

  const plantFormData = new FormData()
  const [formState,setFormState] = React.useState(
    {
      s_name:"",
      v_name:"",
      img_url:"",
      isDone:false
    }
  )
  const [formError,setFormError] = React.useState(
    {
      v_name_error:"",
      s_name_error:""
    }
  )

  async function onSubmit(plantFormData: FormData) {
    if (userId && type === "Create") {
      plantFormData.set("img_url",imgUrl)
      plantFormData.set("s_name",formState.s_name);
      plantFormData.set("v_name",formState.v_name);
      
      


      console.log(`Create:`, plantFormData, userId)
    }
    else {
      throw new Error('internal error')
    }
  }
  const handleFormKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
    }
  }


  return (
    <div className="flex flex-col h-full w-full">
          <form
            action={() => onSubmit(plantFormData)}
            onKeyDown={(e) => handleFormKeyDown}
          >
      <Card className="max-w-[400px] gap-5 md:gap-10">
        <CardHeader className="flex gap-5">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Thêm hình ảnh mới</p>
            <p className="text-small text-default-500"></p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="gap-5 md:gap-10">
          {/* EventFormstart here */}
            {/* Title input */}

            <Input
              name="s_name"
              size="md"
              label="Tên Khoa Học"
              labelPlacement="inside"
              placeholder=""
              classNames={{
                label: "font-semibold",
                input: "text-default-500",
              }}
              required
              value={formState.s_name}
              onValueChange={(e)=>{
                setFormState(prevState=>({...prevState,s_name:e})); console.log(formState);
                if (formState.s_name.length > 4 ) return setFormError(prevState => ({...prevState,s_name_error:"Long"}))
              }}
              errorMessage={formError.s_name_error}
            />
            <Input
              name="v_name"
              size="md"
              label="Tên Tiếng Việt"
              labelPlacement="inside"
              placeholder=""
              classNames={{
                label: "font-semibold",
                input: "text-default-500",
              }}
              onChange={(e)=>plantFormData.set("v_name",e.target.value)}
            />

            <PlantImgUploader />
        </CardBody>
        <Divider />
        <CardFooter className="flex items-center">  
            <Button type="submit" color="primary" size="md" className="w-1/2 mx-auto">
              Submit
            </Button>
        </CardFooter>
      </Card>
                      </form>
    </div>
  );
};

export default PlantForm;
