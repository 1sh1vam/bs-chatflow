import React from 'react'

interface DraggableItemProps extends React.HTMLAttributes<HTMLDivElement> {
    id: string;
}

const DraggableItem = ({ id, children, ...props }: DraggableItemProps) => {
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData("text/plain", id);
    };
  
    return (
      <div
        {...props}
        className="cursor-grab"
        draggable
        onDragStart={handleDragStart}
      >
        {children}
      </div>
    );
  };

export default DraggableItem