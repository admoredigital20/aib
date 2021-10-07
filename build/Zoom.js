import React from 'react'
import { ZoomMtg } from "@zoomus/websdk";
import { useEffect } from 'react';
const crypto = require('crypto')


function generateSignature(apiKey, apiSecret, meetingNumber, role) {
    return new Promise((res, req) => {
        // Prevent time sync issue between client signature generation and zoom 
        const timestamp = new Date().getTime() - 30000
        const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString('base64')
        const hash = crypto.createHmac('sha256', apiSecret).update(msg).digest('base64')
        const signature = Buffer.from(`${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`).toString('base64')

        res(signature)
    })


}


// setup your signautre endpoint here: https://github.com/zoom/websdk-sample-signature-node.js
var apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6InEtWjE4VG5MU3AtNWt4cUZBU1NkbHciLCJleHAiOjE2MzEwODMyOTgsImlhdCI6MTYzMDQ3ODQ5OH0.iApURsJUp1M0UhFgi3Q0H6mBEoB-wyRhb1YSgh7FW8E'
var apiSecret = 'aDeI6wTOKbiShrNXw0CowJXxFAoLoBw0OlBy'
var meetingNumber = 71225065615

var leaveUrl = 'http://localhost:3000'  //our redirect url
var userName = 'WebSDK'
var userEmail = 'admoredigital20@gmail.com'
var passWord = '3Y43D8'

var signature = generateSignature(apiKey, apiSecret, meetingNumber, 0).then((res)=>{
    signature= res;
})  //need to generate based on meeting using javascript


function Zoom() {
    useEffect(() => {
        showZoomDiv()
        // loading zoom library before joining on componenet did mount
        ZoomMtg.setZoomJSLib('https://source.zoom.us/2.0.0/lib', '/av');
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareJssdk();
        initiateMeeting()
    }, [])

    const initiateMeeting = () => {
        ZoomMtg.init({
            leaveUrl: leaveUrl,
            isSupportAV: true,
            success: (success) => {
                console.log(success)

                ZoomMtg.join({
                    signature: signature,
                    meetingNumber: meetingNumber,
                    userName: userName,
                    apiKey: apiKey,
                    userEmail: userEmail,
                    passWord: passWord,
                    success: (success) => {
                        console.log(success)
                    },
                    error: (error) => {
                        console.log(error)
                    }
                })

            },
            error: (error) => {
                console.log(error)
            }
        })
    }

    const showZoomDiv = () => {
        document.getElementById('zmmtg-root').style.display = 'block'
    }
    return (
        <div className='Zoom'>
            {/* <h1>heyy</h1> */}
        </div>
    )
}

export default Zoom
