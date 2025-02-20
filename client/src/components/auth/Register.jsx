import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { register } from "../../https/api";
import PropTypes from "prop-types";

const Register = ({ setIsRegister }) => {
    // State to manage form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: ""
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        registerMutation.mutate(formData); // Trigger the mutation
    };

    // Handle role selection
    const handleRoleSelection = (selectedRole) => {
        setFormData({ ...formData, role: selectedRole });
    };

    // Mutation for registration
    const registerMutation = useMutation({
        mutationFn: (reqData) => register(reqData), // Pass form data to the register function
        onSuccess: (res) => {
            const { data } = res;
            enqueueSnackbar(data.message, { variant: "success" }); // Show success message

            // Reset form data
            setFormData({
                name: "",
                email: "",
                phone: "",
                password: "",
                role: ""
            });

            // Close the registration form after 1.5 seconds
            setTimeout(() => {
                setIsRegister(false);
            }, 1500);
        },
        onError: (error) => {
            // Show error message if response exists
            if (error.response && error.response.data) {
                enqueueSnackbar(error.response.data.message, { variant: "error" });
            } else {
                enqueueSnackbar("An error occurred during registration.", { variant: "error" });
            }
        }
    });

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label className="block text-[#ababab] mt-2 mb-2 text-sm font-medium">
                    Employee Name
                </label>
                <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                    <input className="bg-transparent flex-1 text-white focus:outline-none" 
                        type="text" name="name" 
                        placeholder="Enter employee name"
                        onChange={handleChange} 
                        value={formData.name}
                        required = "required" />
                </div>
            </div>
            <div>
                <label className="block text-[#ababab] mt-3 mb-2 text-sm font-medium">
                    Employee Email
                </label>
                <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                    <input className="bg-transparent flex-1 text-white focus:outline-none"
                        type="email" name="email"
                        value={formData.email}
                        onChange={handleChange} 
                        placeholder="Enter employee email" 
                        required = "required" />
                </div>
            </div>
            <div>
                <label className="block text-[#ababab] mt-3 mb-2 text-sm font-medium">
                    Employee Phone
                </label>
                <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                    <input className="bg-transparent flex-1 text-white focus:outline-none" 
                        type="number" name="phone"
                        value={formData.phone}
                        onChange={handleChange} 
                        placeholder="Enter employee phone" 
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
                        value={formData.password}
                        onChange={handleChange} 
                        placeholder="Enter employee password" 
                        required = "required" />
                </div>
            </div>
            <div>
                <label className="block text-[#ababab] mt-3 mb-2 text-sm font-medium">
                    Choose your role
                </label>
                <div className="flex items-center gap-3 mt-4">
                    {["Waiter", "Cachier", "Admin"].map((role) => {
                        return (
                            <button
                            key={role}
                            onClick={() => handleRoleSelection(role)}
                            type="button"
                            className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab]
                            ${formData.role === role ? "bg-indigo-700" : ""}`}>{role}</button>
                        )
                    })}
                </div>
            </div>
            <button type="submit" className="w-full rounded-lg mt-6 py-3 text-lg bg-yellow-400 text-gray-900 font-bold">
                Sign up
            </button>
        </form>
    </div>
  )
}

Register.propTypes = {
    setIsRegister : PropTypes.bool
}

export default Register