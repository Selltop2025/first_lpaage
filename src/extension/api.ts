import axios, {AxiosInstance} from "axios";


const api = () : AxiosInstance => {

    const api =
        axios.create(
            {
                baseURL: "https://selltop-backend.herokuapp.com"
                , headers: {"Content-Type": "application/json"}
            }
        )

    return api
}

export  default api