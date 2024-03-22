import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SIgnUpForm = ({setIsLogedIn}) => {

  const navigate = useNavigate();

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    // if (formData.password !== formData.confirmPassword) {
    //   toast.error("Passwords do not match");
    //   return;
    // }

    if (formData.password != formData.confirmPassword) toast.error("Password do not match")

    setIsLogedIn(true);
    toast.success("Account Create");
    const accountData = {
      ...formData,
    };
    console.log(accountData);

    navigate("/dashboard");
  }

  return (
    <form onSubmit={submitHandler} className="mt-2">
      <div className="flex gap-x-4">
        <label htmlFor="" className="w-full">
          <p className="text-[0.875rem] mb-1 leading-[1.375rem]">
            First Name <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="text"
            required
            placeholder="Enter First Name"
            onChange={changeHandler}
            value={FormData.firstName}
            name="firstName"
            className="border rounded-[5px] w-full py-2 px-3"
          />
        </label>

        <label className="w-full">
          <p className="text-[0.875rem] mb-1 leading-[1.375rem]">
            Last Name <sup className="text-red-500">*</sup>
          </p>
          <input
            type="text"
            required
            placeholder="Enter Last Name"
            onChange={changeHandler}
            value={FormData.lastName}
            name="lastName"
            className="border rounded-[5px] w-full py-2 px-3"
          />
        </label>
      </div>

      <label className="w-full">
        <p className="text-[0.875rem] mb-1 leading-[1.375rem] mt-2">
          Email Address
          <sup className="text-red-500">*</sup>
        </p>

        <input
          type="email"
          required
          placeholder="Enter your email address"
          value={formData.email}
          onChange={changeHandler}
          className="border rounded-[5px] w-full py-2 px-3"
          name="email"
        />
      </label>

      <div className="flex gap-3 mt-2 w-full">
        <label htmlFor="relative">
          <p className="text-[0.875rem] mb-1 leading-[1.375rem]">
            Create Password
            <sup className="text-red-500">*</sup>
          </p>

          <input
            type={showCreatePass ? "text" : "password"}
            required
            placeholder="Enter Password"
            onChange={changeHandler}
            value={formData.password}
            name="password"
            className="border rounded-[5px] w-full py-2 px-3"
          />
          <span
            onClick={() => setShowCreatePass(!showCreatePass)}
            className="absolute right-3 top-[40px] cursor-pointer z-10"
          >
            {showCreatePass ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>

        <label htmlFor="" className="relative">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Confirm Password
            <sup className="text-red-500">*</sup>
          </p>

          <input
            type={showConfirmPass ? "text" : "password"}
            required
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={formData.confirmPassword}
            name="confirmPassword"
            className="border rounded-[5px] w-full py-2 px-3"
          />

          <span
            onClick={() => setShowConfirmPass(!showConfirmPass)}
            className="absolute right-3 top-[35px] cursor-pointer z-10"
          >
            {showConfirmPass ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>
      </div>

      <button className="bg-blue-500 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-white w-full">
        Create Account
      </button>
    </form>
  );
};

export default SIgnUpForm;
