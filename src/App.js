import React, { useEffect, useState } from 'react';
import {
  IconButton,
  VStack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { AdviceCard } from './components';
import { FaSun, FaMoon } from 'react-icons/fa';

const App = () => {
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue('dark', 'light');

  const API_URL = 'https://api.adviceslip.com/advice';

  const [slip, setSlip] = useState({
    id: '117',
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  });

  const generateQuote = async () => {
    const res = await fetch(API_URL).catch(err => console.log(err));
    const data = await res.json();

    setSlip(data.slip);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(API_URL).catch(err => console.log(err));
    const data = await res.json();

    setSlip(data.slip);
    }
    fetchData()
  }, []);

  return (
    <VStack minH="100vh" p="4" alignItems="center" justifyContent={'center'}>
      <IconButton
        icon={icon === 'dark' ? <FaMoon /> : <FaSun />}
        isRound="true"
        position={'absolute'}
        top="1rem"
        right="1rem"
        onClick={toggleColorMode}
        size="lg"
        aria-label={icon}
      />
      <AdviceCard quote={slip} generateQuote={generateQuote} />
      <Text position={'absolute'} bottom="1" fontWeight={'bold'}>
        Made in <span>🇳🇬</span> by{' '}
        <a
          href="https://folarinlawal.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Folarin Lawal
        </a>{' '}
      </Text>
    </VStack>
  );
};

export default App;
