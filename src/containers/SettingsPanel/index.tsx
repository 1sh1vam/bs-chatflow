import BackIcon from '../../assets/back.svg';
import GetMessageNode from './GetMessageNode';
import { useMessageFlowContext } from '../../context/MessageFlow';

const SettingsPanel = () => {
  const { deselectNode, selectedNode } = useMessageFlowContext();
  return (
    <div className="w-full">
        <div className="relative px-2 py-2 text-center">
            <img onClick={deselectNode} className="w-4 h-4 cursor-pointer absolute left-2 top-1/2 -translate-y-1/2" src={BackIcon} />
            <p className="text-sm">Message</p>
        </div>
        <div className="border-t border-b">
            <div className="py-4 px-2">
                <p className="text-gray-500 mb-1">{selectedNode!.type}</p>
                <GetMessageNode selectedNode={selectedNode!} />
            </div>
        </div>
    </div>
  );
}

export default SettingsPanel