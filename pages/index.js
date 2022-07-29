import { useContext } from 'react'
import {Web3Context} from '../components/context/Web3Context'
import Link from 'next/link';
import Image from 'next/image';

import { Flex, Box, Text, Button } from '@chakra-ui/react';

import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Main from './Main';

export const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl  , buttonText2 , func,}) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image src={imageUrl} width={500} height={300} />
    <Box p='5'>
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
      <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br />{desc2}</Text>
      
      {!buttonText ? '' :
      <Button fontSize='xl' bg="blue.300" color="white">

        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>
      }
      {!buttonText2 ? '' :
      <Button onClick={() => func()}fontSize='xl' bg="blue.300" color="white">
 <a>{buttonText2}</a>
      </Button>
       }
    </Box>
  </Flex>
);

export const Bannerloggedin = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl  , buttonText2 , func,linkName2}) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image src={imageUrl} width={500} height={300} />
    <Box p='5'>
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
      <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br />{desc2}</Text>
      
      {!buttonText ? '' :
      <Button fontSize='xl' bg="blue.300" color="white">

        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>

      }
  {'  '}
      {!buttonText2 ? '' :
      <Button fontSize='xl' bg="blue.300" color="white">
 <Link href={linkName2}><a>{buttonText2}</a></Link>
      </Button>
       }
    </Box>
  </Flex>
);

  
const Home = ({ propertiesForSale, propertiesForRent }) =>

{
  const  {appStatus,connectToWallet, currentAccount} = useContext(Web3Context)

  const app = (status = appStatus ) =>{
    switch (status) {
      case 'connected':
        return userLoggedIn
        
  
      case 'notConnected':
        return noUserFound
  
      case 'noMetaMask':
        return noMetaMaskFound
  
      case 'error':
        return error
  
      default:
        return loading
    }
  } 


  const userLoggedIn = (

    <Bannerloggedin
    purpose=''
    title1='Reduce carbon emission by recycling'
    title2=''
    desc1='Do you know your proof of your recycle can reduce carbon emission '
    desc2={currentAccount}
    buttonText='Support Green System'
    buttonText2='Proof of work'
    linkName='/search'
    linkName2='/submitproof'
    imageUrl='https://thumbs.dreamstime.com/b/lower-co-emissions-to-limit-global-warming-climate-change-concept-manager-hand-turning-knob-to-reduce-levels-co-lower-219963543.jpg'
  />



)

const noUserFound = ( 
 

 
    <Banner
    purpose=''
    title1='Reduce carbon emission by recycling'
    title2=''
    desc1='Do you know your proof of  recycling can reduce carbon emission '
  
      buttonText=''
      buttonText2='Connect Wallet'
      func = {connectToWallet}
      linkName='/search?purpose=for-rent'
      imageUrl='https://thumbs.dreamstime.com/b/lower-co-emissions-to-limit-global-warming-climate-change-concept-manager-hand-turning-knob-to-reduce-levels-co-lower-219963543.jpg'
      />
  


)


const noMetaMaskFound = (


  <Banner
    
      title1='You need a web3 wallet'
      title2='Everyone'
      desc1='  You must install Metamask, a  '
      desc2='virtual Ethereum wallet, in your
      browser'
     
      linkName='/search?purpose=for-rent'
      imageUrl='https://thumbs.dreamstime.com/b/lower-co-emissions-to-limit-global-warming-climate-change-concept-manager-hand-turning-knob-to-reduce-levels-co-lower-219963543.jpg'
    />
  

)


const error = (

  <div>Error</div>

  // <div className={style.loginContainer}>
  //   <Image src={errorImg} width={250} height={200} />
  //   <div className={style.loginContent}>
  //     An error occurred. Please try again later or from another browser.
  //   </div>
  //</div>
)


const loading = (
  
    <div>Loading...</div>
 
)




return  <Box>  {app(appStatus)}  <br/><br/><br/> </Box> 

// return (
//  <Box>
//     <Banner
//       purpose='RENT A HOME'
//       title1='Rental Homes for'
//       title2='Everyone'
//       desc1=' Explore from Apartments, builder floors, villas'
//       desc2='and more'
//       buttonText='Explore Renting'
//       buttonText2='Connect Wallet'
//       func = {connectToWallet()}
//       linkName='/search?purpose=for-rent'
//       imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
//     />
  
//   </Box>

// )


}

 

// export async function getStaticProps() {
  
//   const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
//   const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

//   return {
//     props: {
//       propertiesForSale: propertyForSale?.hits,
//       propertiesForRent: propertyForRent?.hits,
//     },
//   };
// }

export default Home;
