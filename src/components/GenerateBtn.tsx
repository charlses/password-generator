import { FaArrowRight } from 'react-icons/fa'

interface GenerateBtnProps {
  onClick: () => void
}

const GenerateBtn = ({ onClick }: GenerateBtnProps) => {
  return (
    <button
      className='flex items-center justify-center gap-4 bg-accent border-2 text-muted border-accent hover:bg-muted hover:text-accent w-80 p-4 '
      onClick={onClick}
    >
      <p className='text-[18px] font-bold'>GENERATE</p>
      <FaArrowRight className='h-[12px] w-[11px]' />
    </button>
  )
}

export default GenerateBtn
