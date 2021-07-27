import React from 'react'
import {
  Flex,
  Heading,
  Text,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react'

export const Banner = () => {
  const showAirplane = useBreakpointValue({
    xl: true,
  })

  return (
    <Flex
      position="relative"
      direction="column"
      alignItems="flex-start"
      justifyContent="center"
      px={['16px', '48px', '140px']}
      w="100%"
      h={['163px', '335px']}
      sx={{
        backgroundImage: '/images/banner-background.svg',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Heading
        color="white"
        fontSize={['xl', '4xl']}
        lineHeight={['3xl', '6xl']}
        w={['238px', '436px']}
        fontWeight="medium"
      >
        5 Continentes, infinitas possibilidades.
      </Heading>

      <Text
        color="gray.100"
        fontSize={['md', 'xl']}
        lineHeight={['xl', '3xl']}
        w={['300px', '430px', '524px']}
        mt={['8px', '20px']}
      >
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
      </Text>

      {showAirplane && (
        <Image
          src="/images/airplane.svg"
          alt="avião"
          position="absolute"
          right="140px"
          top="110px"
        />
      )}
    </Flex>
  )
}
