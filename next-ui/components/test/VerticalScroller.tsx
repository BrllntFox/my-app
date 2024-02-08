"use client"
import React from 'react'
import MainCard from '../shared/MainCard'
import {Preview} from "@/lib/context/PreviewContext"


const VerticalScroller = ({trees}:{trees : Preview[]}) => {
  return (
    <> 
    {trees?(
        <ul>
              {trees.map((tree) =>
              (
                <li key={tree._id}>
                  <MainCard _id={tree._id} v_name={tree.vName} s_name={tree.sName} />
                </li>
              )
              )}
            </ul>
    ):"No Plant Found"}
    </>
       
    
  )
}

export default VerticalScroller