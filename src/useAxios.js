import axios from 'axios'
const caxios =axios.create({
	// baseURL:'http://localhost:54321',
	withCredentials:true,
	baseURL:'https://b8a11-server-side-434huzaifa-rho.vercel.app/',
})
const useAxios = () => {
	return caxios
};

export default useAxios;