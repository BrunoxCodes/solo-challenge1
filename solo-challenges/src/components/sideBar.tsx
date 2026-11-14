import { motion } from "motion/react";
import useToggle from "../customHooks/useToggle";

export default function SideBar() {
    const {toggled, handleToggle} = useToggle()
  return (
    <div className="relative h-screen w-full transition-all">
      <motion.div className={`sideBar border-r border-gray-200 bg-white 
    box-border h-screen absolute left-0 top-0 
    shadow-sm p-4`} animate={{
      width: toggled ? "120px" : "240px"
    }}
    transition={{
      duration: 0.3,
      ease: "easeInOut"
    }}>

        <button className="w-full bg-blue-500 hover:bg-blue-700 
        text-white font-semibold cursor-pointer py-2 px-3 rounded-lg 
        transition-colors duration-300" 
        onClick={handleToggle}>
          {toggled ? "Expand" : "Collapse"}
          </button>
        <motion.nav 
        className={`flex flex-col gap-2 mt-4`} 
        animate={{opacity: toggled ? 0 : 1 }} 
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}>
            <a href="#" className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-100 hover:text-blue-600 transition-all duration-300">Home</a>
            <a href="#" className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-100 hover:text-blue-600 transition-all duration-300">About</a>
            <a href="#" className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-100 hover:text-blue-600 transition-all duration-300">Services</a>
            <a href="#" className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-100 hover:text-blue-600 transition-all duration-300">Contact</a>
            <a href="#" className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-100 hover:text-blue-600 transition-all duration-300">Footer</a>
        </motion.nav>
      </motion.div>
    </div>
  );
};