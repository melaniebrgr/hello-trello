import { useState } from 'react'
import { useDispatch } from 'react-redux'
import TaskEditor from '../../TaskEditor/TaskEditor'
import { taskDeleted } from '../../../store/domains/tasks'

const taskListItemStyles = `
  font-serif
`

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
    <ul>
      { taskEditRequested
        ? <TaskEditor id={id} text={text} onToggleEdit={onToggleTaskEditingRequested} />
        : (<li className={taskListItemStyles}>
          <span>{text}</span>{' '}
          <span onClick={onToggleTaskEditingRequested}>[✏]</span>
          <span onClick={onDelete}>[-]</span>
        </li>)
      }
    </ul>
  );
}

export default Task