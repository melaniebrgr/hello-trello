import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form"
import { taskEdited } from '../../store/domains/tasks'

function TaskEditor({ id, text, onToggleEdit }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const onSubmit = ({ task }) => {
    dispatch(taskEdited({ id, text: task }))
    onToggleEdit()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="task">task</label>
      <input id="task" defaultValue={text} autoFocus {...register("task", { required: true })} />
      {errors.question && <p>This field is required</p>}
      <input type="submit" />
    </form>
  )
}

export default TaskEditor