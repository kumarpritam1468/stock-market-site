import { BsTwitterX } from "react-icons/bs";
import { RiFacebookBoxFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='min-h-96 w-full px-6 border-t-2 border-t-gray-200 py-8'>
            <div className=' w-full max-w-[1100px] mx-auto flex max-sm:flex-col max-sm:gap-8 justify-around flex-wrap'>
                <div className=" flex flex-col gap-4">
                    <img src="/images/logo.svg" alt="Zerodha logo" width={140} />
                    <p className=" text-sm text-gray-500">© 2010 - 2024, Zerodha Broking Ltd. <br />
                        All rights reserved.</p>
                    <div className=" flex gap-4 text-xl text-gray-500">
                        <BsTwitterX className=" cursor-pointer hover:text-black" />
                        <RiFacebookBoxFill className=" cursor-pointer hover:text-blue-500" />
                        <IoLogoInstagram className=" cursor-pointer hover:text-pink-500" />
                        <FaLinkedinIn className=" cursor-pointer hover:text-blue-500" />
                    </div>

                    <div className=" h-[1px] bg-gray-200 w-4/5 my-1"></div>

                    <div className=" flex gap-4 text-xl text-gray-500">
                        <GrYoutube className=" cursor-pointer hover:text-red-500" />
                        <FaWhatsapp className=" cursor-pointer hover:text-green-500" />
                        <FaTelegram className=" cursor-pointer hover:text-blue-500" />
                    </div>
                </div>

                <div className=" flex flex-col items-start gap-2">
                    <h3 className=" font-semibold text-xl mb-3">Company</h3>

                    <p className="footer-p">About</p>
                    <p className="footer-p">Pricing</p>
                    <p className="footer-p">Products</p>
                    <p className="footer-p">Referral programme</p>
                    <p className="footer-p">Careers</p>
                    <p className="footer-p">Zerodha.tech</p>
                    <p className="footer-p">Press & media</p>
                    <p className="footer-p">Zerodha Cares (CSR)</p>
                </div>
                <div className=" flex flex-col items-start gap-2">
                    <h3 className=" font-semibold text-xl mb-3">Support</h3>

                    <p className="footer-p">Contact us</p>
                    <p className="footer-p">Support portal</p>
                    <p className="footer-p">Z-Connect blog</p>
                    <p className="footer-p">List of charges</p>
                    <p className="footer-p">Downloads & resources</p>
                    <p className="footer-p">Videos</p>
                    <p className="footer-p">Market overview</p>
                    <p className="footer-p">How to file a complaint?</p>
                    <p className="footer-p">Status of your complaints</p>
                </div>
                <div className=" flex flex-col items-start gap-2">
                    <h3 className=" font-semibold text-xl mb-3">Company</h3>

                    <p className="footer-p">About</p>
                    <p className="footer-p">Pricing</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer