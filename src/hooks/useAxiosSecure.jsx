import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axios.interceptors.response.use((res) => {
            return res;
        }, (err) => {
            console.log('error tracked in the interceptor', err.response);
            if (err.response.status === 401 || err.response.status === 403) {
                console.log('logout the user');
                logOut()
                    .then(() => {
                        navigate('/login');
                    })
                    .catch(err => console.error(err))
            }
        })
    }, [logOut, navigate])

    return axiosSecure;
};

export default useAxiosSecure;