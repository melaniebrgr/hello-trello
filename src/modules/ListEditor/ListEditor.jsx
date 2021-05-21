import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form"
import { Droppable } from 'react-beautiful-dnd';
import { listEdited } from '../../store/domains/lists'

const inputStyles = `
  border rounded-sm border-indigo-500
  px-2 py-0.5
`

const submitStyles = `
  bg-indigo-500 hover:bg-indigo-700
  px-2 py-0.5
`

const buttonStyles = `
  cursor-pointer
  text-left text-indigo-500 hover:text-indigo-700
`

function ListEditor({ id, title, onToggleEdit, children }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const onSubmit = ({ title }) => {
    dispatch(listEdited({ id, title }))
    onToggleEdit()
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input id="title" defaultValue={title} autoFocus {...register("title", { required: true })} className={inputStyles} />{' '}
      {errors.question && <p> This field is required</p>}
      <input type="submit" className={submitStyles} />{' '}
      <button onClick={onToggleEdit} className={buttonStyles}>Cancel</button>
    </form>
    <Droppable droppableId={id}>
        {(provided) => (
          <div ref={provided.innerRef}>
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  )
}

export default ListEditor