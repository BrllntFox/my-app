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
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import React from "react";
import { EventDefaultValues } from "@/constants";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NextImage from "next/image";
import { MailIcon } from "@/public/icons/MailIcon";
import { LocationIcon } from "@/public/icons/LocationIcon";

type EventFormProps = {
  userId: string;
  type: "Create" | "Update";
};
export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  locationAt?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price: string;
  isFree: boolean;
  url?: string;
  category: { _id: string; name: string };
  organizer: { _id: string; firstName: string; lastName: string };
}
const EventForm = ({ userId, type }: EventFormProps) => {
  const initValues = EventDefaultValues;
  const { handleSubmit, control } = useForm<IEvent>({
    defaultValues: initValues,
  });

  async function onSubmit(data: IEvent) {
    console.log(data);
  }
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
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Title input */}
            <Controller
              control={control}
              name="title"
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  {...fieldState}
                  size="md"
                  label="Event Title"
                  labelPlacement="outside"
                  placeholder=""
                  classNames={{
                    label: "font-semibold",
                    input: "text-default-500",
                  }}
                />
              )}
            />
             {/* Category input */}
             {/* <Controller
              control={control}
              name="categoryId"
              rules={{ required: true }}
              render={({ field, fieldState }) => (

              )}
            /> */}
            {/* Description */}
            <Controller
              control={control}
              name="description"
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <Textarea
                  {...field}
                  {...fieldState}
                  size="md"
                  label="Event Description"
                  labelPlacement="inside"
                  placeholder="Write something about your event"
                  classNames={{
                    label: "font-semibold text-lg",
                    input: "pl-0 text-default-500",
                  }}
                />
              )}
            />
            {/* {Start - End ddate} */}

            <div className="flex flex-row gap-3 justify-stretch">
              <Controller
                control={control}
                name="startDatetime"
                rules={{ required: true }}
                className="w-full"
                render={({ field, fieldState }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date: Date) => field.onChange(date)}
                    showTimeSelect
                    dateFormat={"MMM d, yyyy h:mm"}
                    customInput={
                      <Input
                        label="Start Time"
                        labelPlacement="outside"
                        size="md"
                        {...field}
                      />
                    }
                  />
                )}
              />
              <Controller
                control={control}
                name="endDatetime"
                rules={{ required: true }}
                className="w-full"
                render={({ field, fieldState }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date: Date) => field.onChange(date)}
                    showTimeSelect
                    dateFormat={"MMM d, yyyy h:mm"}
                    customInput={
                      <Input
                        label="End Time"
                        labelPlacement="outside"
                        size="md"
                        {...field}
                      />
                    }
                  />
                )}
              />
            </div>

            {/* Title input */}
            <Controller
              control={control}
              name="locationAt"
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  {...fieldState}
                  size="md"
                  label="Location"
                  labelPlacement="outside"
                  classNames={{
                    label: "font-semibold",
                    input: "text-default-500",
                  }}
                />
              )}
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

export default EventForm;
