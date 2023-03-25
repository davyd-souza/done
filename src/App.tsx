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
    </div>
  )
}
