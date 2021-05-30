import axios from "axios";

export const getDriversService = () => {
	return axios.get("drivers");
};
