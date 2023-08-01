import React, { useEffect, useState } from "react";
import "./Staff.css"
import NavR from "../../utility/NavR";
//import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'




//{id: 1, name: 'Jeeves', title: 'manager', restaurant_id: 1, active: true}

export default function Staff({user}) {
    const [staff, setStaff] = useState([])

    useEffect(() => {
        fetch(`https://backendfood-co7z.onrender.com/restaurant/staff/${user.id}`)
        .then(res => res.json())
        .then(data => {
            setStaff(data)
        })
    },[])

    const staffList = staff.map(staff => {
        let side = staff.active ? 'label-live' : 'label-off'
        return(
            <tr  key={staff.id+ staff.name} className=".eTableRow">
                <td key={staff.id+ staff.name+0} className="staffName" data-id={staff.id}>{staff.name}</td>
                <td key={staff.id+ staff.name+1}>{staff.title}</td>
                <td className={`label ${side}`} key={staff.id+ staff.name+2}>{staff.active ? 'Yes' : 'No'}</td>
                <td  key={staff.id+ staff.name+3}>
                    <span className="actions">
                        <span className="material-symbols-sharp editIcon">
                        edit
                        </span>
                        <span className="material-symbols-sharp eDeleteIcon">
                        delete
                        </span>
                    </span>
                </td>
            </tr>
        )
    })

    
    return(
        <div id="eStaffContainer">
            <NavR />

            <div className="eStaffContent">
                <table className="eTable">
                    <thead>
                        <tr>
                            <th className="expand">Name</th>
                            <th>Title</th>
                            <th>Active</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staffList}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
