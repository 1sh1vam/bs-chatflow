import Header from './components/Layout/Header'
import NodesPanel from './containers/NodesPanel'
import DroppableArea from './components/Dnd/Droppable';
import NodeFlow from './containers/NodeFlow';
import SettingsPanel from './containers/SettingsPanel';
import { useMessageFlowContext } from './context/MessageFlow';

function App() {
  const { nodes, addNode, selectedNode, status, handleSave } = useMessageFlowContext();

  return (
    <div className="w-screen h-screen">
      <Header nodes={nodes} state={status} handleSave={handleSave} />
      <div className="h-[calc(100%-56px)] flex">
        <div className="w-[70%] h-full">
          <DroppableArea handleDrop={addNode}>
            <NodeFlow />
          </DroppableArea>
        </div>
        <div className="w-[30%] h-full border-l border-t">
          {selectedNode ? <SettingsPanel /> : <NodesPanel /> }
        </div>
      </div>
    </div>
  ) 
}

export default App
