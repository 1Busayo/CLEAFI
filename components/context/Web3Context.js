import { createContext, useEffect, useState } from 'react'
import { useRouter} from 'next/router'

export const Web3Context = createContext();


import { client , createnewuser , checkuser , getallmimes  } from '../../lib/client'

export const Web3Provider = ({ children }) => {


    const [appStatus, setAppStatus] = useState('')
    const [currentAccount, setCurrentAccount] = useState('')
    const [currentUser, setCurrentUser] = useState({})
    const [tweets, setTweets] = useState([])
    const [pMimes,setpersonalMimes] = useState([])
    const router = useRouter()




    useEffect(()=>{
        checkIfWalletIsConnected()
        fetchTweets()
      } ,[])
    
    //   useEffect(() => {
    //     if (!currentAccount || appStatus !== 'connected') return
    //   //  getCurrentUserDetails(currentAccount)
    //     // fetchTweets()
    //     // personalMimes(currentAccount)
    //   }, [currentAccount, appStatus])
    
    
    const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    
    try {
        const addressArray = await window.ethereum.request({
            method: 'eth_accounts',
        })
        if (addressArray.length > 0 ){
            //connected
    
            setAppStatus('connected')
          setCurrentAccount(addressArray[0])
           //createUserAccount(addressArray[0])
        }else{
            //not connected
            router.push('/')
            setAppStatus('notConnected')
        }
    } catch (error) {
        setAppStatus('error')

    }
    
    
    
    
    } 


    const fetchTweets = async () => {


        setTweets([])
        await getallmimes( (result)=>{
         
         
          result.forEach(async (item) => {
            // const profileImageUrl = await getProfileImageUrl(
            //   item.profile_img_ipfs,
            //   item.is_profile_img_nft,
            // )
      
           // if (item.author.isProfileImageNft) {
              const newItem = {
                mimeid:item.mime_id,
                mimetitle: item.mime_title,
                mimedesc:item.mime_desc,
                mimeimage:`https://ipfs.io/ipfs/${item.mime_img_url}`,
                timestamp: item.timestamp,
                addr:item.wallet_address
                
              }
      
              setTweets((prevState) => [...prevState, newItem])
            // } else {
            //   setTweets(prevState => [...prevState, item])
            // }
          })
      
        })
    
    
    }

    

/** initiates metamask wallet connecton */
const connectToWallet = async () =>{

    if(!window.ethereum) return setAppStatus('noMetaMask')
    try {
        setAppStatus('loading')
    const addressArray = await window.ethereum.request({
        method:'eth_requestAccounts'
    })
    
    if (addressArray.length > 0) {
       setAppStatus('connected')
        setCurrentAccount(addressArray[0])
       //createUserAccount(addressArray[0])
    } else {
        router.push('/')
        setAppStatus('notConnected')
    }
    
    } catch (error) {
        setAppStatus('error')
    }
    
    }
    
    return (
        <Web3Context.Provider 
        value={{ 
            appStatus,
          connectToWallet,
          currentAccount,
          tweets
       
        
          }}>
            {children}
        </Web3Context.Provider>
  )
}

