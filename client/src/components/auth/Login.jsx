import { useMutation } from "@tanstack/react-query";
import { useState } from "react"
import { login } from "../../https/api";
import {enqueueSnackbar} from "notistack";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate} from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email:"",
        password: "",
    });

    const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        loginMutation.mutate(formData)
    }

    const loginMutation = useMutation({
        mutationFn: (reqData) => login(reqData),
        onSuccess: (res) => {
            const { data } = res;
            console.log(data)
            enqueueSnackbar(data.message, { variant: "success"});
            const { _id, name, email, phone, role, isAuth } = data.data;
            dispatch( setUser({ _id, name, email, phone, role, isAuth }));
            navigate("/");
        },
        onError: (error) => {
            const { response } = error;
            enqueueSnackbar(response.data.message, { variant: "error"});
        }
    })
    
   
  return (
    <div>
      <form onSubmit={handleSubmit}>
            <div>
                <label className="block text-[#ababab] mt-3 mb-2 text-sm font-medium">
                    Employee Email
                </label>
                <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                    <input className="bg-transparent flex-1 text-white focus:outline-none"
                        type="email" name="email" 
                        onChange={handleChange}
                        value={formData.email}
                        placeholder="Enter employee email" 
                        required = "required" />
                </div>
            </div>
            <div>
                <label className="block text-[#ababab] mt-3 mb-2 text-sm font-medium">
                    Password
                </label>
                <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                    <input className="bg-transparent flex-1 text-white focus:outline-none" 
                        type="text" name="password"
                        onChange={handleChange}
                        value={formData.password}
                        placeholder="Enter employee password" 
                        required = "required" />
                </div>
            </div>
            <button type="submit" className="w-full rounded-lg mt-6 py-3 text-lg bg-yellow-400 text-gray-900 font-bold">
                Sign in
            </button>
        </form>
    </div>
  )
}

export default Login
