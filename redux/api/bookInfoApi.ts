import axios, {Axios, AxiosResponse} from 'axios'

const SERVER = 'http://127.0.0.1:5050'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}
export interface BookInfoType {
    libName: string;
    bookName: string;
    author: string;
    publisher: string;
    publishedYear: string;
    dataBaseData: string;
}
export const joinBookInfoApi = async (payload : {
    libName: String,
    bookName: String,
    author: String,
    publisher: String,
    publishedYear: String,
    dataBaseData: String,
}) => {
    try {
        
        const response: AxiosResponse<unknown, BookInfoType[]> = await axios.post(
            `${SERVER}/bookInfo/join`,
            payload,
            {headers}
        )
        
        return response.data
    } catch (err) {
        return err;
    }
}

export const delBookInfoApi = async() =>{
    try{
        const response: AxiosResponse<unknown, BookInfoType[]> = await axios.delete(
            `${SERVER}/bookInfo/delBookInfoApi`,
            {headers}
        )
    }catch(err){
        return err;
    }
}

