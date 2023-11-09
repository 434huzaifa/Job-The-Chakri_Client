import axios from 'axios'
const axiosSecure =axios.create({
	baseURL:'http://localhost:54321',
})
const useAxios = () => {
    return axiosSecure
};

export default useAxios;