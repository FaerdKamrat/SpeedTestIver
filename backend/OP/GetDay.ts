import { prisma } from '../index'

interface Data {
    date : Date
}
const GetToday = async (data : Data) =>{
    const request = await prisma.speedCheck.findMany({
        where : {
            date : {
                lte : data.date,
                gte : data.date
            }
        },
        orderBy : {
            id : "asc"
        }
    })    
    if(request != null) return request
    return {"OK" : false}

}
export default GetToday