import React from 'react';
import {
  VStack,
  Text,
  Box,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';

import PatternDivider from '../../images/pattern-divider-mobile.svg';
import Dice from '../../images/icon-dice.svg';

const AdviceCard = ({ quote, generateQuote }) => {
  const NeonGreen = 'hsl(150, 100%, 66%)';
  const cardBg = useColorModeValue('gray.200', 'hsl(218, 23%, 16%)');

  return (
    <VStack
      bg={cardBg}
      gap="1rem"
      p="8"
      borderRadius={'xl'}
      shadow="lg"
      position="relative"
      pb={'16'}
      maxW={{base: '300px', sm: '320px', md: '370px', lg: '450px'}}
    >
      <Text
        fontSize="small"
        fontWeight={'bold'}
        textTransform={'uppercase'}
        letterSpacing="1px"
        color={NeonGreen}
      >
        {`Advice #${quote.id}`}
      </Text>
      <Text w="100%" align={'center'} fontWeight="bold" fontSize={'28px'}>
        {`"${quote.advice}"`}
      </Text>
      <Box>
        <img src={PatternDivider} alt="Divider" />
      </Box>
      <IconButton
        bg={NeonGreen}
        colorScheme="green"
        position="absolute"
        bottom={'0'}
        transform="translateY( 50%)"
        shadow={'md'}
        isRound="true"
        onClick={() => generateQuote()}
        size="lg"
        p={1}
      >
        <img src={Dice} alt="" />
      </IconButton>
    </VStack>
  );
};

export default AdviceCard;
