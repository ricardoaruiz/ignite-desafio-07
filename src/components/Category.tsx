import React from 'react'
import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react'

type CategoryProp = {
  image: string
  text: string
}

export const Category = ({ image, text }: CategoryProp) => {
  const isDesktop = useBreakpointValue({
    lg: 'true',
  })

  return isDesktop ? (
    <Flex
      height="145px"
      minW="160px"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Image src={image} alt="cocktail" width="85px" />
      <Text fontSize="2xl" fontWeight="medium" mt={6}>
        {text}
      </Text>
    </Flex>
  ) : (
    <Flex alignItems="center">
      <Box
        as="span"
        width="8px"
        height="8px"
        borderRadius="50%"
        bg="yellow.500"
        mr="8px"
      ></Box>
      <Text fontSize="lg" fontWeight="medium">
        {text}
      </Text>
    </Flex>
  )
}
