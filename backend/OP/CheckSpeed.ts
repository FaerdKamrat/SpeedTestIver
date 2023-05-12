import { exec } from "child_process";
import { prisma } from '../index'
interface Data {
  resultId  : string; 
  download  : number;
  Ldownload : number;
  upload    : number;
  Lupload   : number;
  ip        : string;
  Lidle     : number;
  server    : string;
}
const dbNewEntry = async (data : Data) =>{
  const check = await prisma.speedCheck.create({data:data});
  return check
}
const CheckSpeed = async() =>{
  let test =""
  exec("speedtest.exe -f json",(err,stdout, stderr,)=>{
    if(stdout != ""){
      const result = JSON.parse(stdout)
      console.log(result)
      const timestamp = new Date(result.timestamp)
      const data = {
        resultId : result.result.id,
        download : result.download.bandwidth,
        Ldownload : result.download.latency.iqm,
        upload    : result.upload.bandwidth,
        Lupload   : result.upload.latency.iqm,
        ip        : result.interface.externalIp,
        Lidle     : result.ping.latency,
        server    : result.server.ip,
      }
      console.log(dbNewEntry(data))
    } 
    else console.log(stdout)
  })
  const lol = test
} 

export default CheckSpeed