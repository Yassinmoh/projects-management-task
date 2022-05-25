import React from 'react'
import './Navbar.css'
import { CgMenuGridR } from 'react-icons/cg'
import { BsBell } from 'react-icons/bs'
import { TiArrowSortedDown } from 'react-icons/ti'
import { FiArrowLeftCircle } from 'react-icons/fi'





const Navbar = () => {
    return (
        <>
            <nav>
            <div className="nav-right">
                <div className="nav-right-top" >
                    <CgMenuGridR />
                    <h5>برمجية إدارة الوثائق</h5>
                </div>
                <div className="nav-right-buttom">
                    <span>وزارة البيئة والمياه والزراعة</span>
                    <span>
                        <FiArrowLeftCircle/>
                        الرئيسيه
                    </span>
                </div>
            </div>

            <div className="nav-left">
                <BsBell/>
                <div className="nav-avatar">
                    <img src='/profile.jpg' alt='profile'/>
                </div>
                <div className="nav-info">
                <h5>يس محمد</h5>
                <TiArrowSortedDown />
                </div>
            </div>
            </nav>
            
        </>
    )
}

export default Navbar