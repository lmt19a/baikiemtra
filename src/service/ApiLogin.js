import axios from "axios";

export const handleLoginInput = async (data) => {
    return await axios.post("http://wlp.howizbiz.com/web-authenticate", data)
}