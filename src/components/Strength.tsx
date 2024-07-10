import React from 'react'

interface StrengthProps {
  level: 'Too Weak' | 'Weak' | 'Medium' | 'Strong'
}

const Strength: React.FC<StrengthProps> = ({ level }) => {
  const strengthLevels = {
    'Too Weak': 1,
    Weak: 2,
    Medium: 3,
    Strong: 4
  }

  const getColor = (index: number) => {
    const strength = strengthLevels[level]
    if (index < strength) {
      switch (level) {
        case 'Too Weak':
          return 'bg-destructive'
        case 'Weak':
          return 'bg-orange'
        case 'Medium':
          return 'bg-yellow'
        case 'Strong':
          return 'bg-accent'
        default:
          return ''
      }
    }
    return ''
  }

  return (
    <div className='bg-muted w-96'>
      <div className='h-12 flex items-center justify-between bg-background px-4 py-6'>
        <p className='text-muted-foreground'>STRENGTH</p>
        <div className='flex items-center gap-3'>
          <p className='font-semibold'>{level.toUpperCase()}</p>
          <div className='flex items-center gap-1'>
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className={`h-6 w-2 border border-foreground ${getColor(
                  index
                )}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Strength
