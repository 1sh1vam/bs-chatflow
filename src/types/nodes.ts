import { Node } from "reactflow";

export interface IEdge {
    id: string;
    source: string;
    target: string;
}

export type NodeTypes = 'Text';

export interface ITextNode {
    type: 'Text';
    text: string;
}
  
export interface IImageNode {
    type: 'Image';
    imageUrl: string;
    caption: string;
}

export type NodeDataT = ITextNode | IImageNode;

export const isTextNode = (node: Node<NodeDataT>): node is Node<ITextNode> => {
    return node.data.type === 'Text';
}

export const isImageNode = (data: NodeDataT): data is IImageNode => {
    return data.type === 'Image';
}