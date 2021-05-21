import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form"
import { v4 as uuid } from 'uuid';
import { listCreated } from '../../store/domains/lists'

const listCreatorStyles = `
  m-2
`

const inputStyles = `
  border rounded-sm border-indigo-500
  px-2 py-0.5
`

const submitStyles = `
  bg-indigo-500 hover:bg-indigo-700
  px-2 py-0.5
  text-white
`
const buttonStyles = `
  cursor-pointer
  text-indigo-700 hover:text-indigo-900
`

function ListCreator() {
  const [ listCreationRequested, setListCreationRequested ] = useState(false)
  const onToggleListCreationRequested = () => { 
    setListCreationRequested(!listCreationRequested)
  }

  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const onSubmit = ({ title }) => {
    dispatch(listCreated({ id: uuid(), title }))
    onToggleListCreationRequested()
  }

  return (
    <div className={listCreatorStyles}>
      { listCreationRequested
        ? (<form onSubmit={handleSubmit(onSubmit)}>
            <input id="title" autoFocus placeholder="What is this list called?" {...register("title", { required: true })} className={inputStyles} />{' '}
            <input type="submit" className={submitStyles} />{' '}
            <button onClick={onToggleListCreationRequested} className={buttonStyles}>Cancel</button>
            {errors.title && <span> This field is required</span>}{' '}
          </form>)
        : <button onClick={onToggleListCreationRequested} className={buttonStyles}>create new list [+]</button>
      }
    </div>
  )
}

export default ListCreator