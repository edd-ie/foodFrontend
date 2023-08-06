import React, { useState, useEffect } from "react";
import './profR.css';
import logo from '../../assets/logo1.png';
import { useNavigate } from "react-router-dom";

export default function ProfR({ user }) {
    const [res, setRes] = useState({});
    const [editing, setEditing] = useState(false);
    const [editedCompanyName, setEditedCompanyName] = useState("");
    const [editedUsername, setEditedUsername] = useState("");
    const [editedFirstName, setEditedFirstName] = useState("");
    const [editedLastName, setEditedLastName] = useState("");
    const [editedAddress, setEditedAddress] = useState("");
    const [editedCity, setEditedCity] = useState("");
    const [editedCountry, setEditedCountry] = useState("");
    const [editedPostalCode, setEditedPostalCode] = useState("");
    const [editedAbout, setEditedAbout] = useState("");
    const [editedQuote, setEditedQuote] = useState("");

    useEffect(() => {
        fetch('https://backendfood-co7z.onrender.com/restaurants/1')
            .then(response => response.json())
            .then(data => {
                setRes(data);
                setEditedCompanyName(data.name);
                setEditedUsername(user.username);
                setEditedFirstName(user.firstName);
                setEditedLastName(user.lastName);
                setEditedAddress(data.ambience);
                setEditedCity(data.latitude.toString());
                setEditedCountry(data.longitude.toString());
                setEditedPostalCode(data.till_num.toString());
                setEditedAbout(data.cuisine);
                setEditedQuote(data.ratings.toString());
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [user.username, user.firstName, user.lastName]);

    const handleEditSubmit = () => {
 
        const updatedData = {
            name: editedCompanyName,
            ambience: editedAddress,
            latitude: parseFloat(editedCity),
            longitude: parseFloat(editedCountry),
            till_num: parseInt(editedPostalCode),
            cuisine: editedAbout,
            ratings: parseFloat(editedQuote),
        };

        fetch('https://backendfood-co7z.onrender.com/restaurants/1', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
        .then(response => response.json())
        .then(data => {
            
            setRes(data);
            setEditedCompanyName(data.name);
            setEditedAddress(data.ambience);
            setEditedCity(data.latitude.toString());
            setEditedCountry(data.longitude.toString());
            setEditedPostalCode(data.till_num.toString());
            setEditedAbout(data.cuisine);
            setEditedQuote(data.ratings.toString());
        })
        .catch(error => {
            console.error("Error updating data:", error);
        });

        // Set editing mode to false
        setEditing(false);
    };

    const nav = useNavigate();

    return (
        <div className="ChweyreProf">
            <div className="ChweyresProfHead">
                <img src={logo} alt="logo" className="ChweyresProfLogo" onClick={() => nav('/restaurant/dashboard')} />
            </div>
            <div className="ChweyresProfMain">
                <div className="ChweyresProfDisplay">
                    <div className="ChweyresCompany">
                        <h2>{res.name}</h2>
                        {editing ? (
                            <input type="text" value={editedUsername} onChange={(e) => setEditedUsername(e.target.value)} />
                        ) : (
                            <p>Username: {user.username}</p>
                        )}
                        <p>Email: {res.email}</p>
                        <p>Owner: {res.owner}</p>
                    </div>
                    {/* <div className="ChweyresNames">
                        {editing ? (
                            <input type="text" value={editedFirstName} onChange={(e) => setEditedFirstName(e.target.value)} />
                        ) : (
                            <p>First Name: {user.firstName}</p>
                        )}
                        {editing ? (
                            <input type="text" value={editedLastName} onChange={(e) => setEditedLastName(e.target.value)} />
                        ) : (
                            <p>Last Name: {user.lastName}</p>
                        )}
                    </div> */}
                    <div className="ChweyresAddress">
                        {editing ? (
                            <input type="text" value={editedAddress} onChange={(e) => setEditedAddress(e.target.value)} />
                        ) : (
                            <p>Address: {res.ambience}</p>
                        )}
                    </div>
                    <div className="ChweyresLocation">
                        <p>City: {editing ? <input type="text" value={editedCity} onChange={(e) => setEditedCity(e.target.value)} /> : res.latitude}</p>
                        <p>Country: {editing ? <input type="text" value={editedCountry} onChange={(e) => setEditedCountry(e.target.value)} /> : res.longitude}</p>
                        <p>Postal Code: {editing ? <input type="text" value={editedPostalCode} onChange={(e) => setEditedPostalCode(e.target.value)} /> : res.till_num}</p>
                    </div>
                    <div className="ChweyresAbout">
                        {editing ? (
                            <textarea value={editedAbout} onChange={(e) => setEditedAbout(e.target.value)} />
                        ) : (
                            <p>About Me: {res.cuisine}</p>
                        )}
                    </div>
                    {editing ? (
                        <button className="ChweyresSaveButton" onClick={handleEditSubmit}>Save</button>
                    ) : (
                        <button className="ChweyresEditButton" onClick={() => setEditing(true)}>Edit</button>
                    )}
                </div>
                <div className="ChweyresProfile">
                    <img src={res.picture} alt="Profile" className="ChweyresProfileImage" />
                    <h3>{res.owner}</h3>
                    <p>CEO/Co-founder</p>
                    <div>
                        {editing ? (
                            <textarea value={editedQuote} onChange={(e) => setEditedQuote(e.target.value)} />
                        ) : (
                            <p>Quote: {res.ratings}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
