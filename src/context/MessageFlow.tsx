import { createContext, useContext, useState } from "react";
import { Edge, Node } from "reactflow";
import { NodeDataT } from "../types/nodes";
import { getNodeData } from "../utils/node-utils";
import { SaveStatusT } from "../types/states";

interface MessageFlowContextProviderProps {
    children: React.ReactNode;
}

export interface IMessageFlowContext {
    nodes: Node<NodeDataT>[];
    setNodes: React.Dispatch<React.SetStateAction<Node<NodeDataT>[]>>;
    edges: Edge[];
    setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
    selectedNode?: Node<NodeDataT>;
    addNode: (id: string) => void;
    deselectNode: () => void;
    handleSave: () => void;
    status?: SaveStatusT;
}

const initialState = {}

const MessageFlowContext = createContext(initialState as IMessageFlowContext);

const MessageFlowContextProvider = ({ children }: MessageFlowContextProviderProps) => {
    const [nodes, setNodes] = useState<Node<NodeDataT>[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);
    const [status, setStatus] = useState<SaveStatusT | undefined>();

    const addNode = (id: string) => {
        const nodeData = getNodeData(id, nodes.length);

        if (nodeData) setNodes((prev) => [...prev, nodeData]);
    }

    const deselectNode = () => {
        setNodes((prev) => prev.map((node) => {
            if (node.selected) node.selected = false;
            return node;
        }))
    }

    const handleSave = () => {
        const emptyTargetNodes = nodes.filter((node) => !edges.some((edge) => edge.target === node.id));
        if (emptyTargetNodes.length > 1) {
            console.error('More than one nodes having no target edge.');
            setStatus({ status: 'error', message: "More than one nodes having no target edge." });
            return;
        }

        setStatus({ status: 'success', data: 'Saved!' });
    }

    const selectedNode = nodes.find((node) => node.selected);

    return (
        <MessageFlowContext.Provider value={{ nodes, setNodes, edges, setEdges, addNode, deselectNode, selectedNode, status, handleSave }}>
            {children}
        </MessageFlowContext.Provider>
    )
}


export const useMessageFlowContext = () => useContext(MessageFlowContext);

export default MessageFlowContextProvider;