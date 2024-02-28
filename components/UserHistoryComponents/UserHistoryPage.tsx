import EditProfileComponent from '@/components/Navbar/EditProfileComponent'
import Navbar from '@/components/Navbar/Navbar'
import ExpandedSidebar from '@/components/Sidebar/ExpandedSidebar'
import Sidebar from '@/components/Sidebar/Sidebar'
import Container from '@/components/UserHistoryComponents/Container'
import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'

const UserHistoryPage = () => {
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
        <Container />
      </div>
      </div>
  )
}

export default UserHistoryPage