import React from 'react'

const TextMessageEdit = (props: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) => {
  return (
    <textarea
        {...props}
        className="border border-gray-500 w-full p-2 rounded"
    />
  )
}

export default TextMessageEdit