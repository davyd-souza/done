// COMPONENT
import * as Checkbox from '@radix-ui/react-checkbox'

// STYLE
import { Check, Trash } from 'phosphor-react'

export function Task() {
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
        <label className='leading-relaxed break-all'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sequi?
          Ex optio, tempore ut mollitia nesciunt consectetur debitis soluta
          nihil quod similique. Adipisci dolor ut unde consequatur voluptatibus
          minima laboriosam odio cum, earum saepe, labore molestias explicabo
          sapiente recusandae nulla incidunt repudiandae, eaque culpa expedita a
          excepturi. Animi, suscipit debitis?
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
