import { useState } from 'react';
import ListEditor from '../../ListEditor/ListEditor'
import ListViewer from './ListViewer'

function List({ id, title, children }) {
  const [ listEditRequested, setListEditRequested ] = useState(false)
  const onToggleListCreationRequested = () => { 
    setListEditRequested(!listEditRequested)
  }

  return (
    <div>
      { listEditRequested
        ? <ListEditor id={id} title={title} onToggleListCreationRequested={onToggleListCreationRequested} />
        : <ListViewer id={id} title={title} onToggleListCreationRequested={onToggleListCreationRequested}>{children}</ListViewer>
      }
    </div>
  );
}

export default List
