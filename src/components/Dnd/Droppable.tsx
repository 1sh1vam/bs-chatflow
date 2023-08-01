import { useState } from "react";

interface DroppableAreaProps extends React.HTMLAttributes<HTMLDivElement> {
    handleDrop: (id: string) => void;
}

const DroppableArea = ({ handleDrop, children, ...props }: DroppableAreaProps) => {
    const [dragging, setDragging] = useState(false);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (!dragging) setDragging(true);
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(false);
        const id = e.dataTransfer.getData("text/plain");
        handleDrop(id);
    };

    return (
        <div
            {...props}
            onDragOver={handleDragOver}
            onDragLeave={() => setDragging(false)}
            onDrop={onDrop}
            className={`w-full h-full p-2 ${dragging ? 'border-2 rounded-lg border-dashed border-gray-400' : ''}`}
        >
            {children}
        </div>
    );
};


export default DroppableArea;