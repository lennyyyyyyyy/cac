import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthProvider';
import "./index.css"
import { config } from '../api'
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: "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",
    dangerouslyAllowBrowser: true,
 });

async function getCoins(journal) {
    const completion = await groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `You are a helpful AI Assistant that reads journal entries. Given a journal entry, you are to hand out coins. Carbon coins relate to reducing carbon emissions, each equivalent to 1 kilogram of carbon. Admire coins relate to appreciating nature, each approximately equivalent to 5 minutes of a nature walk. Sustain coins relate to promoting sustainability, each equivalent to recycling 5 items. Unity coins relate to collaboration to help nature, each equivalent to involving one person in environmental efforts. Use your knowledge to map the ideas performed in the journal to "carboncoins", "admirecoins", "sustaincoins", and "unitycoins" fields of your output JSON.`
            },
            {
                role: "user",
                content: `Journal: ${journal}.`,
            }
        ],
        response_format: {"type": "json_object"},
        model: "gemma-7b-it",
    })
    return JSON.parse(completion.choices[0].message.content);
}

export default function Journal() {
    const [journals, setJournals] = useState(null);
    const { userId, loading } = useAuth();

    const [formData, setFormData] = useState({ // temporary storage for entered data
        id: userId,
        entry: "",
    });

    const [errors, setErrors] = useState({}); // displays errors
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(config.API_ADDR + '/getjournals.php', {
                method: 'POST',
                body: JSON.stringify({
                    userid: userId,
                })
            });
            const result = await response.json();
            setJournals(result);
        };
    
        fetchData();
    }, []);

    if (!journals) {
        return <div>Loading...</div>;
    }


    const handleChange = (e) => { // called when one field is changed
        const { name, value } = e.target;
    
        setFormData({ // updates temporary storage
          ...formData,
          [name]: value,
        });
    
        if (submitted) {
          validateField(name, value);
        }
    };

    const validateField = (name, value) => { // checks for errors for one field at a time
        let error = '';
    
        if (name === 'entry' && !value) {
          error = 'Journal entry is required.';
        }
    
        setErrors((prevErrors) => ({ // Update error state for the specific field
          ...prevErrors,
          [name]: error,
        }));
    };

    const handleSubmit = async (e) => { // called when entire form is submitted
        e.preventDefault();
        setSubmitted(true);
    
        const newErrors = validateForm();
    
        if (Object.keys(newErrors).length === 0) { // TODO: FIX WITH BACK END

            const coins = await getCoins(formData.entry);
            console.log(coins);

            await fetch(config.API_ADDR + '/addcoins.php', {
                method: 'POST',
                body: JSON.stringify({
                    id: userId,
                    unitycoins: coins.unitycoins,
                    carboncoins: coins.carboncoins,
                    admirecoins: coins.admirecoins,
                    sustaincoins: coins.sustaincoins,
                }),
            });

            const response2 = await fetch(config.API_ADDR + '/addjournal.php', {
                method: 'POST',
                body: JSON.stringify(formData),
            });
            
            const result = await response2.json();
            // if (result) {
            //     window.location.href = `/journal`;
            // }
        }
    };
    
    const validateForm = () => { // checks entire form for errors
        const newErrors = {};

        if (!formData.entry) {
            newErrors.entry = 'Journal entry is required.';
        }
    
        setErrors(newErrors);
        return newErrors;
    }


    let stuff = [];
    for (let i of journals) {
        const timestamp = i.time;
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        
        stuff.push(
            <div className='journal'>
                <div className='journal-date'>{i.date}</div>
                <div className='journal-entry'>{i.entry}</div>
            </div>
        );
    }
    
    return (<>
        <div className="centered-content">
            <h1 className="page-title">Journal</h1>
            <span>Hello! How are you feeling today? Feel free to record any nature-related activities that you've done today!</span>
            <form className="add-comment-form" onSubmit={handleSubmit}>
                <div className="comment-single-row">
                    <textarea
                        rows="5"
                        type="text"
                        placeholder="Journal here!"
                        name="entry"
                        value={formData.entry}
                        onChange={handleChange}
                    />
                    <input className="comment-submit" type="submit" value="Done!"></input>
                </div>
                {errors.entry && (
                    <span className="error-msg">{errors.entry}</span>
                )}
            </form>
            {stuff}
        </div>
        <div className="right-semicircle-bottom-left fun-green"></div>
        <div className="left-semicircle-middle-right fun-pink"></div>
    </>);
}