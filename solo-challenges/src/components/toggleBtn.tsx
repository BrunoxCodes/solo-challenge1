import useToggle from "../customHooks/useToggle";

export default function ToggleBtn() {
  const {toggled, handleToggle} = useToggle()
  return (
    <>
    <input type={toggled ? "password" : "text"} placeholder="Enter your password...."  className="border-b px-5 border-[#ccc] outline-none"/>
    <button onClick={handleToggle} className="cursor-pointer border border-[#ccc] px-5">{toggled ? "Show" : "Hide"}</button>
    </>
  );
};