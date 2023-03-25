// STYLE
import { Plus } from 'phosphor-react'

// Primary: 500, 400
// Secondary: 400, 300
export function App() {
  return (
    <div className='grid place-items-center gap-10'>
      <header className='bg-neutral-200 dark:bg-neutral-800 w-full'>
        <div className='mx-auto max-w-4xl'>
          <h1 className='font-black text-primary-400 dark:text-secondary-200 text-3xl tracking-[1rem] flex justify-center p-8 select-none'>
            DONE
          </h1>
        </div>
      </header>
      <section className='w-full'>
        <div className='mx-auto max-w-4xl'>
          <form>
            <div className='flex'>
              <input
                autoFocus
                type='text'
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
        </div>
      </section>
    </div>
  )
}
