import { useState } from "react";
import User from "../components/User";






function Home() {
    const [role, setRole] = useState("Software Dev");
 
    return (
        <>
        <input type="text" placeholder="Employees.." />
           <User name="noorjaha" role="web dev" experience="3 years"/>
           <User name="joseph" experience="4 years"/>
           <User name="milli"  experience="7 years"/>
           <User name="nancy" role={role} experience="3 years"/>
        </>
    );
}

export default Home;