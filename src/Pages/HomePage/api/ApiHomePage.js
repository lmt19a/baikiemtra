import axios from "axios"

export const getAllList = async () => {
    return await axios.get("http://wlp.howizbiz.com/api/species/").then(
        res => res.data
    )
}