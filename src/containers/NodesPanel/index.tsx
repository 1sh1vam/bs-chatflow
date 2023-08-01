import DraggableItem from '../../components/Dnd/Draggable';
import { NODES_TYPES_LIST } from '../../constants/nodelist';
import NodeComponent from './NodeComponent';

const NodesPanel = () => {
  return (
    <div className="w-full h-full p-2">
        {NODES_TYPES_LIST.map((node) => (
            <DraggableItem id={node.id} key={node.id}>
                <NodeComponent type={node.type} />
            </DraggableItem>
        ))}
    </div>
  )
}

export default NodesPanel