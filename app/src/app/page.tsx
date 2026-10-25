'use client'

import Form from '@/components/Form'
import { useEffect, useState } from 'react'
import Toast from '@/components/Toast'
import { TaskType } from '@/helpers/Types'
import Task from '@/components/Task'
import { Filter } from '@/components/Filter'

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>()
  const [message, setMessage] = useState<string | null>('')
  const [messageSuccess, setMessageSuccess] = useState<boolean>(false)
  const [messageId, setMessageId] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  const [filter, setFilter] = useState<boolean | undefined>()
  const getTasks = async ({
    completed,
  }: { completed?: boolean } = {}) => {
    setLoading(true)

    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/tasks${
        completed === undefined ? '' : `?completed=${completed}`
      }`

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }

      const data = await response.json()

      setTasks(data.data)
      setFilter(completed)
    } catch (error) {
      console.error('Failed to fetch tasks:', error)
      showMessage('Failed to fetch tasks', false)
    } finally {
      setLoading(false)
    }
  }

  const showMessage = (message: string, status: boolean) => {
    setMessage(message)
    setMessageSuccess(status)
    setMessageId(Math.random())
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <main className="mx-auto w-75 mt-10 sm:w-xl">
      <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-center">
        To-do app
      </h1>
      <Form
        setMessage={showMessage}
        refetch={() => getTasks({ completed: filter })}
      />
      <Filter refetch={(completed) => getTasks({ completed })} />
      <div className="flex flex-col mt-5 gap-5">
        {loading ? (
          <p>Loading tasks...</p>
        ) : tasks?.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
          tasks?.map((task: TaskType) => (
            <Task
              key={task.id}
              task={task}
              refetch={() => getTasks({ completed: filter })}
              setMessage={showMessage}
            />
          ))
        )}
      </div>
      <Toast message={message} success={messageSuccess} key={messageId} />
    </main>
  )
}
