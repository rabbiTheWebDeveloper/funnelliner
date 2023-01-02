import Axios from "axios";
import { shopId } from "../pages/api";

const SuperFetch = Axios.create({
    baseURL: "https://funnelliner.com/api",
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
         shop_id :shopId
    }
})
export default SuperFetch
