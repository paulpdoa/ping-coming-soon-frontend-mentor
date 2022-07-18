import { FaFacebookF,FaTwitter,FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 items-center w-full p-10">
        <div className="flex justify-center gap-5 items-center blue-text">
            <FaFacebookF className="rounded-full hover:bg-blue-500 hover:text-white h-10 w-10 p-3 transition duration-300 cursor-pointer" />
            <FaTwitter className="rounded-full hover:bg-blue-500 hover:text-white h-10 w-10 p-3 transition duration-300 cursor-pointer" />
            <FaInstagram className="rounded-full hover:bg-blue-500 hover:text-white h-10 w-10 p-3 transition duration-300 cursor-pointer" />
        </div>
        <h1 className="gray-text text-sm">&copy; Copyright Ping. All rights reserved.</h1>
    </footer>
  )
}

export default Footer