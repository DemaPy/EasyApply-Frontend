import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

interface Props {
  className?: string
}

export const FlexContainer = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      {children}
    </div>
  )
}