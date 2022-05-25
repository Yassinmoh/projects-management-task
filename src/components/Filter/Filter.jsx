import React from 'react'
import './Filter.css'
import { MdOutlineFilterAlt, MdSort } from 'react-icons/md'




const Filter = () => {
    return (
        <>
            <div className="filter-section">
                <div className="searsh">
                    <h5>جميع المشروعات</h5>
                    <form action="">
                        <input type="searsh" placeholder='بحث جميع المشروعات' className="searsh-inp" />
                    </form>
                </div>
                <div className="sort">
                    <span>
                        <MdOutlineFilterAlt />
                        فلتر
                    </span>
                    <span>
                        <MdSort />
                        تصنيف
                    </span>
                    <button>مشروع جديد</button>
                </div>
            </div>
        </>
    )
}

export default Filter