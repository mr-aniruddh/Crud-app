// import React, { useState } from "react";
// import axios from 'axios';

// function CreateUser () {
//     const [name, setName] = useState();
//     const [email, setEmail] = useState();
//     const [age, setAge] = useState();

//     const Sumbit = (e) => {
//         e.preventDefault();
//         axios.post("https://localhost:3001/createUser", {name, email, age})
//         .them(result => console.log(result))
//         .catch(err => console.log(err));
//     };
//     return (
//         <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//             <div className="w-50 bg-white rounded p-3">
//                 <form onSubmit={Sumbit}>
//                     <h2>Add User</h2>
//                     <div className="mb-2">
//                         <label htmlFor="">Name</label>
//                         <input type="text" placeholder='Enter Name' className="form-control"
//                        onChange={(e) => setName(e.target.value)}/>
//                     </div>
//                         <div className="mb-2">
//                             <label htmlFor="">Email</label>
//                             <input type="email" placeholder='Enter Email' className="form-control"
//                             onChange={(e) => setEmail(e.target.value)}/>
//                         </div>
//                             <div className="mb-2">
//                                 <label htmlFor="">Age</label>
//                                 <input type="number" placeholder='Enter Age' className="form-control"
//                                 onChange={(e) => setAge(e.target.value)}/>
//                           </div >
//                           <button className="btn btn-success">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default CreateUser;


import React, { useState } from "react";
import axios from 'axios';

function CreateUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", { name, email, age }) // ✅ Fixed URL & Typo
        .then(result => console.log(result)) // ✅ Changed `.them()` to `.then()`
        .catch(err => console.error("Error:", err));
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label>Name</label>
                        <input 
                          type="text" 
                          placeholder="Enter Name" 
                          className="form-control"
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div className="mb-2">
                        <label>Email</label>
                        <input 
                          type="email" 
                          placeholder="Enter Email" 
                          className="form-control"
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="mb-2">
                        <label>Age</label>
                        <input 
                          type="number" 
                          placeholder="Enter Age" 
                          className="form-control"
                          value={age} 
                          onChange={(e) => setAge(e.target.value)} 
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;
