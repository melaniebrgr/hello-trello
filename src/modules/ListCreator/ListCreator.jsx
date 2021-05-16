import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form"
import { v4 as uuid } from 'uuid';
import { listCreated } from '../../store/domains/lists'

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
    <>
      { listCreationRequested
        ? (<form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">title</label>
            <input id="title" autoFocus placeholder="What is this list called?" {...register("title", { required: true })} />
            {errors.question && <p>This field is required</p>}
            <input type="submit" />
          </form>)
        : <p onClick={onToggleListCreationRequested}>Create new list ➕</p>
      }
      

    </>
  )
}

export default ListCreator