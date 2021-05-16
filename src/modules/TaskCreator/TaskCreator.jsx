import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form"
import { v4 as uuid } from 'uuid';
import { taskCreated } from '../../store/domains/tasks'

function TaskCreator({ listId }) {
  const [ taskCreationRequested, setTaskCreationRequested ] = useState(false)
  const onToggleTaskCreationRequested = () => { 
    setTaskCreationRequested(!taskCreationRequested)
  }

  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const onSubmit = ({ task }) => {
    dispatch(taskCreated({ listId, id: uuid(), text: task }))
    onToggleTaskCreationRequested()
  }

  return (
    <>
      { taskCreationRequested
        ? (<form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="task">task</label>
            <input id="task" autoFocus placeholder="What do you need to do?" {...register("task", { required: true })} />
            {errors.question && <p>This field is required</p>}
            <input type="submit" />
          </form>)
        : <p onClick={onToggleTaskCreationRequested}>Create new task ➕</p>
      }
    </>
  )
}

export default TaskCreator