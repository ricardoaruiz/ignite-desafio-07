import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      900: '#181B23',
      800: '#1F2029',
      700: '#353646',
      600: '#4B4D63',
      500: '#616480',
      400: '#797D9A',
      300: '#9699B0',
      200: '#B3B5C6',
      100: '#D1D2DC',
      50: '#EEEEF2',
    },
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.600',

        '.swiper-container': {
          width: '100%',
          height: '350px',
        },

        '.swiper-slide': {
          textAlign: 'center',
          fontSize: '18px',
          background: '#fff',

          /* Center slide text vertically */
          display: 'flex',
          '-webkit-box-pack': 'center',
          '-ms-flex-pack': 'center',
          '-webkit-justify-content': 'center',
          'justify-content': 'center',
          '-webkit-box-align': 'center',
          '-ms-flex-align': 'center',
          '-webkit-align-items': 'center',
          'align-items': 'center',
        },

        '.swiper-slide img': {
          display: 'block',
          width: '100%',
          height: '100%',
          'object-fit': 'cover',
        },

        '.swiper-pagination-bullet-active': {
          background: 'yellow.300',
        },
        '.swiper-button-next, .swiper-button-prev': {
          color: 'yellow.300',

          '@media (max-width: 680px)': {
            display: 'none',
          },
        },
        '.swiper-button-disabled': {
          color: 'yellow.300',
          filter: 'brightnes(0.8)',
        },
      },
    },
  },
})
