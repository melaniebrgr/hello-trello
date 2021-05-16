import { useSelector } from 'react-redux'
import List from './components/List'
import Tasks from './components/Tasks'
import TaskCreator from '../TaskCreator/TaskCreator'
import { selectLists } from './activityViewer.selectors'

const listsHeaderStyles = `mx-2`
const listsStyles = `
  flex flex-grow flex-row flex-nowrap
`

function ActivityViewer() {
  const lists = useSelector(selectLists)

  return (
    <>
      <h2 className={listsHeaderStyles}>Lists</h2>
      <div className={listsStyles}>
      {lists.map(({ id, title }) =>
        <List key={id} id={id} title={title}>
          <>
            <Tasks listId={id} />
            <TaskCreator listId={id} />
          </>
        </List>)}
      </div>
    </>
  );
}

export default ActivityViewer
