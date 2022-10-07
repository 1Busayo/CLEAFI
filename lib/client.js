 import {  useState } from 'react'
// import sanityClient from '@sanity/client'
import axios from 'axios'



const rest_url =process.env.REST_URI

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbXVlbCIsImlhdCI6MTY1MzA3OTg2Mn0.S2wUncLsGmnQMhhfikizzIfKoSl3xKsapVheElKw-tg'

export const createnewuser = async (data) => {

    axios.post("https://cleafi.herokuapp.com/adduser", data, {
  headers: {
    'Authorization': `${token}` 
  }
}).then(res => {
  console.log(res);
  console.log(res.data);
})
} 


export const postmimes = async (data) => {

  axios.post("https://cleafi.herokuapp.com/addmimes", data, {
headers: {
  'Authorization': `${token}` 
}
}).then(res => {
console.log(res);
console.log(res.data);
})
} 


export const updateprofile = async (data) => {

  axios.post("https://cleafi.herokuapp.com/updateprofile", data, {
headers: {
  'Authorization': `${token}` 
}
}).then(res => {
console.log(res);
console.log(res.data);
})
} 




export const checkuser = async (data ,cb) => {

 await axios.get(`https://cleafi.herokuapp.com/getuser/${data}`, {
headers: {
  'Authorization': `${token}` 
}
}).then(res => {

 //console.log(res.data);

//how many times does it exist
 cb(res.data.data) ;
})

} 


export const getallmimes = async (cb) => {

  await axios.get(`https://cleafi.herokuapp.com/allmimesx`, {
 headers: {
   'Authorization': `${token}` 
 }
 }).then(res => {
 
  //console.log(res.data);
 
 //how many times does it exist
  cb(res.data.data) ;
  console.log( res.data.data) ;
 })
 
 } 

 export const usermimes = async (data,cb) => {

  await axios.get(`https://cleafi.herokuapp.com/usermimes/${data}`, {
 headers: {
   'Authorization': `${token}` 
 }
 }).then(res => {
 
  //console.log(res.data);
 
 //how many times does it exist
  cb(res.data.data) ;
 })
 
 } 
 

// export const client = sanityClient({
//     projectId: process.env.NEXT_PUBLIC_SANITY_PROIJECT_ID,
//     dataset: 'production',
//     apiVersion:'v1',
//     token: process.env.NEXT_PUBLIC_SANITY_PROIJECT_TOKEN,
//     useCdn: false ,
// })