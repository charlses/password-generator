const Strength = () => {
  return (
    <div className='bg-muted max-w-96 p-6'>
      <div className='h-12 flex items-center justify-between bg-background px-4'>
        <p className='text-muted-foreground'>STRENGTH</p>
        <div className='flex items-center gap-3'>
          <p className='font-semibold'>TOO WEAK!</p>
          <div className='flex items-center gap-1'>
            <div className='h-6 w-2 border border-foreground bg-destructive'></div>
            <div className='h-6 w-2 border border-foreground'></div>
            <div className='h-6 w-2 border border-foreground'></div>
            <div className='h-6 w-2 border border-foreground'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Strength
