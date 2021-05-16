import { useDispatch } from 'react-redux'
import { listDeleted } from '../../../store/domains/lists'

function ListViewer({ id, title, children, onToggleListCreationRequested }) {
  const dispatch = useDispatch()
  const onDelete = () => {
    dispatch(listDeleted(id))
  }

  return (
    <>
      <h3>{title}{' '}<span onClick={onDelete}>➖</span><span onClick={onToggleListCreationRequested}>✏️</span></h3>
      { children }
    </>
  );
}

export default ListViewer
