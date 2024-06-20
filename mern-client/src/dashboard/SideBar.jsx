import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import userImg from "../assets/profile.jpg";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";


const SideBar = () => {
  const {user} = useContext(AuthContext);

  return (
    <Sidebar className="bg-gray-300 rounded-2xl mt-20 ml-10 min-w-80" aria-label="Sidebar with content separator example">
      <div>
        <img src={user?.photoURL || userImg} alt="profile" className="w-20 h-20 rounded-full mx-auto" />
        <p className="text-center text-lg font-semibold mt-2">{user?.displayName || "Demo User"}</p>
      </div>
      <Sidebar.Items className="">
        <Sidebar.ItemGroup className="flex flex-col items-start ml-4 ">
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/profile" icon={HiUser}>
            Profile
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Login In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup className="flex flex-col items-start ml-4">
          <Sidebar.Item href="/" icon={HiChartPie}>
            Home
          </Sidebar.Item>
          <Sidebar.Item href="/shop" icon={HiViewBoards}>
            Shop
          </Sidebar.Item>
          <Sidebar.Item href="/about" icon={HiSupport}>
            About
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar