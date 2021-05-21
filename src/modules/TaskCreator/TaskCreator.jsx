import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form"
import { v4 as uuid } from 'uuid';
import { taskCreated } from '../../store/domains/tasks'

const taskCreatorStyles = `
  mt-2
  text-sm
`

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
    <div className={taskCreatorStyles}>
      { taskCreationRequested
        ? (<form onSubmit={handleSubmit(onSubmit)}>
            <input id="task" autoFocus placeholder="What do you need to do?" {...register("task", { required: true })} className={inputStyles} />{' '}
            {errors.task && <span>This field is required</span>}
            <input type="submit" className={submitStyles} />{' '}
            <button onClick={onToggleTaskCreationRequested} className={buttonStyles}>Cancel</button>
          </form>)
        : <button onClick={onToggleTaskCreationRequested} className={buttonStyles}>create new task [+]</button>
      }
    </div>
  )
}

export default TaskCreator