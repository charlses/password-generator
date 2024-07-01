import Strength from '@/components/Strength'
import Input from '@/components/Input'
import { useState } from 'react'
import GenerateBtn from '@/components/GenerateBtn'
import { useGeneratePassword } from './hooks/useGeneratePassword'

const App = () => {
  const [value, setValue] = useState('')
  const [isCopied, setIsCopied] = useState(false)

  const [generationData, setGenerationData] = useState({
    upper: true,
    lower: true,
    numbers: true,
    special: false,
    length: 10
  })

  const { generatePassword, password } = useGeneratePassword()

  const handleCopy = () => {
    setIsCopied(true)
    navigator.clipboard.writeText(value)
    setTimeout(() => setIsCopied(false), 1500)
  }

  const handleGenerate = () => {
    generatePassword({ ...generationData })
    setValue(password)
    console.log(password)
  }

  return (
    <section className='bg-background min-h-screen'>
      <Input value={value} isCopied={isCopied} handleCopy={handleCopy} />
      <Strength />
      <GenerateBtn onClick={handleGenerate} />
    </section>
  )
}

export default App
