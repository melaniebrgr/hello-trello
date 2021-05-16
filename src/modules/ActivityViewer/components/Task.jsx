import { useDispatch } from 'react-redux'
import { taskDeleted } from '../../../store/domains/tasks'

function Task({ id, text }) {
  const dispatch = useDispatch()
  const onDelete = () => {
    dispatch(taskDeleted(id))
  }

  return (
    <div>
      <span>{text}</span><span onClick={onDelete}>➖</span>
    </div>
  );
}

export default Task
