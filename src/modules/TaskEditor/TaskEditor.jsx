import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form"
import { taskEdited } from '../../store/domains/tasks'

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

function TaskEditor({ id, text, onToggleEdit }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const onSubmit = ({ task }) => {
    dispatch(taskEdited({ id, text: task }))
    onToggleEdit()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input id="task" defaultValue={text} autoFocus {...register("task", { required: true })} className={inputStyles} />{' '}
      {errors.question && <p>This field is required</p>}
      <input type="submit" className={submitStyles} />{' '}
      <button onClick={onToggleEdit} className={buttonStyles}>Cancel</button>
    </form>
  )
}

export default TaskEditor