// DEPENDENCY
import { ChangeEvent, FormEvent } from 'react'

// STYLE
import { Plus } from 'phosphor-react'

// TYPE
interface NewTaskFormProps {
  taskText: string
  onTaskTextChange: (event: ChangeEvent<HTMLInputElement>) => void
  onCreateNewTask: (event: FormEvent) => void
}

export function NewTaskForm({
  taskText,
  onTaskTextChange,
  onCreateNewTask,
}: NewTaskFormProps) {
  return (
    <form onSubmit={onCreateNewTask}>
      <div className='flex'>
        <input
          autoFocus
          type='text'
          value={taskText}
          onChange={onTaskTextChange}
          className='
                  w-full bg-transparent p-2
                  text-neutral-800 dark:text-white
                  border-y-2 border-l-2 border-primary-400 dark:border-secondary-200 rounded-tl-2xl rounded-bl-2xl
                  focus-visible:outline-none focus:ring ring-primary-300 dark:ring-secondary-100
                  focus:ring-offset-2 ring-offset-white dark:ring-offset-neutral-900
                '
        />
        <button
          title='Create task'
          className='
                  text-white dark:text-neutral-900 font-medium
                  inline-flex gap-1 items-center py-2 px-4 transition-colors
                  bg-primary-400 dark:bg-secondary-200
                  border-y-2 border-r-2 border-primary-400 dark:border-secondary-200 rounded-tr-2xl rounded-br-2xl
                  hover:bg-primary-300 hover:border-primary-300 dark:hover:bg-secondary-100 dark:hover:border-secondary-100
                  focus-visible:outline-none focus:ring ring-primary-300 dark:ring-secondary-100
                  focus:ring-offset-2 ring-offset-white dark:ring-offset-neutral-900
                '
        >
          <Plus size={20} weight='bold' />
        </button>
      </div>
    </form>
  )
}
