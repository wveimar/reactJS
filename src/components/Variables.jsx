import React from 'react'

const Variables = () => {
    const saludo = "hola desde constante"
    const imagen = "https://media.istockphoto.com/photos/standing-tall-picture-id143918363?k=6&m=143918363&s=612x612&w=0&h=L9Ia9LQs0w1LnDcNRwU_FMI_bADnw366GFBtVpVAq7k="
    return (
        <div>
            <h2>nuevo coponente {saludo} </h2>
            <img src={imagen} alt="" />
        </div>
    )
}

export default Variables
