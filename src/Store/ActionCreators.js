import axios from "axios";
import { fetchUser} from "./Types";

// Login State Action Creator

const fetchUser = () => {
    axios.get("/api/current_user");
}

