import axios from "axios" 

export const AxiosConfig = () => {
    return axios.create(
        {
            baseURL: "http://localhost:5454"
        }
    )
}