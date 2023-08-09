import React, { useEffect, useState } from 'react';
import './Favourites.css';
import NavC from '../../utility/NavC';	

export default function Favourites({ user }) {
    const [favRes, setFavRes] = useState([]);

    useEffect(() => {
        async function fetchFavRes() {
            try {
                const response = await fetch("https://backendfood-co7z.onrender.com/customer/favRes/1");
                const data = await response.json();
                setFavRes(data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        }

        fetchFavRes();
    }, []);

    function handleDelete(id) {
        fetch(`https://backendfood-co7z.onrender.com/customer/favRes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const newFavRes = favRes.filter((item) => item.id !== id);
        setFavRes(newFavRes);
        e.preventDefault();
    }

    return (
        <div className="favourites">
            <NavC/>
            <table id='favRes'>
                <thead id="favHeader">
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Ambience</th>
                        <th>Cuisine</th>
                        <th>Ratings</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {favRes.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <img src={item.restaurant.picture} alt={`Picture of ${item.restaurant.name}`} />
                            </td>
                            <td>{item.restaurant.name}</td>
                            <td>{item.restaurant.email}</td>
                            <td>{item.restaurant.phone}</td>
                            <td>{item.restaurant.ambience}</td>
                            <td>{item.restaurant.cuisine}</td>
                            <td>{item.restaurant.ratings}</td>
                            <td>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );


}
