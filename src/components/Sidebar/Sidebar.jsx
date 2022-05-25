import React from 'react'
import './Sidebar.css'
import { BiLogIn } from 'react-icons/bi'
import { BsArrowRightCircle } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai'
import { MdOutlineStorefront, MdSupervisorAccount } from 'react-icons/md'





const Sidebar = () => {
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0  text-dark sidebar" style={{ width: "270px", minHeight: "120vh", direction: "rtl" }}>
                <div className="logo">
                    <a href="/">
                        <img src="/logo.png" alt="logo" />
                    </a>
                </div>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className=" main-icons">
                        <a href="#" className="nav-link text-dark " aria-current="page">
                            <AiOutlineHome />
                            <span>الرئيسيه</span>
                        </a>
                    </li>
                    <li className=" main-icons">
                        <a href="#" className="nav-link text-dark active">
                            <MdOutlineStorefront />
                            <span> إدارة المشروعات</span>
                        </a>
                    </li>
                    <li className=" main-icons">
                        <a href="#" className="nav-link text-dark">
                            <MdSupervisorAccount />
                            <span> إدارة المستخدمين</span>
                        </a>
                    </li>
                    <li className=" main-icons">
                        <a href="#" className="nav-link text-dark">
                            <AiOutlineSetting />
                            <span>إعدادات النظام</span>
                        </a>
                    </li>
                </ul>
                <div className="logOut">
                    <div>
                        <BiLogIn className="log-svg" />
                        <strong>تسجيل الخروج</strong>
                    </div>
                    <BsArrowRightCircle className="arr-svg" />
                </div>
            </div>
        </>

    )
}

export default Sidebar