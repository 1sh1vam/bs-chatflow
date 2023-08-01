import { Handle, NodeProps, Position } from 'reactflow';
import ChatIcon from '../../assets/chat.png';
import WhatsAppIcon from '../../assets/WhatsApp.svg';
import { ITextNode } from '../../types/nodes';

const TextNode = ({selected, data, isConnectable }: NodeProps<ITextNode>) => {
  const handleClasses = `w-2 h-2 p-1 ${selected ? 'border border-blue-500' : ''}`;

  return (
    <div className={`max-w-[240px] ${selected ? 'border-2 border-blue-500 p-[1px] rounded-md' : ''}`}>
        <Handle type="target" position={Position.Left} isConnectable={isConnectable} className={handleClasses} />
        <div className="rounded-md overflow-hidden">
            <div className="flex justify-between items-center gap-10 bg-cyan-100 px-2 py-1">
                <img className="w-4 h-4" src={ChatIcon} />
                <p>Send Message</p>
                <img className="w-4 h-4" src={WhatsAppIcon} />
            </div>
            <div className="px-2 py-3 border bg-white shadow-inner break-all">
                {data.text}
            </div>
        </div>
        <Handle type="source" position={Position.Right} isConnectable={isConnectable} className={handleClasses} />
    </div>
  )
}

export default TextNode