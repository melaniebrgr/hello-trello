import { useState } from 'react'
import TaskEditor from '../../TaskEditor/TaskEditor'
import TaskViewer from './TaskViewer'

function Task({ id, text, index }) {
  const [ taskEditRequested, setTaskEditRequested ] = useState(false)
  const onToggleTaskEditingRequested = () => { 
    setTaskEditRequested(!taskEditRequested)
  }

  return (
    <>
      { taskEditRequested
        ? <TaskEditor id={id} text={text} onToggleEdit={onToggleTaskEditingRequested} />
        : <TaskViewer id={id} text={text} onToggleEdit={onToggleTaskEditingRequested} index={index} />
      }
    </>
  );
}

export default Task