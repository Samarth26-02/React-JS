import React, {useState} from "react";

function UserForm(){
    const[formData,setFormData]=useState({
        name:"",
        age:"",
        email:""
    });

    function handleChange(event){
        const {name,value}=event.target;
        setFormData((prev) =>({
            ...prev,
            [name]:value
        }));
    }

    function handleSubmit(event){
        event.preventDefault();
        alert (`Name:${formData.name} Age: ${formData.age} Email: ${formData.email}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>User Form:</h2>
            <input 
                type="text"
                name="name"
                placeholder="Enter Your Name..."
                value={formData.name}
                onChange={handleChange}
            />
            <br/><br/>

            <input 
                type="number"
                name="age"
                placeholder="Enter Your Age..."
                value={formData.age}
                onChange={handleChange}
            />
            <br/><br/>

            <input
                type="text"
                name="email"
                placeholder="Enter Your Email..."
                value={formData.email}
                onChange={handleChange}
            />
            <br/><br/>

            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
}

export default UserForm;