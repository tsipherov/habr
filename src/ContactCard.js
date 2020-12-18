import React from "react"

function ContactCard({name, imgUrl, phone, email}) {
    return (
        <div className="contact-card">
            <img align="center" src={imgUrl} alt={name}/>
            <h3><font color="#3AC1EF">▍{name}</font></h3>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default ContactCard