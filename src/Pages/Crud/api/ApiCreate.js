import axios from "axios"

export const createNewAnimal = async (data) => {
    return await axios.post("http://wlp.howizbiz.com/api/species/", data).then(
        res => res.data
    )
}