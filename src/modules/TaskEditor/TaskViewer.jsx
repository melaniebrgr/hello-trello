import { useDispatch } from 'react-redux'
import { Draggable } from 'react-beautiful-dnd';
import { taskDeleted } from '../../store/domains/tasks'

const taskViewerStyles = `
  font-serif
`

function TaskViewer({ id, text, onToggleEdit, index }) {
  const dispatch = useDispatch()
  const onDelete = () => {
    dispatch(taskDeleted(id))
  }

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div 
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={taskViewerStyles}
        >
          <span>{text}</span>{' '}
          <span onClick={onToggleEdit}>[✏]</span>
          <span onClick={onDelete}>[-]</span>
        </div>
      )}
    </Draggable>
  );
}

export default TaskViewer