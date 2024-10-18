// TODO: Link this to AUTHORIZED Route <----------------------------------------------------------
import "./index.css"
import React, { useState, useEffect } from 'react';

export default function Profile() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:8000/getuser.php', {
                    method: 'POST',
                    body: JSON.stringify({
                        id: 1,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    const result = await response.json(); // assuming the response is in JSON format
                    setData(result); // Update the state with fetched data
                } else {
                    console.error("Failed to fetch data");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false); // Stop loading state
            }
        }

        fetchData();
    }, []); // Empty dependency array means this runs once when the component mounts

    if (loading) {
        return <p>Loading...</p>; // Display this while fetching data
    }

    if (!data) {
        return <p>No data found.</p>; // Display this if there's no data
    }

    return (
        <>
            <p>Hi, {data.username}</p> {/* Use the fetched data */}
        </>
    );
}
