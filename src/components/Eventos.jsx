import React, { Fragment, useState } from 'react'

const Eventos = () => {

    const [texto, setTexto] = useState ("Textos es")

    const eventoClick = () =>{
        console.log("me diste clic")
        setTexto("hh")
    }

    return (
        <Fragment>
            <hr />
            <h2> { texto }</h2>
            <button onClick={ () =>eventoClick()}>Click</button>
        </Fragment>
    )
}

export default Eventos
