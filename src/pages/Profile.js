// TODO: Link this to AUTHORIZED Route <----------------------------------------------------------
import "./index.css"
import React, { useState, useEffect } from 'react';
import { getAccountData } from '../api';
import { useAuth } from '../AuthProvider'

export default function Profile() {
    const [data, setData] = useState(null);
    const [loadingPage, setLoadingPage] = useState(true);
    const { userId, loading } = useAuth();

    useEffect(() => {
        async function fetchData() {
            try {
                const storedData = await getAccountData(userId);

                if (storedData) {
                    setData(storedData);
                }
                else {
                    console.error("Failed to fetch data");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoadingPage(false);
            }
        }
        
        fetchData();
    }, [userId]);

    if (loadingPage || loading) {
        return <p>Loading...</p>; // Display this while fetching data
    }

    if (!data) {
        return <p>No data found.</p>; // Display this if there's no data
    }

    return (
        <>
            <div className="centered-content">
                <div className="username">{data.username}</div>
                <a className="profile-button" href="/editprofile">Edit Profile</a>

                <div className="currency-row">
                    <div className="currency">
                        <img src="coins/admirecoin.png" alt="Admire Coin"/>
                        <div className="currency-label">
                            <span className="bolded">Admire Coins:</span>  {data.admirecoins}
                        </div>
                        <div className="currency-description">Admire coins symbolize appreciation and love for nature and the environment.</div>
                    </div>
                    <div className="currency">
                        <img src="coins/carboncoin.png" alt="Carbon Coin"/>
                        <div className="currency-label">
                            <span className="bolded">Carbon Coins:</span>  {data.carboncoins}
                            <div className="currency-description">Carbon coins symbolize actions that reduce carbon emissions and promote environmental sustainability.</div>
                        </div>
                    </div>
                </div>

                <div className="currency-row">
                    <div className="currency">
                        <img src="coins/sustaincoin.png" alt="Sustain Coin"/>
                        <div className="currency-label">
                            <span className="bolded">Sustain Coins:</span>  {data.sustaincoins}
                            <div className="currency-description">Sustain coins symbolize actions focused on reducing pollution and promoting sustainable practices.</div>
                        </div>
                    </div>
                    <div className="currency">
                        <img src="coins/unitycoin.png" alt="Unity Coin"/>
                        <div className="currency-label">
                            <span className="bolded">Unity Coins:</span>  {data.unitycoins}
                            <div className="currency-description">Unity coins symbolize community involvement and collaboration in environmental efforts</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right-semicircle-bottom-left"></div>
            <div className="left-semicircle-middle-right"></div>
        </>
    );
}
