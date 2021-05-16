import { useState } from 'react'
import { useDispatch } from 'react-redux'
import TaskEditor from '../../TaskEditor/TaskEditor'
import { taskDeleted } from '../../../store/domains/tasks'

function Task({ id, text }) {
  const [ taskEditRequested, setTaskEditRequested ] = useState(false)
  const onToggleTaskEditingRequested = () => { 
    setTaskEditRequested(!taskEditRequested)
  }

  const dispatch = useDispatch()
  const onDelete = () => {
    dispatch(taskDeleted(id))
  }

  return (
    <div>
      { taskEditRequested
        ? <TaskEditor id={id} text={text} onToggleEdit={onToggleTaskEditingRequested} />
        : (<>
          <span>{text}</span>
          <span onClick={onDelete}>➖</span>
          <span onClick={onToggleTaskEditingRequested}>✏️</span>
        </>)
      }
    </div>
  );
}

export default Task