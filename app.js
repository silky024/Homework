const nreq = require('./lib/NReq')

//console.log(nreq.kay02())
nreq.request('GET','http','localhost',9818,'/hi')
nreq.request('POST','http','localhost',9818,'/hi')
nreq.requesthttps('GET','https','covid19.ddc.moph.go.th',443,'/api/Cases/today-cases-all')
let payload = { 
    provinceId: 1, 
    districtId: null, 
          year: 2021, 
         month: 2, 
      pageSize: 20, 
     pageIndex: 0
  }
let headers ={
    'Content-Type': 'application/json; charset=utf-8'
}

nreq.requesthttps('POST','https','orapiweb2.pttor.com',443,'/api/oilprice/search', payload, headers )
