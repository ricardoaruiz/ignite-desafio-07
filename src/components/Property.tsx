import React from 'react'
import { Box, Text } from '@chakra-ui/react'

type PropertyProps = {
  value: string
  text: string
}

export const Property = ({ value, text }: PropertyProps) => {
  return (
    <Box>
      <Text
        fontSize={['24px', '24px', '36px', '48px']}
        fontWeight="bold"
        color="yellow.300"
      >
        {value}
      </Text>
      <Text fontSize={['16px', '18px', '20px', '24px']} fontWeight="bold">
        {text}
      </Text>
    </Box>
  )
}
