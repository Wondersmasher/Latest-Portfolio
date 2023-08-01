import React from 'react'

const Texts = ({children, size}) => {
  return (
     <div className={`flex flex-col flex-1  gap-4 ${size}:w-[50%] w-[100%] text-justify`}>{children}</div>
  )
}

export default Texts
