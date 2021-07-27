import React from 'react'
import { Flex, Grid, Text, useBreakpointValue } from '@chakra-ui/react'
import { Container } from '../components/Container'
import { CityCard } from '../components/CityCard'
import { Property } from '../components/Property'

const Continente = () => {
  const isWideMode = useBreakpointValue({
    md: true,
  })

  return (
    <>
      <Flex
        height={['150px', '300px', '400px', '500px']}
        justifyContent={isWideMode ? 'flex-start' : 'center'}
        alignItems={isWideMode ? 'flex-end' : 'center'}
        sx={{
          backgroundImage: 'https://source.unsplash.com/user/erondu/1600x900',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Text
          fontSize={['28px', '32px', '36px', '48px']}
          mb={isWideMode ? '50px' : '0px'}
          pl={isWideMode ? '140px' : '0px'}
          color="white"
        >
          Europa
        </Text>
      </Flex>

      <Container>
        <Grid
          templateColumns={isWideMode ? 'repeat(2, 1fr)' : '1fr'}
          gap={isWideMode ? '70px' : '0'}
          mt={isWideMode ? '80px' : '0px'}
        >
          <Text mt={!isWideMode ? '20px' : '0px'} textAlign="justify">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={6}
            mt={!isWideMode ? '20px' : 0}
          >
            <Property value="50" text="países" />
            <Property value="60" text="línguas" />
            <Property value="24" text="cidades + 100" />
          </Grid>
        </Grid>

        <Text
          fontSize={['24px', '26px', '28px', '36px']}
          mt={['32px', '42px', '62px', '80px']}
          mb={['20px', '20px', '30px', '40px']}
        >
          Cidades +100
        </Text>
        <Grid
          gridTemplateColumns="repeat( auto-fill, minmax(256px, 1fr) )"
          gap="45px"
          justifyItems="center"
        >
          <CityCard
            name="Londres"
            country="Reino Unido"
            cityImage="https://source.unsplash.com/user/erondu/1600x900"
            flagImg="/images/england-circle.svg"
          />
          <CityCard
            name="Paris"
            country="França"
            cityImage="https://source.unsplash.com/user/erondu/1600x900"
            flagImg="/images/france-circle.svg"
          />
          <CityCard
            name="Roma"
            country="Itália"
            cityImage="https://source.unsplash.com/user/erondu/1600x900"
            flagImg="/images/italy-circle.svg"
          />
          <CityCard
            name="Praga"
            country="República Tcheca"
            cityImage="https://source.unsplash.com/user/erondu/1600x900"
            flagImg="/images/repcheck-circle.svg"
          />
          <CityCard
            name="Amsterdan"
            country="Holanda"
            cityImage="https://source.unsplash.com/user/erondu/1600x900"
            flagImg="/images/holand-circle.svg"
          />
        </Grid>
      </Container>
    </>
  )
}

export default Continente
