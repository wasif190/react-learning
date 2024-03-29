import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setIsLogedIn}) => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function changeHandler(event) {
        setFormData([
            (prev) => [
                {
                    ...prev,
                    [event.target.name]: event.target.value,
                },
            ],
        ]);
    }

    function submitHandler(e) {
        e.preventDefault();
        setIsLogedIn(true);
        toast.success("Login Success");
        navigate("/dashboard");
    }

    return (
        <form
            onSubmit={submitHandler}
            className="flex flex-col w-full mt-3"
        >
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address
                    <sup className="text-red-500">*</sup>
                </p>

                <input
                    type="email"
                    required
                    value={formData.email}
                    placeholder="Enter your email address"
                    onChange={changeHandler}
                    name="email"
                    className="rounded-[5px] w-full py-2 px-3 border outline-none"
                />
            </label>

            <label className="w-full relative">
                <p className="text-[0.875rem] mb-1 leading-[1.375rem] mt-2">
                    Password
                    <sup className="text-red-500">*</sup>
                </p>

                <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    placeholder="Enter Password"
                    onChange={changeHandler}
                    name="password"
                    className="rounded-[5px] w-full py-2 px-3 border outline-none"
                />

                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[42px] cursor-pointer ">
                    {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                </span>

                <Link to="#">
                    <p className="text-xs mt-1 text-blue-500 max-w-max ml-auto">Forgot Password</p>
                </Link>
            </label>

            <button className="bg-blue-400 py-[8px] px-[12px] rounded-[5px] mt-6 font-medium text-white">Sign in</button>
        </form>
    );
};

export default LoginForm;
