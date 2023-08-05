import React, { useEffect, useState } from "react";
import "./Staff.css"
import NavR from "../../utility/NavR";
//import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'




//{id: 1, name: 'Jeeves', title: 'manager', restaurant_id: 1, active: true}

export default function Staff({user}) {
    const [inventoryData, setInventoryData] = useState([]);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [newItem, setNewItem] = useState({ item: '', quantity: '' });
  const [editedItem, setEditedItem] = useState(null);
  const [editedItemName, setEditedItemName] = useState('');
  const [editedItemQuantity, setEditedItemQuantity] = useState('');
  const [deletedItem, setDeletedItem] = useState(null);
  const [restoreTimer, setRestoreTimer] = useState(null);

  useEffect(() => {
    fetch('https://backendfood-co7z.onrender.com/restaurant/staff/1')
      .then(response => response.json())
      .then(data => setInventoryData(data));
  }, []);

  const handleAddItemClick = () => {
    setShowAddItemModal(true);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [name]: value });
  }

  const handleAddItemSubmit = () => {
    if (newItem.item.trim() === '' || newItem.quantity.trim() === '') {
      // Empty item name or quantity, do not submit
      return;
    }

    setInventoryData([...inventoryData, { ...newItem, id: Date.now(), restaurant_id: 1 }]);
    setShowAddItemModal(false);
    setNewItem({ item: '', quantity: '' });
  }

  const handleCancelAdd = () => {
    setShowAddItemModal(false);
    setNewItem({ item: '', quantity: '' });
  }

  const handleEditClick = (item) => {
    setEditedItem(item);
    setEditedItemName(item.name);
    setEditedItemQuantity(item.title);
  }

  const handleEditSubmit = () => {
    setEditedItem(null);
    setInventoryData(prevData =>
      prevData.map(item =>
        item.id === editedItem.id
          ? {
              ...item,
              item: editedItemName !== item.name ? editedItemName : item.name,
              quantity: editedItemQuantity !== item.title ? editedItemQuantity : item.title,
            }
          : item
      )
    );
  }

  const handleDeleteClick = (item) => {
    setDeletedItem(item);
  }

  const handleConfirmDelete = () => {
    setDeletedItem(null);
    setInventoryData(prevData => prevData.filter(item => item.id !== deletedItem.id));
  }

  const handleCancelDelete = () => {
    setDeletedItem(null);
  }

    
    return(
        <div className="MarkInventory">
      <NavR />
      <div className="MarkInventoryContent">
        <table className="MarkInventoryTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map(item => (
              <tr key={item.id}>
                <td style={{ color: 'orange' }}>
                  {editedItem === item ? (
                    <div className="MarkEditItemForm">
                      <input
                        type="text"
                        value={editedItemName}
                        onChange={(e) => setEditedItemName(e.target.value)}
                      />
                    </div>
                  ) : (
                    item.name
                  )}
                </td>
                <td style={{ color: 'white' }}>
                  {editedItem === item ? (
                    <div className="MarkEditItemForm">
                      <input
                        type="number"
                        value={editedItemQuantity}
                        onChange={(e) => setEditedItemQuantity(e.target.value)}
                      />
                    </div>
                  ) : (
                    item.title
                  )}
                </td>
                <td>
                  {editedItem === item ? (
                    <button className={`MarkEditButton editing`} onClick={handleEditSubmit}>
                      Save
                    </button>
                  ) : (
                    <button className="MarkEditButton" onClick={() => handleEditClick(item)}>
                      Edit
                    </button>
                  )}
                </td>
                <td>
                  <button className="MarkDeleteButton" onClick={() => handleDeleteClick(item)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="MarkAddItemButtonContainer">
        <button onClick={handleAddItemClick} className="MarkAddItemButton">Add Item</button>
      </div>

      {showAddItemModal && (
        <div className="MarkAddItemModal">
          <div className="MarkAddItemForm">
            <label htmlFor="item">Item Name:</label>
            <input type="text" id="item" name="item" value={newItem.item} onChange={handleInputChange} />

            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" value={newItem.quantity} onChange={handleInputChange} />

            <button onClick={handleAddItemSubmit} className="MarkSubmitButton">Submit</button>
            <button onClick={handleCancelAdd} className="MarkCancelButton">Cancel</button>
          </div>
        </div>
      )}

      {deletedItem && (
        <div className="MarkDeleteModal">
          <p>Are you sure you want to delete this item?</p>
          <button onClick={handleConfirmDelete} className="MarkConfirmButton">Yes</button>
          <button onClick={handleCancelDelete} className="MarkCancelButton">No</button>
        </div>
      )}
    </div>
    )
}


// const [staff, setStaff] = useState([])

//     useEffect(() => {
//         fetch(`https://backendfood-co7z.onrender.com/restaurant/staff/${user.id}`)
//         .then(res => res.json())
//         .then(data => {
//             setStaff(data)
//         })
//     },[])

//     const staffList = staff.map(staff => {
//         let side = staff.active ? 'label-live' : 'label-off'
//         return(
//             <tr  key={staff.id+ staff.name} className=".eTableRow">
//                 <td key={staff.id+ staff.name+0} className="staffName" data-id={staff.id}>{staff.name}</td>
//                 <td key={staff.id+ staff.name+1}>{staff.title}</td>
//                 <td className={`label ${side}`} key={staff.id+ staff.name+2}>{staff.active ? 'Yes' : 'No'}</td>
//                 <td  key={staff.id+ staff.name+3}>
//                     <span className="actions">
//                         <span className="material-symbols-sharp editIcon">
//                         edit
//                         </span>
//                         <span className="material-symbols-sharp eDeleteIcon">
//                         delete
//                         </span>
//                     </span>
//                 </td>
//             </tr>
//         )
//     })


        // <div id="eStaffContainer">
        //     <NavR />            
        //     <div className="eStaffContent">
        //         {/* <div className="eStaffBar">

        //         </div> */}
        //         <table className="eTable">
        //             <thead>
        //                 <tr>
        //                     <th className="expand">Name</th>
        //                     <th>Title</th>
        //                     <th>Active</th>
        //                     <th>Actions</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {staffList}
        //             </tbody>
        //         </table>
        //     </div>
        // </div>