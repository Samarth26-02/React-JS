import React,{useState} from "react";

function RegistrationForm(){
    const[formData, setFormData]=useState({
        name:"",
        email:"",
        password:"",
        gender:"",
        skills:[],
    });

    function handleChange(event){
        const {name,value,type,checked}=event.target;
        if(type=== "checkbox"){
           setFormData((prev) =>{
             if(checked){
                return {...prev,skills:[...prev.skills,value]};
            }else{
                return {...prev,skills:prev.skills.filter((skill) =>skill !== value)};
            }
           });
        }else{
            setFormData((prev) =>({
                ...prev,
                [name]:value
            }));
        }
    }
    function handleSubmit(event){
        event.preventDefault();
        alert(`Name: ${formData.name} Email: ${formData.email} Password: ${formData.password} Gender: ${formData.gender} Skills: ${formData.skills.join(",")}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Registration Form:</h2>
            <input 
                type="text"
                name="name"
                placeholder="Enter Name..."
                value={formData.name}
                onChange={handleChange}
            />
            <br/><br/>

            <input
                type="text"
                name="email"
                placeholder="Enter Email..."
                value={formData.email}
                onChange={handleChange}
            />
            <br/><br/>

            <input
                type="password"
                name="password"
                placeholder="Enter Password..."
                value={formData.password}
                onChange={handleChange}
            />
            <br/><br/>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender==="Male"}
                    onChange={handleChange}
                />Male
            </label>
            <br/><br/>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender==="Female"}
                    onChange={handleChange}
                />Female
            </label>
            <br/><br/>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formData.gender==="Other"}
                    onChange={handleChange}
                />Other
            </label>
            <br/><br/>

            <label>
                <input
                    type="checkbox"
                    name="skills"
                    value="Java"
                    checked={formData.skills.includes("Java")}
                    onChange={handleChange}
                />Java
            </label>

            <label>
                <input
                    type="checkbox"
                    name="skills"
                    value="SQL"
                    checked={formData.skills.includes("SQL")}
                    onChange={handleChange}
                />SQL
            </label>

            <label>
                <input
                    type="checkbox"
                    name="skills"
                    value="React"
                    checked={formData.skills.includes("React")}
                    onChange={handleChange}
                />React
            </label>
            <br/><br/>

            <button type="submit">Submit</button>
        </form>
    );
}

export default RegistrationForm;