import { useState } from 'react';
import ListEditor from '../../ListEditor/ListEditor'
import ListViewer from './ListViewer'

function List({ id, title, children }) {
  const [ listEditRequested, setListEditRequested ] = useState(false)
  const onToggleListEditingRequested = () => { 
    setListEditRequested(!listEditRequested)
  }

  return (
    <div>
      { listEditRequested
        ? <ListEditor id={id} title={title} onToggleEdit={onToggleListEditingRequested} />
        : <ListViewer id={id} title={title} onToggleEdit={onToggleListEditingRequested}>{children}</ListViewer>
      }
    </div>
  );
}

export default List
