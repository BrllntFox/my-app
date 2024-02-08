"use client"
import { useEffect, useState, forwardRef,ForwardedRef } from "react"
import { createCategory, getAllCategories } from "@/lib/actions/category.action"
import { Select, SelectItem, Button } from "@nextui-org/react";
import { ICategory } from "@/lib/databases/models/category.model";
import React from "react";

type CategorySelectorParams = {
    // value: any,
    // onChangeHandler: (value: any) => void,
    name:string,
    formData: FormData
}

const CategorySelector = 
    ({ name, formData }: CategorySelectorParams) => {
   const categories = [
    {_id:"1",name:"Science"},
    {_id:"2",name:"Tech"},
    {_id:"3",name:"Entertainment"},
    {_id:"4",name:"Art"},
]
const [value, setValue] = React.useState<string>("");

const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setValue(e.target.value);
  formData.set(name,e.target.value as string)
  console.log(e.target.name , e.target.value, formData)
};
    return (
        <div>
            <Select
                label="Select an category"
                defaultSelectedKeys="1"
                selectedKeys={value}
                onChange={handleSelectionChange}>
                {categories?.map((category) => (
                    <SelectItem key={category._id} value={category._id}>
                        {category.name}
                    </SelectItem>
                ))
                }
            {/* //     <SelectItem>
            // <Button className="w-full" size="sm"> Add New Category </Button>
            // </SelectItem>  */}
            </Select>

        </div >
    )
            }
            
export default CategorySelector