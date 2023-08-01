import { nanoid } from "nanoid";
import { NODES_TYPES_LIST } from "../constants/nodelist"
import { ITextNode, NodeDataT } from "../types/nodes";
import { Node } from "reactflow";

export const getNodeData = (id: string, nodeNumber = 0) => {
    const node = NODES_TYPES_LIST.find((nodeElem) => nodeElem.id === id);

    if (!node) return;

    const commonNodeData: Pick<Node<NodeDataT>, 'id' | 'position' | 'selectable'> = {
        id: nanoid(5),
        position: { x: getNodeRandomPos(), y: getNodeRandomPos() },
        selectable: true
    }

    switch(node.type) {
        case 'Text': {
            const textNodeData: Node<ITextNode> = {
                ...commonNodeData,
                type: 'Text',
                data: { type: 'Text', text: 'Node' + (nodeNumber + 1) }
            }
            return textNodeData;
        }
    }

}

const getNodeRandomPos = (threshold = 200) => Math.floor(Math.random() * threshold);