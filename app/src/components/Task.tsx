import Checkbox from '@/components/Checkbox'
import CloseButton from '@/components/CloseButton'
import { TaskType } from '@/helpers/Types'

interface TaskCardType {
  task: TaskType
  refetch: () => void
  setMessage: (message: string, success: boolean) => void
}

export default function Task(props: TaskCardType) {
  const updateStatus = async (value: boolean) => {
    const updatedTask = {
      ...props.task,
      completed: value,
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tasks/${props.task.id}`,
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedTask),
        }
      )

      if (!response.ok) {
        throw new Error('Failed to update task')
      }

      props.refetch()
    } catch (error) {
      console.error('Failed to update task:', error)
      props.setMessage('Failed to update task', false)
    }
  }

  const deleteTask = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tasks/${props.task.id}`,
        {
          method: 'DELETE',
        }
      )

      if (!response.ok) {
        throw new Error(`Failed to delete task: ${response.status}`)
      }

      props.refetch()
    } catch (error) {
      console.error('Failed to delete task:', error)
      props.setMessage('Failed to delete task', false)
    }
  }

  return (
    <div className="block p-6 pt-3 pl-10 bg-white border border-gray-200 rounded-lg shadow-sm w-l relative">
      <Checkbox
        checked={props.task.completed as boolean}
        setValue={updateStatus}
      />
      <CloseButton delete={deleteTask} />
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {props.task.title}
      </h5>
      <p className="font-normal text-gray-700">{props.task.description}</p>
    </div>
  )
}
