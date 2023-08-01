import { Controls, MarkerType, NodeTypes, OnConnect, OnEdgesChange, OnNodesChange, ReactFlow, addEdge, applyEdgeChanges, applyNodeChanges } from 'reactflow'
import TextNode from '../../components/FlowNodes/TextNode';
import 'reactflow/dist/style.css'
import { useCallback } from 'react';
import { useMessageFlowContext } from '../../context/MessageFlow';


const nodeTypes: NodeTypes = { Text: TextNode };

const NodeFlow = () => {
  const { nodes, edges, setNodes, setEdges } = useMessageFlowContext();

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect: OnConnect = useCallback(
    (connection) => {
      const { source, target } = connection;

      // If an edge form the source already exists
      const existingEdge = edges.find((edge) => edge.source === source && edge.target !== target);

      // If there is already an edge form the same source ignore the new connection
      if (existingEdge) return;
      setEdges((eds) => addEdge({ ...connection, markerEnd: { type: MarkerType.Arrow, strokeWidth: 2 } }, eds))
    },
    [setEdges, edges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <Controls />
    </ReactFlow>
  )
}

export default NodeFlow