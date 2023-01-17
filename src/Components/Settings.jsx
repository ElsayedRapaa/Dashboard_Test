import React, { useState } from "react";
import { Link } from "react-router-dom";

function Settings() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("James");
  const [email, setEmail] = useState("johnjames@gmail.com");
  const [currentPassword, setCurrentPassord] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex-1 min-h-screen pt-[10px] pr-[20px] pl-[347px]">
      <h1 className="title text-[#294E6D] text-[36px] font-[600] mb-[15px]">
        Settings
      </h1>
      <div className="settings_list_top pb-[18px] flex items-center gap-x-[40px]">
        <Link to="/" className="text-[#294E6D] font-[500]">
          General
        </Link>
        <Link to="/" className="text-[#294E6D] font-[500]">
          Plans details
        </Link>
        <Link
          to="/"
          className="text-[#294E6D] font-[500] flex items-center gap-x-2"
        >
          Payments{" "}
          <span className="payments_num text-[13px] bg-gray-200 py-[1px] px-[4px] rounded-sm">
            2
          </span>
        </Link>
        <Link to="/" className="text-[#294E6D] font-[500] relative">
          Profile
          <span className="w-full h-[2px] bg-[#294E6D] absolute bottom-[-20px] right-0"></span>
        </Link>
      </div>
      <div className="settings_list_top flex justify-between items-center pt-[30px] pb-[42px]">
        <div className="flex-1 flex flex-col">
          <h4 className="font-[500] text-[20px] text-[#294E6D]">
            Personal info
          </h4>
          <small className="text-[#6A7F92] font-[400] mt-[14px]">
            Update your photo and personal details here.
          </small>
        </div>
        <div className="flex items-center gap-x-[19px]">
          <button className="cancel text-[#294E6D] text-[15px] font-[500] rounded-[10px] h-[37px] w-[76px]">
            Cancel
          </button>
          <button className="text-white bg-[#294E6D] text-[15px] font-[500] rounded-[10px] h-[37px] w-[67px]">
            Save
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col pt-[42px]">
        <div className="settings_list_top flex items-start justify-between pr-[150px] pb-[42px]">
          <label htmlFor="name" className="text-[#294E6D] font-[500]">
            Name
          </label>
          <div className="inputs flex items-center gap-x-[13px]">
            <input
              type="text"
              name="firstName"
              id="name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-gray-200 w-[256px] h-[44px] rounded-[10px] px-[10px] text-[15px] text-[#294E6D] font-[500]"
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border border-gray-200 w-[256px] h-[44px] rounded-[10px] px-[10px] text-[15px] text-[#294E6D] font-[500]"
            />
          </div>
        </div>
        <div className="settings_list_top flex items-center justify-between pr-[150px] py-[42px]">
          <label
            htmlFor="email"
            className="text-[#294E6D] font-[500] pb-[25px]"
          >
            Email
          </label>
          <div className="inputs flex items-center gap-x-[13px]">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-200 w-[256px] h-[44px] rounded-[10px] px-[10px] text-[15px] text-[#294E6D] font-[500]"
            />
          </div>
        </div>
        <div className="settings_list_top flex items-start justify-between pr-[150px] py-[42px]">
          <label className="text-[#294E6D] font-[500]">Your photo</label>
          <div className="inputs flex items-start gap-x-[13px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/3f16/acab/f42dbab07ac7002f3428f90210da277d?Expires=1674432000&Signature=XEzD2TmhKcNJJG9FQDPOMDgU57L9tYoijm9HLYUnxrqFmZMyYRLCc6bY4DZRM-k5aFWKVYmXp5jNzYXF4JL9Kyz5BWBVy7nb9w-IXa5Z50iYPXzBwyoRHfae0pMW22YJpaS3kEFhRYHh-GC6SzDOf2vkg9~Mtxt1~HqVge-kdK9a8p20z-z1alhs6YZwcXjTsRI~aABfbYYqzrCX9fzaq35Ay-2oyQ6IfU2WJRRUMfX3qC9w1KU5h3PrYv8ykyfAYkFEUjiCQ9k4iLIIxuJEqQZx0fQEbB-ftXOpD8eUUdQSE0N4HITA8ORb03tGirlEQMJeBM~7tS-cWZL2OIqZsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="upload-img"
              className="w-[107px] h-[107px] object-cover rounded-[10px]"
            />
            <div className="w-[417px] h-[150px] border border-gray-200 flex flex-col items-center justify-center">
              <i className="ri-upload-cloud-fill text-2xl text-[#294E6D]"></i>
              <small className="text-[#294E6D] text-[12px] font-[500]">
                Click to upload or drag and drop
              </small>
              <small className="text-[#294E6D] text-[10px] font-[500]">
                PNG, SVG (max. 100x70px)
              </small>
            </div>
          </div>
        </div>
        <div className="settings_list_top flex items-start justify-between pr-[150px] py-[42px]">
          <label htmlFor="password" className="text-[#294E6D] font-[500]">
            Password
          </label>
          <div className="inputs flex flex-col gap-y-[13px]">
            <input
              type="password"
              name="currentPassword"
              id="password"
              value={currentPassword}
              placeholder="Current password"
              onChange={(e) => setCurrentPassord(e.target.value)}
              className="border border-gray-200 w-[524px] h-[44px] rounded-[10px] px-[10px] text-[15px] text-[#6A7F92] font-[500]"
            />
            <input
              type="passowrd"
              name="newPassword"
              value={password}
              placeholder="New password"
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-200 w-[524px] h-[44px] rounded-[10px] px-[10px] text-[15px] text-[#6A7F92] font-[500]"
            />
            <input
              type="passowrd"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Password confirmation"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-gray-200 w-[524px] h-[44px] rounded-[10px] px-[10px] text-[15px] text-[#6A7F92] font-[500]"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Settings;
