import React from 'react'

function User(prop) {
    return (
        <>
        <div>
            <h1>Employee: {prop.name} </h1>
            <p> {prop.role ? prop.role : "no role"} <br/> {prop.experience ? prop.experience : "no experience"} </p>

        </div>
        </>
    )
}

export default User
