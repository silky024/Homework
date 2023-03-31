module.exports = { key01 : 'test',kay02,request,requesthttps }

const https = require('https')
const http = require('http')

function kay02(){
    console.log('0002')
}
function request(method,protocal,host,port,path,payload,headers){
    const options = {
        method: method ,
        protocal: protocal ,
        host: host,
        port: port,
        path:path,
        headers: headers
    }
    if(method === `POST`){
        payload = JSON.stringify(payload)
    }
    let req = http.request(options,(resp)=> {
        
        let respdata = ``
    
        resp.on(`data`,(chunk)=>{
            respdata += chunk.toString()
        })
    
        resp.on(`end`, function(){
            let resp = convertStringtoJSON(respdata)
            //let resp = JSON.parse(respdata)
            console.log(resp)
        })
        
    
    })
    /*if(method === `POST`){
       req.write(payload) /// comment then it will work but not done
    }*/
    
    req.end()
    
    function convertStringtoJSON(data)
{
    try{  
    return JSON.parse(data) 
    }catch(excp){  
    return data 
    }
}
}
function requesthttps(method,protocal,host,port,path,payload,headers){
    const options = {
        method: method ,
        protocal: protocal ,
        host: host,
        port: port,
        path:path,
        headers: headers
    }
    if(method === `POST`){
        payload = JSON.stringify(payload)
    }
    let req = https.request(options,(resp)=> {
        
        let respdata = ``
    
        resp.on(`data`,(chunk)=>{
            respdata += chunk.toString()
        })
    
        resp.on(`end`, function(){
            let resp = convertStringtoJSON(respdata)
            //let resp = JSON.parse(respdata)
            console.log(resp)
        })
        
    
    })
    if(method === `POST`){
       req.write(payload) /// comment then it will work but not done
    }
    
    req.end()
    
    function convertStringtoJSON(data)
{
    try{  
    return JSON.parse(data) 
    }catch(excp){  
    return data 
    }
}


} 
