import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import ExpandedSidebar from "@/components/Sidebar/ExpandedSidebar";
import React from "react";
import EditProfileComponent from "@/components/Navbar/EditProfileComponent";
import UserListContainer from "@/components/UserListComponents/UserListContainer";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Container = () => {
    const { expandedSidebarShow } = useSelector(
        (state: RootState) => state.ExpandedSidebarShow
      );
  return (
    <div className="w-full min-h-screen bg-[#ebeef0]">
      <Navbar />
      <EditProfileComponent />
      <Sidebar />
      <ExpandedSidebar />

      <div className={`w-full pt-[100px] transition-all duration-500 ${expandedSidebarShow ? 'pl-[240px]' : 'pl-[20px] 700px:pl-[90px]'} pr-[20px] pb-[20px]`}>
<UserListContainer />
      </div>
      </div>
  )
}

export default Container