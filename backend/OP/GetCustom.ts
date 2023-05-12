import { prisma } from '../index'

interface Data {
    date_1 : Date;
    date_2 : Date;
}
const GetCustom = async (data : Data) =>{
    const request = await prisma.speedCheck.findMany({
        where : {
            date : {
                lte : data.date_1,
                gte : data.date_2
            }
        },
        orderBy : {
            id : "asc"
        }
    })    
    if(request != null) return request
    return {"OK" : false}

}
export default GetCustom