import React from 'react';
import MessageIcon from '../../assets/chat-color.png';

const TextMessage = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className="border border-blue-500 px-2 py-1 w-1/2 min-w-fit flex flex-col items-center text-blue-500 font-semibold rounded-lg">
        <img className="w-12 h-12" src={MessageIcon} />
        {children || 'Message'}
    </div>
  )
}

export default TextMessage