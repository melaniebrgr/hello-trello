import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form"
import { listEdited } from '../../store/domains/lists'

function ListEditor({ id, title, onToggleEdit }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const onSubmit = ({ title }) => {
    dispatch(listEdited({ id, title }))
    onToggleEdit()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">title</label>
      <input id="title" defaultValue={title} autoFocus {...register("title", { required: true })} />
      {errors.question && <p>This field is required</p>}
      <input type="submit" />
    </form>
  )
}

export default ListEditor