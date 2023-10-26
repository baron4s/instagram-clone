import React from "react";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { MdOutlineSlideshow } from "react-icons/md";
import { BiMessageRoundedMinus } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";

function SideNav() {
  return (
    <div className="flex flex-col border-r border-slate-50/5 min-h-screen my-[32px]">
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img
          src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
          alt="Instagram Logo"
          className="w-[115px] ms-[25px] mb-[32px]"
        />
      </a>
      <div className="sidenav__buttons flex flex-col px-[25px]">
        <a href="" className="flex items-center py-[12px] mb-[10px]   gap-x-3">
          <GoHomeFill className="text-[30px]" />
          <span className="font-bold text-[18px]">Beranda</span>
        </a>
        <a href="" className="flex items-center py-[12px] mb-[10px]   gap-x-3">
          <BiSearch className="text-[30px]" />
          <span className="text-[18px]">Cari</span>
        </a>
        <a href="" className="flex items-center py-[12px] mb-[10px]   gap-x-3">
          <MdOutlineExplore className="text-[30px]" />
          <span className="text-[18px]">Jelajahi</span>
        </a>
        <a href="" className="flex items-center py-[12px] mb-[10px]   gap-x-3">
          <MdOutlineSlideshow className="text-[30px]" />
          <span className="text-[18px]">Reels</span>
        </a>
        <a href="" className="flex items-center py-[12px] mb-[10px]   gap-x-3">
          <BiMessageRoundedMinus className="text-[30px]" />
          <span className="text-[18px]">Pesan</span>
        </a>
        <a href="" className="flex items-center py-[12px] mb-[10px]   gap-x-3">
          <AiOutlineHeart className="text-[30px]" />
          <span className="text-[18px]">Notifikasi</span>
        </a>
        <a href="" className="flex items-center py-[12px] mb-[10px]   gap-x-3">
          <CgAddR className="text-[30px]" />
          <span className="text-[18px]">Buat</span>
        </a>
        <a href="" className="flex items-center py-[12px] mb-[10px]   gap-x-3">
          <div className="w-[30px] h-[30px] bg-white rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552234994-66ba234fd567?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="avatar"
              className="object-cover object-bottom w-full"
            />
          </div>
          <span className="text-[18px]">Profil</span>
        </a>
        <button type="button" className="flex items-center gap-x-3 mt-[32px]">
          <FiMenu className="text-[30px]" />
          <span className="text-[18px]">Lainya</span>
        </button>
      </div>
    </div>
  );
}

export default SideNav;
