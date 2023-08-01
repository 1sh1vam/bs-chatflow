import React from 'react';

const Button = ({ children, ...props }: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className="outline-none border border-blue-500 hover:bg-blue-50 rounded px-4 py-1 text-blue-500 font-semibold">
        {children}
    </button>
  )
}

export default Button