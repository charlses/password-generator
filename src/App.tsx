import { useEffect, useState } from 'react'
import Strength from '@/components/Strength'
import Input from '@/components/Input'
import GenerateBtn from '@/components/GenerateBtn'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { useGeneratePassword } from '@/hooks/useGeneratePassword'
import { Label } from '@/components/ui/label'

type StrengthLevel = 'Too Weak' | 'Weak' | 'Medium' | 'Strong'

const App = () => {
  const [value, setValue] = useState('')
  const [isCopied, setIsCopied] = useState(false)
  const [strength, setStrength] = useState<StrengthLevel>('Too Weak')

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
  }

  useEffect(() => {
    setValue(password)
    setStrength(evaluateStrength(password))
  }, [password])

  useEffect(() => {
    handleGenerate()
  }, [])

  useEffect(() => {
    handleGenerate()
  }, [generationData])

  const evaluateStrength = (password: string): StrengthLevel => {
    let strength: StrengthLevel = 'Too Weak'
    if (password.length >= 8) strength = 'Weak'
    if (
      password.length >= 12 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password)
    )
      strength = 'Medium'
    if (
      password.length >= 16 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(password)
    )
      strength = 'Strong'
    return strength
  }

  const handleSwitchChange = (key: string, value: boolean) => {
    setGenerationData((prev) => ({ ...prev, [key]: value }))
  }

  const handleSliderChange = (value: number[]) => {
    setGenerationData((prev) => ({ ...prev, length: value[0] }))
  }

  return (
    <section className='bg-background min-h-screen p-4'>
      <Input value={value} isCopied={isCopied} handleCopy={handleCopy} />
      <Strength level={strength} />

      <div className='my-4 w-96'>
        <div className='flex items-center justify-between mb-4'>
          <Label htmlFor='upper'>Include Uppercase Letters</Label>
          <Switch
            id='upper'
            checked={generationData.upper}
            onCheckedChange={(checked) => handleSwitchChange('upper', checked)}
          />
        </div>
        <div className='flex items-center justify-between mb-4'>
          <Label htmlFor='lower'>Include Lowercase Letters</Label>
          <Switch
            id='lower'
            checked={generationData.lower}
            onCheckedChange={(checked) => handleSwitchChange('lower', checked)}
          />
        </div>
        <div className='flex items-center justify-between mb-4'>
          <Label htmlFor='numbers'>Include Numbers</Label>
          <Switch
            id='numbers'
            checked={generationData.numbers}
            onCheckedChange={(checked) =>
              handleSwitchChange('numbers', checked)
            }
          />
        </div>
        <div className='flex items-center justify-between mb-4'>
          <Label htmlFor='special'>Include Special Characters</Label>
          <Switch
            id='special'
            checked={generationData.special}
            onCheckedChange={(checked) =>
              handleSwitchChange('special', checked)
            }
          />
        </div>
        <div className='flex items-center justify-between mb-4'>
          <Label htmlFor='length'>Password Length</Label>
          <Slider
            id='length'
            value={[generationData.length]}
            onValueChange={handleSliderChange}
            min={4}
            max={20}
          />
        </div>
      </div>

      <GenerateBtn onClick={handleGenerate} />
    </section>
  )
}

export default App
