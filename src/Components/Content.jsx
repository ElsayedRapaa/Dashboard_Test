import React from "react";
import Chart from "./AreaChart";

function Content() {
  return (
    <div className="flex-1 min-h-screen pt-[10px] pr-[20px] pl-[347px]">
      <h1 className="title text-[#294E6D] text-[36px] font-[600] mb-[15px]">
        Good morning, John!
      </h1>
      <div className="grid grid-cols-4">
        <div className="content_layout w-[180px] h-[170px] px-[25px] py-[28px] rounded-[25px] text-[#294E6D]">
          <i className="ri-refund-fill text-3xl"></i>
          <h3 className="text-[32px] font-[700]">$16,500</h3>
          <small className="text-[16px] font-[400]">Payout</small>
        </div>
        <div className="content_layout w-[180px] h-[170px] px-[25px] py-[28px] rounded-[25px] text-[#294E6D]">
          <i className="ri-ancient-pavilion-line text-3xl"></i>
          <h3 className="text-[32px] font-[700]">54</h3>
          <small className="text-[16px] font-[400]">Total orders</small>
        </div>
        <div className="content_layout w-[180px] h-[170px] px-[25px] py-[28px] rounded-[25px] text-[#294E6D]">
          <i className="ri-emotion-laugh-line text-3xl"></i>
          <h3 className="text-[32px] font-[700]">143</h3>
          <small className="text-[16px] font-[400]">Winning trades</small>
        </div>
        <div className="content_layout w-[180px] h-[170px] px-[25px] py-[28px] rounded-[25px] text-[#294E6D]">
          <i className="ri-emotion-unhappy-line text-3xl"></i>
          <h3 className="text-[32px] font-[700]">32</h3>
          <small className="text-[16px] font-[400]">Losing trades</small>
        </div>
      </div>
      <div className="w-full h-[18rem] flex items-start gap-x-[35px] mt-[20px]">
        <div className="flex flex-col gap-y-[26px]">
          <div className="chart_result w-[225px] h-[126px] px-[30px] py-[28px] rounded-[25px] flex justify-between items-center">
            <div className="flex flex-col text-[#294E6D]">
              <span className="font-[500]">New clients</span>
              <span className="text-[48px] font-[700]">40</span>
            </div>
            <div className="box_result w-[73px] h-[28px] flex justify-center items-center rounded-[10px]">
              + 18.3%
            </div>
          </div>
          <div className="chart_result w-[225px] h-[126px] px-[30px] py-[28px] rounded-[25px] flex justify-between items-center">
            <div className="flex flex-col text-[#294E6D]">
              <span className="font-[500]">All clients</span>
              <span className="text-[48px] font-[700]">238</span>
            </div>
          </div>
        </div>
        <Chart />
      </div>
      <div className="recent flex flex-col w-full px-[22px] py-[10px] gap-y-[26px] mt-[20px]">
        <h5 className="font-[600] text-[20px] text-[#294E6D] ">
          Recent orders
        </h5>
        <div className="list flex flex-col gap-y-[5px]">
          <div className="list_item active flex items-center justify-between gap-x-[50px] h-[52px] px-[14px]">
            <div className="flex items-center justify-between w-[35%]">
              <span className="box_result w-[42px] h-[15px] text-[13px] font-[600] flex items-center justify-center rounded-md">
                $169
              </span>
              <p className="text-[#294E6D] font-[500]">Brandon smith</p>
            </div>
            <div className="flex items-center justify-between w-[65%]">
              <p className="text-[#294E6D] font-[500]">Professional package</p>
              <p className="text-[#294E6D] font-[500]">12:00 PM</p>
            </div>
          </div>
          <div className="list_item flex items-center justify-between gap-x-[50px] h-[52px] px-[14px]">
            <div className="flex items-center justify-between w-[35%]">
              <span className="box_result w-[42px] h-[15px] text-[13px] font-[600] flex items-center justify-center rounded-md">
                $20
              </span>
              <p className="text-[#294E6D] font-[500]">Susan Griffis</p>
            </div>
            <div className="flex items-center justify-between w-[65%]">
              <p className="text-[#294E6D] font-[500]">Basic package</p>
              <p className="text-[#294E6D] font-[500]">1:00 PM</p>
            </div>
          </div>
          <div className="list_item flex items-center justify-between gap-x-[50px] h-[52px] px-[14px]">
            <div className="flex items-center justify-between w-[35%]">
              <span className="box_result w-[42px] h-[15px] text-[13px] font-[600] flex items-center justify-center rounded-md">
                $200
              </span>
              <p className="text-[#294E6D] font-[500]">$200</p>
            </div>
            <div className="flex items-center justify-between w-[65%]">
              <p className="text-[#294E6D] font-[500]">Advanced package</p>
              <p className="text-[#294E6D] font-[500]">Yesterday at 8:57 PM</p>
            </div>
          </div>
          <div className="list_item flex items-center justify-between gap-x-[50px] h-[52px] px-[14px]">
            <div className="flex items-center justify-between w-[35%]">
              <span className="box_result w-[42px] h-[15px] text-[13px] font-[600] flex items-center justify-center rounded-md">
                $169
              </span>
              <p className="text-[#294E6D] font-[500]">Joseph smith</p>
            </div>
            <div className="flex items-center justify-between w-[65%]">
              <p className="text-[#294E6D] font-[500]">Professional package</p>
              <p className="text-[#294E6D] font-[500]">Yesterday at 1:57 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
