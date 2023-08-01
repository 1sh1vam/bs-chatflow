import { Node } from 'reactflow';
import { NodeDataT, isTextNode } from '../../types/nodes';
import TextMessageEdit from '../../components/Text/TextMessageEdit';
import { useMessageFlowContext } from '../../context/MessageFlow';

interface GetMessageNodeProps {
    selectedNode: Node<NodeDataT>;
}

const GetMessageNode = ({ selectedNode }: GetMessageNodeProps) => {
    const { setNodes } = useMessageFlowContext();
    const handleMessageTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNodes((prev) => prev.map((node) => {
            if (node.selected && isTextNode(node)) {
                const updatedNode = structuredClone(node);
                updatedNode.data.text = e.target.value;
                return updatedNode;
            }
            return node;
        }))
    }
    if (isTextNode(selectedNode)) {
        return <TextMessageEdit onChange={handleMessageTextChange} value={selectedNode.data.text} />
    }

    return null
}

export default GetMessageNode