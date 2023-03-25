// COMPONENT
import { Header } from './components/Header'
import * as Checkbox from '@radix-ui/react-checkbox'

// STYLE
import { Check, Plus, Trash } from 'phosphor-react'

// Primary: 500, 400
// Secondary: 400, 300
export function App() {
  return (
    <div className='grid place-items-center gap-10'>
      <Header />

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

      <main className='w-full text-neutral-900 dark:text-white'>
        <div className='mx-auto max-w-4xl flex flex-col gap-4'>
          <header className='flex justify-between py-2 border-b-2 border-neutral-200 dark:border-neutral-800'>
            <p className='font-bold text-primary-400 dark:text-secondary-200'>
              Craeted tasks{' '}
              <span className='bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white px-2 py-1 rounded-xl'>
                0
              </span>
            </p>
            <p className='font-bold text-primary-700 dark:text-secondary-700'>
              Done{' '}
              <span className='bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white px-2 py-1 rounded-xl'>
                0 de 0
              </span>
            </p>
          </header>
          <section className='grid gap-2'>
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
                    <Check
                      weight='bold'
                      className='text-white dark:text-neutral-900'
                    />
                  </Checkbox.Indicator>
                </div>
                <label className='leading-relaxed break-all'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum, sequi? Ex optio, tempore ut mollitia nesciunt
                  consectetur debitis soluta nihil quod similique. Adipisci
                  dolor ut unde consequatur voluptatibus minima laboriosam odio
                  cum, earum saepe, labore molestias explicabo sapiente
                  recusandae nulla incidunt repudiandae, eaque culpa expedita a
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
          </section>
        </div>
      </main>
    </div>
  )
}
