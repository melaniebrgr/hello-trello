import { useSelector } from 'react-redux'
import List from './components/List'
import Task from './components/Task'
import TaskCreator from '../TaskCreator/TaskCreator'
import { selectLists, selectTasks } from './activityViewer.selectors'

function ActivityViewer() {
  const lists = useSelector(selectLists)
  const tasks = useSelector(selectTasks)

  return (
    <>
      <h2>Lists</h2>
      { lists.map(({ id, title }) => <List key={id} id={id} title={title}>
        <>
          { tasks.map(({ id, text }) => <Task key={id} text={text} />) }
          <TaskCreator listId={id} />
        </>
      </List>) }
    </>
  );
}

export default ActivityViewer
