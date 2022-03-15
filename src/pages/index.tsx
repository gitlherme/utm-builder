import type { NextPage } from 'next'
import { UtmForm } from '../components/UtmForm'
import { Heading, Flex, Textarea, Button } from '@chakra-ui/react'
import { useState } from 'react'

const Home: NextPage = () => {
  const [url, setUrl] = useState('')
  return (
    <Flex>
      <Flex w="60%" h="100vh" direction="column" bg="pink.900">
        <Heading as="h1" color="whiteAlpha.900" textAlign="center" p="8">
          Gerador de Links Rastreáveis
        </Heading>
      </Flex>
      <Flex w="40%" h="100vh" justify="center" direction="column" bg="gray.400" p="16">
        <Heading as="h2" mb="4">URL gerado da campanha</Heading>
        <Textarea mb="4" h="3rem" disabled bg="white" value={url} id="result" />
        <Button>Copy URL</Button>
      </Flex>
    </Flex>
  )
}

export default Home
