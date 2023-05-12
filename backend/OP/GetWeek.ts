import { prisma } from '../index'

interface Data {
    today : Date;
    last_week : Date;
}
const GetWeek = async (data : Data) =>{
    const request = await prisma.speedCheck.findMany({
        where : {
            date : {
                lte : data.today,
                gte : data.last_week
            }
        },
        orderBy : {
            id : "asc"
        }
    })    
    if(request != null) return request
    return {"OK" : false}

}
export default GetWeek