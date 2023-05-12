import { prisma } from '../index'

interface Data {
    today : Date;
    last_month : Date;
}
const GetMonth = async (data : Data) =>{
    const request = await prisma.speedCheck.findMany({
        where : {
            date : {
                lte : data.today,
                gte : data.last_month
            }
        },
        orderBy : {
            id : "asc"
        }
    })    
    if(request != null) return request
    return {"OK" : false}

}
export default GetMonth