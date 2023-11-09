import axios from 'axios'
const axiosSecure =axios.create({
	baseURL:'localhost:5431',
})
const useAxios = () => {
    return axiosSecure
};

export default useAxios;