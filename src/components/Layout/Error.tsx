import React from 'react'

const Error = ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    return (
        <p {...props} className="bg-red-400 px-3 py-1 rounded">{children}</p>
    )
}

export default Error