import Link from 'next/link';
import Image from 'next/image';
import { Flex, Select, Box, Text, Input, Spinner,TagLabel, Icon, Button ,FormLabel,Stack} from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import DefaultImage from '../assets/images/house.jpg';


 export const Opt = [
    { id: 1, label: "Chihuahua" },
    { id: 2, label: "Bulldog" },
    { id: 3, label: "Dachshund" },
    { id: 4, label: "Akita" }
  ];
const Submitproof = () => (
 

<Box maxWidth='1000px' margin='auto' p='4'>
  <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
      <Box> <form>
  <label> Wallet Address 
         <Input
              placeholder='Type Here'
            name='addr'
              w='300px'
              focusBorderColor='gray.300'
          
            />
            </label>
            <FormLabel>
        Recycle Type 
      </FormLabel>
      {/* <Select
     
        name="colors"
        options={[
          {
            label: "I have the outline style",
            value: "i-am-outlined",
            variant: "outline", // The option variant overrides the global
          },
          {
            label: "I fallback to the global `solid`",
            value: "i-am-solid",
          },
        ]}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
        size="sm"
      />  */}
      <Stack spacing={3}>
  <Select variant="outline"  name='typerecycle' placeholder="Select Recycle Type"  required> 
  
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
            name='image'
            accept='.jpg, .jpeg, .png'
              w='300px'
              focusBorderColor='gray.300'
           required
            />

       
<Button
  onClick={() => {
    if (addr && typerecycle && image) {
      // mint()
    }
  }}>

Submit
</Button>



    </form>  
     </Box>       
    </Flex>


</Box>

);

export default Submitproof;