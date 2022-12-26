import Axios from "axios";

const SuperFetch = Axios.create({
    baseURL: "https://funnelliner.com/api",
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
})
export default SuperFetch