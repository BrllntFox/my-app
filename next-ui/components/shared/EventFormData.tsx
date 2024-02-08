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
import React, { KeyboardEventHandler, useState } from "react";
import { EventDefaultValues } from "@/constants";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CategorySelector from "@/components/shared/Category"

import TagInput from "./Tag";
type EventFormProps = {
  userId: string;
  type: "Create" | "Update";
};

const EventFormData = ({ userId, type }: EventFormProps) => {

  const eventFormData = new FormData()
  eventFormData.append("title","")
  eventFormData.append("description","")
  eventFormData.append("locationAt","")
  eventFormData.append("categoryId","1")
  

  async function onSubmit(eventFormData: FormData) {
    for (var i = 0; i < tags.length; i++) {
      eventFormData.append("tags", tags[i]);
    }

    if (userId && type === "Create") {
      console.log(`Create:`, eventFormData, userId)
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
  const [startDate,setStartDate] = useState<Date|null>(null)
const [endDate, setEndDate] = useState<Date|null>(null)
const [tags,setTags] = useState<string[]>([])

  return (
    <div className="flex flex-col h-full w-full ">
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Event Information</p>
            <p className="text-small text-default-500">nextui.org</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          {/* EventFormstart here */}
          <form
            className="flex flex-col sm:gap-5 max-w-[400px]"
            action={()=>onSubmit(eventFormData)}
            onKeyDown={(e) => handleFormKeyDown}
          >
            {/* Title input */}

            <Input
            name="title"
              size="md"
              label="Event Title"
            labelPlacement="outside"
              placeholder=""
              classNames={{
                label: "font-semibold",
                input: "text-default-500",
              }}
            />


            {/* Tags input */}

            <TagInput setTags={setTags} tags={tags}/>

            {/* /> */}


            {/* Category input */}

            <CategorySelector name="categoryId" formData={eventFormData} />

            {/* Description */}

            <Textarea
            name="description"
              size="md"
              label="Event Description"
              labelPlacement="inside"
              placeholder="Write something about your event"
              classNames={{
                label: "font-semibold text-lg",
                input: "pl-0 text-default-500",
              }}
            />

            {/* {Start - End ddate} */}

            <div className="flex flex-row gap-3">


              <DatePicker
              name="startDateTime"
                selected={startDate}
                onChange={(date: Date) => {setStartDate(date);eventFormData.set("startDateTime",date.toISOString())}}
                showTimeSelect
                dateFormat={"MMM d, yyyy HH:mm"}
                wrapperClassName="datePicker"
                customInput={
                  <Input
                    label="Start Time"
                    labelPlacement="outside"
                    size="md"
                    startContent={
                      <Image 
                      src="/icons/calendar.svg"
                      width={20}
                      height={20}
                      alt="Calendar"
                      />
                    }

                  />
                }
              />


              <DatePicker
              name="endDateTime"
              selected={endDate}
                onChange={(date: Date) => {setEndDate(date);eventFormData.set("endDateTime",date.toISOString())}}
                showTimeSelect
                dateFormat={"MMM d, yyyy HH:mm"}
                wrapperClassName="datePicker"
                customInput={
                  <Input                  
                    startContent={
                      <Image 
                      src="/icons/calendar.svg"
                      width={20}
                      height={20}
                      alt="Calendar"
                      />
                    }
                   
                    label="End Time"
                    labelPlacement="outside"
                    size="md"

                  />
                }
              />

            </div>

            {/* Title input */}

            <Input
              name="locationAt"
              size="md"
              label="Location"
              labelPlacement="outside"
              classNames={{
                label: "font-semibold",
                input: "text-default-500",
              }}
            />


            {/* Summit button */}
            <Button type="submit" color="primary">
              Submit
            </Button>
          </form>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EventFormData;
