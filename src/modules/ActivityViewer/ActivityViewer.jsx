import { useSelector } from 'react-redux'
import List from './components/List'
import Tasks from './components/Tasks'
import TaskCreator from '../TaskCreator/TaskCreator'
import { selectLists } from './activityViewer.selectors'

function ActivityViewer() {
  const lists = useSelector(selectLists)

  return (
    <>
      <h2>Lists</h2>
      {lists.map(({ id, title }) =>
        <List key={id} id={id} title={title}>
          <>
            <Tasks listId={id} />
            <TaskCreator listId={id} />
          </>
        </List>)}
    </>
  );
}

export default ActivityViewer
