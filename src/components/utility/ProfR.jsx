import React, { useState, useEffect } from "react";
import './profR.css'; 
import logo from '../../assets/logo1.png';
import { useNavigate } from "react-router-dom";

export default function ProfR({ user }) {
    const [res, setRes] = useState({});
    const [editedPicture, setEditedPicture] = useState("");
    const [editing, setEditing] = useState(false);
    const [editedName, setEditedName] = useState("");
    const [editedEmail, setEditedEmail] = useState("");
    const [editedPhone, setEditedPhone] = useState("");
    const [editedPolicy, setEditedPolicy] = useState(false);
    const [editedTillNum, setEditedTillNum] = useState("");
    const [editedAmbience, setEditedAmbience] = useState("");
    const [editedCuisine, setEditedCuisine] = useState("");
    const [editedPriceRange, setEditedPriceRange] = useState("");
    const [editedRatings, setEditedRatings] = useState("");

    useEffect(() => {
        // Fetch data for profile details
        fetch('https://backendfood-co7z.onrender.com/restaurants/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                setRes(data);
                setEditedPicture(data.picture);
                setEditedName(data.name);
                setEditedEmail(data.email);
                setEditedPhone(data.phone.toString());
                setEditedPolicy(data.policy);
                setEditedTillNum(data.till_num.toString());
                setEditedAmbience(data.ambience);
                setEditedCuisine(data.cuisine);
                setEditedPriceRange(data.price_range);
                setEditedRatings(data.ratings.toString());
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleEditSubmit = () => {
        const updatedData = {
            picture: editedPicture,
            name: editedName,
            email: editedEmail,
            phone: parseInt(editedPhone),
            policy: editedPolicy,
            till_num: parseInt(editedTillNum),
            ambience: editedAmbience,
            cuisine: editedCuisine,
            price_range: editedPriceRange,
            ratings: parseFloat(editedRatings),
        };

        fetch('https://backendfood-co7z.onrender.com/restaurants/1', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            setRes(data);
            setEditedPicture(data.picture);
            setEditedName(data.name);
            setEditedEmail(data.email);
            setEditedPhone(data.phone.toString());
            setEditedPolicy(data.policy);
            setEditedTillNum(data.till_num.toString());
            setEditedAmbience(data.ambience);
            setEditedCuisine(data.cuisine);
            setEditedPriceRange(data.price_range);
            setEditedRatings(data.ratings.toString());
        })
        .catch(error => {
            console.error("Error updating data:", error);
        });

        // Set editing mode to false
        setEditing(false);
    };

    const nav = useNavigate();

    return (
        <div className="Chwey-profile-container">
            <div className="Chwey-profile-header">
                <img src={logo} alt="logo" className="Chwey-profile-logo" onClick={() => nav('/restaurant/dashboard')} />
            </div>
            <div className="Chwey-profile-main">
                <div className="Chwey-profile-display">
                    <div className="Chwey-profile-details">
                        <h2>{res.name}</h2>
                        <div className="Chwey-profile-picture">
                            {editing ? (
                                <input type="url" value={editedPicture} onChange={(e) => setEditedPicture(e.target.value)} />
                            ) : (
                                <img src={editedPicture} alt="Profile" className="Chwey-profile-profile-image" />
                            )}
                        </div>
                        {editing ? (
                            <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                        ) : (
                            <p>Name: {editedName}</p>
                        )}
                        {editing ? (
                            <input type="email" value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} />
                        ) : (
                            <p>Email: {editedEmail}</p>
                        )}  
                        {editing ? (
                            <input type="tel" value={editedPhone} onChange={(e) => setEditedPhone(e.target.value)} />
                        ) : (
                            <p>Phone: {editedPhone}</p>
                        )}
                        {editing ? (
                            <label>
                                Policy: <input type="checkbox" checked={editedPolicy} onChange={() => setEditedPolicy(!editedPolicy)} />
                            </label>
                        ) : (
                            <p>Policy: {editedPolicy ? "Yes" : "No"}</p>
                        )}
                        {editing ? (
                            <input type="number" value={editedTillNum} onChange={(e) => setEditedTillNum(e.target.value)} />
                        ) : (
                            <p>Till Number: {editedTillNum}</p>
                        )}
                    </div>
                    <div className="Chwey-profile-address">
                        {editing ? (
                            <input type="text" value={editedAmbience} onChange={(e) => setEditedAmbience(e.target.value)} />
                        ) : (
                            <p>Ambience: {editedAmbience}</p>
                        )}
                    </div>
                    <div className="Chwey-profile-cuisine">
                        {editing ? (
                            <input type="text" value={editedCuisine} onChange={(e) => setEditedCuisine(e.target.value)} />
                        ) : (
                            <p>Cuisine: {editedCuisine}</p>
                        )}
                    </div>
                    <div className="Chwey-profile-price-range">
                        {editing ? (
                            <input type="text" value={editedPriceRange} onChange={(e) => setEditedPriceRange(e.target.value)} />
                        ) : (
                            <p>Price Range: {editedPriceRange}</p>
                        )}
                    </div>
                    {/* <div className="Chwey-profile-ratings">
                        {editing ? (
                            <input type="number" step="0.1" value={editedRatings} onChange={(e) => setEditedRatings(e.target.value)} />
                        ) : (
                            <p>Rating: {editedRatings}</p>
                        )}
                    </div> */}
                    <div className="Chwey-profile-buttons">
                        {editing ? (
                            <button className="Chwey-profile-save-button" onClick={handleEditSubmit}>Save</button>
                        ) : (
                            <button className="Chwey-profile-edit-button" onClick={() => setEditing(true)}>Edit</button>
                        )}
                    </div>
                </div>
                
            </div>
        </div>
    );
}
