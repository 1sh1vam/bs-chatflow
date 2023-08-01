import { Node } from 'reactflow';
import { NodeDataT } from '../../types/nodes'
import Button from './Button';
import { SaveStatusT } from '../../types/states';
import Error from './Error';

interface HeaderProps {
  nodes: Node<NodeDataT>[];
  handleSave: () => void;
  state?: SaveStatusT;
}

const Header = ({ nodes, state, handleSave }: HeaderProps) => {
  // console.log('nodes', nodes);
  if (!nodes) console.log('nodes', nodes)
  return (
    <div className="bg-gray-200 h-14 py-2 flex items-center justify-end px-4 shadow-md">
      {state?.status === 'error' ? (
        <div className="mx-auto">
          <Error>Cannot save the flow</Error>
        </div>
      ) : null}
      <Button onClick={handleSave}>Save Changes</Button>
    </div>
  )
}

export default Header