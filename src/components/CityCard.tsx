import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

type CityCardProp = {
  name: string
  country: string
  cityImage: string
  flagImg: string
}

export const CityCard = ({
  name,
  country,
  cityImage,
  flagImg,
}: CityCardProp) => {
  return (
    <Box
      w="256px"
      h="279px"
      border="1px"
      borderRadius="4px"
      borderColor="yellow.400"
    >
      <Image src={cityImage} alt={name} />
      <Flex px="24px" justifyContent="space-between" mt="18px">
        <Box>
          <Text fontSize="20px">{name}</Text>
          <Text fontSize="16px" mt="12px">
            {country}
          </Text>
        </Box>
        <Image src={flagImg} alt="england flag" alignSelf="center" />
      </Flex>
    </Box>
  )
}
