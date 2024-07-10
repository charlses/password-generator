import { useState, useMemo } from 'react'

interface GeneratePasswordArgs {
  upper: boolean
  lower: boolean
  numbers: boolean
  special: boolean
  length: number
}

const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerChars = 'abcdefghijklmnopqrstuvwxyz'
const numberChars = '0123456789'
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?'

export const useGeneratePassword = (initialArgs?: GeneratePasswordArgs) => {
  const [password, setPassword] = useState('')

  const generatePassword = ({
    upper,
    lower,
    numbers,
    special,
    length
  }: GeneratePasswordArgs) => {
    const allChars = [
      upper && upperChars,
      lower && lowerChars,
      numbers && numberChars,
      special && specialChars
    ]
      .filter(Boolean)
      .join('')

    if (!allChars) {
      setPassword('')
      return
    }

    const generatedPassword = Array.from({ length }, () => {
      const randomIndex =
        crypto.getRandomValues(new Uint32Array(1))[0] % allChars.length
      return allChars[randomIndex]
    }).join('')

    setPassword(generatedPassword)
  }

  // Generate initial password if initialArgs are provided
  useMemo(() => {
    if (initialArgs) {
      generatePassword(initialArgs)
    }
  }, [initialArgs])

  return { generatePassword, password }
}
