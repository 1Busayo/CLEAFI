import Link from 'next/link';
import Image from 'next/image';
import { Flex, Select, Box, Text, Input, Spinner,TagLabel, Icon, Button ,FormLabel,Stack} from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
// import millify from 'millify';

// import DefaultImage from '../assets/images/house.jpg';


const InitialState = ({
 acc,
  addr,
  setAddr,
  typerecycle,
  setTyperecycle,
  image,
  setImage,
  desc,
  setDesc,
  mint,
}) => {

 return (

<Box maxWidth='1000px' margin='auto' p='4'>
<Flex
        // onClick={() => setSearchFilters(!searchFilters)}
        cursor='pointer'
        bg='gray.100'
        borderBottom='1px'
        borderColor='gray.200'
        p='2'
        fontWeight='black'
        fontSize='lg'
        justifyContent='center'
        alignItems='center'
      >
        <Text>Convert Recycling into an NFT</Text>
       
      </Flex>
  <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
      <Box> <form>
      <FormLabel> Wallet Address  </FormLabel>
         <Input
              placeholder='Type Here'
            name='addr'
            value={acc}
              w='300px'
              readOnly
                onInput={(e) => setAddr(e.target.value)}
           
              focusBorderColor='gray.300'
             
            />

<FormLabel> Description  </FormLabel>
         <Input
              placeholder='Type Here'
           
              w='300px'
             name='desc'
              focusBorderColor='gray.300'
              onChange={(e) => setDesc(e.target.value)} 
            />
           
            <FormLabel>
        Recycle Type 
      </FormLabel>
     
      <Stack spacing={3}>
  <Select variant="outline" name='typerecycle' placeholder="Select Recycle Type" onChange={(e) => setTyperecycle(e.target.value)}  required> 
  
   <option value="Glass">Glass</option>
  <option value="Paper">Paper</option>
  <option value="Metal">Metal</option>
  <option value="Plastic">Plastic</option>
  <option value="Electronic">Electronic</option>
  
  </Select>


</Stack>

           
<FormLabel>       Select File       </FormLabel>
             {/* <input
              type='file'
              id='image-upload'
              accept='.jpg, .jpeg, .png'
              // className={style.fileInput}
              placeholder='Image URL'
              onChange={(e) => setProfileImage(e.target.files[0])}
            /> */}
        <Input
            type='file'
              placeholder='Type Here'
              border='1px' borderColor='gray.200' marginTop='2'
              onChange={(e) => setImage(e.target.files[0])}
            accept='.jpg, .jpeg, .png'
              w='300px'
              focusBorderColor='gray.300'
           required
            />

       
<Button
  onClick={() => {

    if (acc && typerecycle && image && desc) {
       mint()
    }
  }}>

Submit
</Button>



    </form>  
     </Box>       
    </Flex>


</Box>
 )
}

export default InitialState;