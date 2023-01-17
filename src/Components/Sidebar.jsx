import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [active, setActive] = useState("dashboard");

  useEffect(() => {
    if (window.location.pathname === "/") {
      setActive("dashboard");
    } else {
      setActive("settings");
    }
  }, [window.location.pathname]);

  const handleActive = (text) => {
    setActive(text);
  };

  return (
    <div
      className={`bg-gray-100 min-h-full w-[327px] px-[31px] fixed left-0 top-0`}
    >
      <div className="logo text-2xl font-bold absolute top-[75px] left-[31px] text-[#294E6D] tracking-wider">
        <div className="point_i"></div>
        <div className="draw_x"></div>
        <div className="draw_x2"></div>
        BiTFKUX
      </div>
      <div className="links flex flex-col mt-[151px] gap-y-3">
        <Link
          to="/"
          className={`${
            active === "dashboard" && "link"
          }  w-[265px] h-[46px] rounded-[10px] flex items-center gap-4 pl-[20px] cursor-pointer text-[#294E6D]`}
          onClick={() => handleActive("dashboard")}
        >
          <i className="ri-home-5-line text-2xl"></i>{" "}
          <span className="font-semibold">Dashboard</span>
        </Link>
        <Link
          to="/"
          className={`${
            active === "orders" && "link"
          }  w-[265px] h-[46px] rounded-[10px] flex items-center gap-4 pl-[20px] cursor-pointer text-[#294E6D]`}
          onClick={() => handleActive("orders")}
        >
          <i className="ri-ancient-pavilion-line text-2xl"></i>{" "}
          <span className="font-semibold">Orders</span>
        </Link>
        <Link
          to="/settings"
          className={`${
            active === "settings" && "link"
          }  w-[265px] h-[46px] rounded-[10px] flex items-center gap-4 pl-[20px] cursor-pointer text-[#294E6D]`}
          onClick={() => handleActive("settings")}
        >
          <i className="ri-settings-3-line text-2xl"></i>{" "}
          <span className="font-semibold">Settings</span>
        </Link>
        <div className="profile absolute bottom-[42px] left-[31px] w-[265px] h-[80px] rounded-[10px] py-[19px] px-[21px] text-[#294E6D] flex justify-between items-center">
          <div className="user flex items-center gap-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/3f16/acab/f42dbab07ac7002f3428f90210da277d?Expires=1674432000&Signature=XEzD2TmhKcNJJG9FQDPOMDgU57L9tYoijm9HLYUnxrqFmZMyYRLCc6bY4DZRM-k5aFWKVYmXp5jNzYXF4JL9Kyz5BWBVy7nb9w-IXa5Z50iYPXzBwyoRHfae0pMW22YJpaS3kEFhRYHh-GC6SzDOf2vkg9~Mtxt1~HqVge-kdK9a8p20z-z1alhs6YZwcXjTsRI~aABfbYYqzrCX9fzaq35Ay-2oyQ6IfU2WJRRUMfX3qC9w1KU5h3PrYv8ykyfAYkFEUjiCQ9k4iLIIxuJEqQZx0fQEbB-ftXOpD8eUUdQSE0N4HITA8ORb03tGirlEQMJeBM~7tS-cWZL2OIqZsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="profile"
              className="w-[41px] h-[41px] object-cover rounded-[10px]"
            />
            <div className="name flex flex-col">
              <h3 className="font-bold mb-[-7px]">John J.</h3>
              <small className="tetx-xs">John James</small>
            </div>
          </div>
          <div className="arrow cursor-pointer w-[13px] h-[7px] mb-4">
            <i className="ri-arrow-down-s-line text-xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
