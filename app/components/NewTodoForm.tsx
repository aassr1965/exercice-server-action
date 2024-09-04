"use client"

import { useRef } from "react"
import { createTodoAction } from "../_actions"

const NewTodoForm = () => {
    const formRef = useRef<HTMLFormElement>(null)
    async function action (data: FormData) {
      const title = data.get('title')  
      if (!title || typeof title !== 'string') return


      // call the server action to create a new todo
      console.log(title)
      await createTodoAction(title)
      //reset the form
      formRef.current?.reset()
    }
  return (
    <form ref={formRef} action={action}>
      <h2>Create a new Todo</h2>
      <input type='text' name='title' className="rouded border-slate-600 px-2 py-0.5" />
      <button
        type='submit'
        className='ml-2 rounded bg-slate-700 px-2 py-1 text-sm text-white disabled:bg-opacity-50'
      >
        Add Todo
      </button>
    </form>
  )
}

export default NewTodoForm
