// COMPONENT
import * as Checkbox from '@radix-ui/react-checkbox'

// STYLE
import { Check, Trash } from 'phosphor-react'

// TYPE
interface TaskProps {
  content: string
  checked: boolean
}

export function Task({ content }: TaskProps) {
  return (
    <article className='flex justify-between gap-8 items-start bg-neutral-200 dark:bg-neutral-800 p-4 rounded-xl border border-primary-400/50 dark:border-secondary-200/20'>
      <Checkbox.Root className='flex gap-3 items-start group text-start'>
        <div
          className='
          h-6 aspect-square flex items-center justify-center transition-all
          border border-neutral-400 dark:border-neutral-600 rounded-lg
          group-data-[state=checked]:bg-primary-400 group-data-[state=checked]:border-primary-400
          dark:group-data-[state=checked]:bg-secondary-200 dark:group-data-[state=checked]:border-secondary-200
        '
        >
          <Checkbox.Indicator>
            <Check weight='bold' className='text-white dark:text-neutral-900' />
          </Checkbox.Indicator>
        </div>
        <label className='leading-relaxed break-all'>{content}</label>
      </Checkbox.Root>
      <button
        className='leading-[0] hover:text-red-600 transition-colors'
        title='Delete task'
      >
        <Trash size={20} weight='bold' />
      </button>
    </article>
  )
}
