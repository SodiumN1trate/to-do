import { useState } from 'react'
import { TaskType } from '@/helpers/Types'

interface FormPropsType {
  setMessage: (message: string, status: boolean) => void
  refetch: () => void
}

export default function Form(props: FormPropsType) {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const task: TaskType = {
      title: title,
      description: description,
    }

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    }).then(async (response) => {
      const responseData = await response.json()
      if (!response.ok) {
        props.setMessage(responseData.message, false)
      } else {
        setTitle('')
        setDescription('')
        props.setMessage('Added new task', true)
        // setMessage('Added new task')
        // setMessageSuccess(true)

        props.refetch()
      }
    })
  }

  return (
    <form
      className="space-y-3 border-b border-gray-900/10 pb-3"
      onSubmit={handleSubmit}
    >
      <div className="pb-3 mt-5">
        <h2 className="text-base/7 font-semibold text-gray-900">
          Create new task
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
          <div className="col-span-full">
            <label
              htmlFor="title"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Title
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder="Task title"
                  required
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="description"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Description
            </label>
            <div className="mt-2">
              <textarea
                name="description"
                id="description"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 resize-none"
                placeholder="Describe a task"
                required
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create
        </button>
      </div>
    </form>
  )
}
