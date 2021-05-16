import { useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import ListCreator from '../ListCreator/ListCreator'
import ActivityViewer from '../ActivityViewer/ActivityViewer'
import { taskStatusUpdated } from '../../store/domains/tasks'

const appStyles = `m-6`
const appHeaderStyles = `mx-2`

function App() {
  const dispatch = useDispatch();
  const onDragEnd = (result) => {
    if (result && result.destination) {
      dispatch(taskStatusUpdated({ id: result.draggableId, listId: result.destination.droppableId }))
    }
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={appStyles}>
        <h1 className={appHeaderStyles}>Hello Trello</h1>
        <ListCreator />
        <ActivityViewer />
      </div>
    </DragDropContext>
  );
}

export default App
