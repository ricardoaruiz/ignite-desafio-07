import React from 'react'
import {
  Box,
  Center,
  Divider,
  HStack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

import { Banner } from '../components/Banner'
import { Category } from '../components/Category'
import { Container } from '../components/Container'
import { Slider } from '../components/Slider'

const images = [
  {
    url: 'https://source.unsplash.com/user/erondu/1600x900',
    title: 'Imagem 01',
    description: 'Description Imagem 01',
  },
  {
    url: 'https://source.unsplash.com/user/erondu/1600x900',
    title: 'Imagem 02',
    description: 'Description Imagem 02',
  },
  {
    url: 'https://source.unsplash.com/user/erondu/1600x900',
    title: 'Imagem 03',
    description: 'Description Imagem 03',
  },
  {
    url: 'https://source.unsplash.com/user/erondu/1600x900',
    title: 'Imagem 04',
    description: 'Description Imagem 04',
  },
]

export default function Home() {
  const isDesktop = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
  })

  return (
    <>
      <Banner />

      <Container>
        <HStack
          justifyContent={isDesktop ? 'space-between' : 'space-around'}
          flexWrap="wrap"
          spacing={!isDesktop ? '40px' : '0'}
          mt={['36px', '36px', '36px', '90px']}
        >
          <Category image="/images/cocktail.svg" text="vida noturna" />
          <Category image="/images/surf.svg" text="praia" />
          <Category image="/images/building.svg" text="moderno" />
          <Category image="/images/museum.svg" text="clássico" />
          <Category image="/images/earth.svg" text="e mais..." />
        </HStack>

        <Center>
          <Divider
            w={['60px', '90px']}
            mt={['36px', '36px', '36px', '80px']}
            mb={['24px', '24px', '24px', '52px']}
            colorScheme="blue"
          />
        </Center>

        <Text
          fontSize={['xl', 'xl', 'xl', '4xl']}
          w={['297px', '297px', '297px', '839px']}
          textAlign="center"
          sx={{ margin: '0 auto' }}
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>
      </Container>

      <Container usePadding={false}>
        <Box mt="52px" mb="52px">
          <Slider images={images} />
        </Box>
      </Container>
    </>
  )
}
