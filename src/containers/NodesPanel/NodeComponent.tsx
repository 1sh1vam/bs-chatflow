import { NodeTypes } from '../../types/nodes'
import TextMessage from '../../components/Text/TextMessage'

interface NodeComponentProps {
    type: NodeTypes
}

const NodeComponent = ({ type }: NodeComponentProps) => {
    switch (type) {
        case 'Text':
            return <TextMessage />
    }
}

export default NodeComponent