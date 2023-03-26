// DEPENDENCY
import clsx from 'clsx'

// COMPONENT
import * as Checkbox from '@radix-ui/react-checkbox'

// STYLE
import { Check, Trash } from 'phosphor-react'

interface TaskProps {
  id: number
  content: string
  checked: boolean
  onToggleTask: (id: number) => void
}

export function Task({ id, content, checked, onToggleTask }: TaskProps) {
  return (
    <article
      className={clsx(
        `flex justify-between gap-8 items-start bg-neutral-200 dark:bg-neutral-800 p-4 rounded-xl border border-primary-400/50 dark:border-secondary-200/20`,
        {
          'border-primary-500/50 dark:border-secondary-700/20 opacity-60':
            checked,
        }
      )}
    >
      <Checkbox.Root
        checked={checked}
        onCheckedChange={() => onToggleTask(id)}
        className='flex-1 flex gap-3 items-start group text-start'
      >
        <div
          className={clsx(
            `
              h-6 aspect-square flex items-center justify-center transition-all
              border border-neutral-400 dark:border-neutral-600 rounded-lg               
            `,
            {
              'bg-primary-400 border-primary-400 dark:bg-secondary-200 dark:border-secondary-200':
                checked,
            }
          )}
        >
          <Checkbox.Indicator>
            <Check weight='bold' className='text-white dark:text-neutral-900' />
          </Checkbox.Indicator>
        </div>
        <label
          className={clsx(`leading-relaxed break-all cursor-pointer`, {
            'line-through': checked,
          })}
        >
          {content}
        </label>
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
