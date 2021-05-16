import { useState } from 'react';
import ListEditor from './ListEditor'
import ListViewer from './ListViewer'

const listStyles = `
  bg-indigo-200
  m-2
  p-2
`

function List({ id, title, children }) {
  const [ listEditRequested, setListEditRequested ] = useState(false)
  const onToggleListEditingRequested = () => { 
    setListEditRequested(!listEditRequested)
  }

  return (
    <div className={listStyles}>
      { listEditRequested
        ? <ListEditor id={id} title={title} onToggleEdit={onToggleListEditingRequested} />
        : <ListViewer id={id} title={title} onToggleEdit={onToggleListEditingRequested}>{children}</ListViewer>
      }
    </div>
  );
}

export default List
