import { Box } from '@chakra-ui/react'
import React from 'react'

type ContainerProps = {
  children: React.ReactNode
  usePadding?: boolean
}

export const Container = ({ children, usePadding = true }: ContainerProps) => {
  return (
    <Box
      maxWidth="1440px"
      px={usePadding ? ['16px', '16px', '32px', '64px'] : '0px'}
      sx={{
        margin: '0 auto',
      }}
    >
      {children}
    </Box>
  )
}
