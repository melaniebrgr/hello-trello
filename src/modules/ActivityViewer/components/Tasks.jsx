import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import Task from '../../TaskEditor/Task'
import { selectTasksByListId } from '../activityViewer.selectors'

function Tasks({ listId }) {
  const selectTasks = useMemo(() => selectTasksByListId, [])
  const tasks = useSelector(state =>
    selectTasks(state, listId)
  )

  return (
    tasks.map(({ id, text }, index) => <Task key={id} id={id} text={text} index={index} />)
  )
}

export default Tasks