import React from 'react'
import Image from "next/image";
import avatar from "@/../public/avatar.webp";

const postheader = () => {
  return (
    <>
    <div className="w-full bg-black mt-8 p-4 lg:p-8 rounded-lg border-[#233453] border-[1px]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="flex-[1] p-2 lg:border-r-[1px] lg:border-[#233453]">
              <div className="flex">
                <Image src={avatar} alt="Avatar" width={80} height={80} className="rounded-lg" />
                <div className="flex-[1] pl-4">
                  <div className="flex flex-col gap-2">
                  <div className="flex-[1] p-1 font-semibold text-indigo-500">NomNom Boost&quot;s</div>
                  <div className="flex-[1] p-1 font-light text-pink-500 text-sm">Providing customer services since July 2023</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[1] p-2 text-white">
              <div className="flex lg:items-center justify-between">
                <div className="flex-[1] pl-4">
                  <div className="flex flex-col gap-2">
                  <div className="flex-[1] p-1">Products Sold</div>
                  <div className="flex-[1] p-1">15879</div>
                  </div>
                </div>
                <div className="flex-[1] pl-4">
                  <div className="flex flex-col gap-2">
                  <div className="flex-[1] p-1">Products Quality</div>
                  <div className="flex-[1] p-1 text-sm">5 (1225 reviews)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default postheader