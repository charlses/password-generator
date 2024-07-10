import { FaRegCopy } from 'react-icons/fa'

interface InputProps {
  value: string
  isCopied: boolean
  handleCopy: () => void
}

const Input = ({ value, isCopied, handleCopy }: InputProps) => {
  return (
    <div className='w-96 bg-muted flex items-center relative hover:text-foreground'>
      <input
        type='text'
        className='h-full px-4 py-2 text-lg font-semibold placeholder-gray-500 focus:outline-none bg-muted relative cursor-pointer '
        value={value}
        defaultValue={'blablabla'}
        onClick={handleCopy}
        disabled={isCopied}
      />
      <p
        className='flex items-center gap-2 absolute right-12 text-accent text-sm cursor-pointer'
        onClick={handleCopy}
      >
        {isCopied && 'COPIED'}
        <FaRegCopy className='h-4 w-4 hover:text-foreground font-semibold' />
      </p>
    </div>
  )
}

export default Input
