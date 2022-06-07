import { Box, Flex, Icon } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext)

    return (
        <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon 
                as={ FaArrowAltCircleLeft }
                onClick={() => scrollPrev()}
                fontSize='2x1'
                cursor='pointer'
                d={['none','none','none','block']}
            />
        </Flex>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext)

    return (
        <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon 
                as={ FaArrowAltCircleRight }
                onClick={() => scrollNext()}
                fontSize='2x1'
                cursor='pointer'
                d={['none','none','none','block']}
            />
        </Flex>
    )
}

export default function ImageScrollbar ({ data }) {

    return (
      <ScrollMenu LeftArrow={ LeftArrow } RightArrow={ RightArrow } style={{ overflow: 'hidden' }}>
          {data.map((item) => (
              <Box width='910px' overflow='hidden' p='1' key={ item.id } itemID={ item.id }>
                  <Image
                    placeholder='blur' 
                    blurDataURL={ item.url } 
                    src={ item.url } 
                    alt='property'
                    width={ 1000 } 
                    height={ 500 }
                    sizes='(max-width:500px) 100px, (max-width:1023px) 400px, 1000px'
                    />
              </Box>
          )) }
      </ScrollMenu>
    )
}