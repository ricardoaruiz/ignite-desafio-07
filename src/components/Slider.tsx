import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import { Text, Flex, Image } from '@chakra-ui/react'

type Image = {
  url: string
  title: string
  description: string
}

type SliderProps = {
  images: Image[]
}

SwiperCore.use([Pagination, Navigation])
export const Slider = ({ images }: SliderProps) => {
  return (
    <Swiper navigation={true} pagination={true}>
      {images.map(({ url, title, description }) => (
        <SwiperSlide key={url}>
          <Flex
            w="100%"
            h="100%"
            position="relative"
            direction="column"
            justifyContent="center"
            alignItems="center"
            zIndex="0"
            sx={{
              backgroundImage: url,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          >
            <Text fontSize={['xl', '2xl', '4xl']} color="white" zIndex="1">
              {title}
            </Text>
            <Text fontSize={['lg', 'xl', '2xl']} color="white" zIndex="1">
              {description}
            </Text>
          </Flex>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
