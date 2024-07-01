import { useState } from 'react'

interface GeneratePasswordArgs {
  upper: boolean
  lower: boolean
  numbers: boolean
  special: boolean
  length: number
}

export const useGeneratePassword = () => {
  const [password, setPassword] = useState('')

  const generatePassword = ({
    upper,
    lower,
    numbers,
    special,
    length
  }: GeneratePasswordArgs) => {
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz'
    const numberChars = '0123456789'
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?'

    let allChars = ''
    if (upper) allChars += upperChars
    if (lower) allChars += lowerChars
    if (numbers) allChars += numberChars
    if (special) allChars += specialChars

    if (allChars.length === 0) {
      setPassword('')
      return
    }

    let generatedPassword = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length)
      generatedPassword += allChars[randomIndex]
    }

    setPassword(generatedPassword)
  }

  return { generatePassword, password }
}
