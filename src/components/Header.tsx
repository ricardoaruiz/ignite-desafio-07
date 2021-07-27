import React from 'react'
import { Flex, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Container } from './Container'

export const Header = () => {
  const router = useRouter()
  const isHome = router.asPath === '/'

  return (
    <Container>
      <Flex
        justifyContent="center"
        alignItems="center"
        h={['50px', '100px']}
        position="relative"
      >
        {!isHome && (
          <Image
            src="/images/chevron-left.svg"
            alt="voltar"
            position="absolute"
            w={['16px', '32px']}
            // left={['12px', '136px']}
            left={0}
            onClick={() => router.push('/')}
          />
        )}
        <Image src="/images/logo.svg" alt="logo" w={['81px', '184px']} />
      </Flex>
    </Container>
  )
}
