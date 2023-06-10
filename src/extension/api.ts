import axios, {AxiosInstance} from "axios";


const api = () : AxiosInstance => {

    const api =
        axios.create(
            {
                baseURL: process.env.NEXT_PUBLIC_BACKEND
                , headers: {"Content-Type": "application/json"}
            }
        )

    return api
}

export  default api