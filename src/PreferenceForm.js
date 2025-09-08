import React,{useState} from "react";

function PreferenceForm(){
    const[preference,setPreference]=useState("");
    const[newsletter,setNewsletter]=useState(false);

    function handleSubmit(e){
        e.preventDefault();
        alert(`Preference: ${preference} NewsLetter: ${newsletter ? "Yes" : "No"}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Preferencce Form</h2>
            <label>
                Choose Theme:
                <select value={preference} onChange={(e) =>setPreference(e.target.value)}>
                    <option value="">Select</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </label>
            <br/><br/>
            <label>
                <input
                    type="checkbox"
                    checked={newsletter}
                    onChange={(e) =>setNewsletter(e.target.checked)}
                />
                Subscribe to NewsLetter..
            </label>
            <br/><br/>
            <button type="submit">Save</button>
        </form>
    );
}

export default PreferenceForm;