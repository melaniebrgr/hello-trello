import { useDispatch } from 'react-redux'
import { listDelete } from '../../../store/domains/lists'

function List({ id, title }) {
  const dispatch = useDispatch()
  const onDelete = () => {
    dispatch(listDelete(id))
  }

  return (
    <div>
      <header>
        <h3>{title}{' '}<span onClick={onDelete}>-</span></h3>
      </header>
    </div>
  );
}

export default List
