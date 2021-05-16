import { useDispatch } from 'react-redux'
import { Droppable } from 'react-beautiful-dnd';
import { listDeleted } from '../../store/domains/lists'

const headerStyles = `mb-2`
const editorStyles = `
  cursor-pointer
  hover:text-indigo-900
`

function ListViewer({ id, title, children, onToggleEdit }) {
  const dispatch = useDispatch()
  const onDelete = () => {
    dispatch(listDeleted(id))
  }

  return (
    <>
      <header className={headerStyles}>
        <h3>{title}{' '}
          <span onClick={onToggleEdit} className={editorStyles}>[✏]</span>
          <span onClick={onDelete} className={editorStyles}>[-]</span>
        </h3>
      </header>
      <Droppable droppableId={id}>
        {(provided) => (
          <div ref={provided.innerRef}>
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
}

export default ListViewer
