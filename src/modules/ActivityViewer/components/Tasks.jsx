import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'
import { selectTasksByListId } from '../activityViewer.selectors'

function Tasks({ listId }) {
  const selectTasks = useMemo(() => selectTasksByListId, [])
  const tasks = useSelector(state =>
    selectTasks(state, listId)
  )

  return (
    tasks.map(({ id, text }) => <Task key={id} text={text} />)
  )
}

export default Tasks