// DEPENDENCY
import { ChangeEvent, FormEvent, useState } from 'react'

// COMPONENT
import { Header } from './components/Header'
import { NewTaskForm } from './components/NewTaskForm'
import { Task } from './components/Task'

// TYPE
export type ITask = Readonly<{
  id: string
  checked: boolean
  content: string
}>

export function App() {
  const [taskText, setTaskText] = useState('')
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: '9fb29b0d-c0f0-4f9f-84e4-f111f0ab3303',
      checked: true,
      content: 'Limpar a casa',
    },
    {
      id: '6e526cfe-b129-4fb8-a3de-3805c4aa5ee7',
      checked: false,
      content: 'Formatar meu computador',
    },
    {
      id: '60688a1f-0359-43e7-a12d-5b65e285f2fc',
      checked: false,
      content: 'Estudar React',
    },
    {
      id: '8923388e-0c9b-4cc9-8472-112cc9d387c7',
      checked: false,
      content: 'Ir para a academia',
    },
  ])

  const handleTaskTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value as string)
  }

  const handleCreateNewTask = (e: FormEvent) => {
    e.preventDefault()

    setTasks((state) => [
      ...state,
      { id: crypto.randomUUID(), content: taskText, checked: false },
    ])
  }

  const handleToggleTask = (id: string) => {
    const newTaskCheckedList = tasks.map((task) => {
      if (task.id === id) {
        return { id, content: task.content, checked: !task.checked }
      }
      return task
    })

    setTasks(newTaskCheckedList)
  }

  const handleDeleteTask = (id: string) => {
    const newTaskListWithoutDeleted = tasks.filter((task) => task.id !== id)
    setTasks(newTaskListWithoutDeleted)
  }

  return (
    <div className='grid place-items-center gap-10'>
      <Header />

      <section className='w-full'>
        <div className='mx-auto max-w-4xl px-4'>
          <NewTaskForm
            taskText={taskText}
            onTaskTextChange={handleTaskTextChange}
            onCreateNewTask={handleCreateNewTask}
          />
        </div>
      </section>

      <main className='w-full text-neutral-900 dark:text-white'>
        <div className='mx-auto max-w-4xl flex flex-col gap-4 px-4'>
          <header className='flex justify-between py-2 border-b-2 border-neutral-200 dark:border-neutral-800'>
            <p className='font-bold text-primary-400 dark:text-secondary-200'>
              Created tasks{' '}
              <span className='bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white px-2 py-1 rounded-xl'>
                {tasks.length}
              </span>
            </p>
            <p className='font-bold text-primary-500 dark:text-secondary-700'>
              Done{' '}
              <span className='bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white px-2 py-1 rounded-xl'>
                {tasks.filter((task) => task.checked === true).length} of{' '}
                {tasks.length}
              </span>
            </p>
          </header>

          <section className='grid gap-2 pb-8'>
            {tasks.map(({ id, checked, content }) => (
              <Task
                key={id}
                id={id}
                content={content}
                checked={checked}
                onToggleTask={handleToggleTask}
                onDeleteTask={handleDeleteTask}
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}
