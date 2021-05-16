import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { listDelete } from '../../../store/domains/lists'
import ListEditor from '../../ListEditor/ListEditor'

function List({ id, title, children }) {
  const dispatch = useDispatch()
  const onDelete = () => {
    dispatch(listDelete(id))
  }
  const [ listEditRequested, setListEditRequested ] = useState(false)
  const onToggleListCreationRequested = () => { 
    setListEditRequested(!listEditRequested)
  }

  return (
    <div>
      { listEditRequested
        ? <ListEditor id={id} title={title} onToggleListCreationRequested={onToggleListCreationRequested} />
        : (<>
            <h3>{title}{' '}<span onClick={onDelete}>➖</span><span onClick={onToggleListCreationRequested}>✏️</span></h3>
            { children }
          </>)
      }
    </div>
  );
}

export default List
