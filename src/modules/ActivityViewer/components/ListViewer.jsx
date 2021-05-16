import { useDispatch } from 'react-redux'
import { listDeleted } from '../../../store/domains/lists'

function ListViewer({ id, title, children, onToggleEdit }) {
  const dispatch = useDispatch()
  const onDelete = () => {
    dispatch(listDeleted(id))
  }

  return (
    <>
      <h3>{title}{' '}<span onClick={onDelete}>➖</span><span onClick={onToggleEdit}>✏️</span></h3>
      { children }
    </>
  );
}

export default ListViewer
