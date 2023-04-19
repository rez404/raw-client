import { Box } from '@chakra-ui/react'
import React from 'react'

const Aurora = ({ zIndex, color, pos, size }) => {
  return (
    <Box
    pointerEvents={"none"}
    width={size.width}
    height={size.height}
    position="absolute"
    top={pos.top}
    left={pos.left}
    transform="translate(-50%, -50%)"
    backgroundImage={`radial-gradient(ellipse at center, ${color}, transparent 60%)`}
    zIndex={zIndex || -1}
  ></Box>
  )
}

export default Aurora