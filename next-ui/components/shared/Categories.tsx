"use client"

import {useState} from 'react'
import {ICategory} from "@/lib/databases/models/category.model"
import {createCategory, getAllCategories} from "@/lib/actions/category.action"

type CategoriesProps = {
    value: string,
    onChangeHandler?: (value:string) => void,
}
const Categories = ({value, onChangeHandler}:CategoriesProps) => {
    const [categories, setCategories] = useState<ICategory[]>([
        {_id:'1', name: 'Learner'},
    ]);

    const [newCategories,setNewCategories] = useState('')

    const handleAddNewCategory = () => {
    createCategory({
        cate
    })
    }

}