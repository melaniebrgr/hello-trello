import { useDispatch } from 'react-redux'
import { taskDeleted } from '../../../store/domains/tasks'

const taskViewerStyles = `
  font-serif
`

function TaskViewer({ id, text, onToggleEdit }) {
  const dispatch = useDispatch()
  const onDelete = () => {
    dispatch(taskDeleted(id))
  }

  return (
    <div className={taskViewerStyles}>
      <span>{text}</span>{' '}
      <span onClick={onToggleEdit}>[✏]</span>
      <span onClick={onDelete}>[-]</span>
    </div>
  );
}

export default TaskViewer