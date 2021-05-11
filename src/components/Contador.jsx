import React from 'react'

const Contador = () => {
    const [contador, setContador] = React.useState(0)
    const aumentar = () => {
        console.log("click")
        setContador (contador + 1)
    }
    return (
        <div>
            <h2>Contador</h2>
            <h3> nemero aumentado:  {contador}</h3>
            <h4>
                {
                    contador > 2 ? "es mayor que dos": "es menor que 2"
                }
            </h4>
            <button onClick={()=>aumentar()}>Aumentar</button>
            
        </div>
    )
}

export default Contador
