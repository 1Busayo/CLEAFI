import Link from 'next/link';
import Image from 'next/image';
import { Flex, Select, Box, Text, Input, Spinner,TagLabel, Icon, Button ,FormLabel,Stack} from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
// import millify from 'millify';

const InitialState = ({
    addrto,
    setAddrto,
    amount,
    setAmount,
    sendbtn,
}) => {
  

  return (

    <Box maxWidth='1000px' margin='auto' p='4'>
      <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
          <Box> <form>
          <FormLabel> Wallet Address  </FormLabel>
             <Input
                  placeholder='Type Here'
                name='addrto'
           
                  w='300px'
                
                  
                  focusBorderColor='gray.300'
                   value={addrto}
                  onChange={(e) => setAddrto(e.target.value)}
                />
    
    <FormLabel> Amount  </FormLabel>
             <Input
                  type='number'
                     placeholder='Amount'
               
                  w='300px'
                 name='desc'
                  focusBorderColor='gray.300'
                  onChange={(e) => setAmount(e.target.value)}
                />
                  
    
               

    
           
    <Button
       onClick={() => {
      setAddrto(addrto)
     
      
        if (addrto  && amount) {
          sendbtn()
        }
      }} >
    
    Donate
    </Button>
    
    
    
        </form>  
         </Box>       
        </Flex>
    
    
    </Box>
     )


}

export default InitialState