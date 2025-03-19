import { PropsWithChildren } from 'react'
import { FlexContainer } from './FlexContainer'


export const ScrollableContainer = ({ children }: PropsWithChildren) => {
  return (
    <FlexContainer className='h-[260px] overflow-y-auto rounded-md flex-col items-stretch gap-4 justify-start'>
        {children}
    </FlexContainer>
  )
}
