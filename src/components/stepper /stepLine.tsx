import { cn } from 'cn'
import React from 'react'

type StepLineType ={
    filled:boolean
}


export const StepLine = ({filled}:StepLineType) => {
  return (
    <div className={cn( "flex-1 origin-left transition duration-300 bg-[#BE94FD] h-0.5 " , filled ? "scale-x-100" : "scale-x-0")} />
  )
}
