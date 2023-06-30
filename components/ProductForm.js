import axios from 'axios';
import { useState } from 'react';

export function ProductForm() {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0
    })

    //Para hacer que el formulario envie la informacion por medio del boton.
    //creamos una funcion llamada handlesubmit, que va a recibir un objeto event (e) que va a ser la informacion del evento
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('/api/products', product)
        console.log(res);
    };

    const handleChange = ({target: {name, value}}) => 
        setProduct({...product, [name]: value});
    

    return (
        <div className="w-full max-w-xs">
            <form onSubmit={handleSubmit} className='bg-white shadow-md px-8 pt-6 pb-8 mb-4'> {/* en el form colocamos onSubmit */}
                <label htmlFor='name'>Nombre</label>
                <input type="text" name="name" onChange={handleChange} className='shadow border rounded py-2 px-3 text-gray-700'/>

                <label htmlFor="price">Precio</label>
                <input type='text' name='price' id='price' onChange={handleChange} className='shadow border rounded py-2 px-3 text-gray-700'/>

                <label htmlFor='description'>Descripcion</label>
                <textarea name='description' rows="2" onChange={handleChange} className='shadow border rounded py-2 px-3 text-gray-700'></textarea>

                <button className='bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold text-white'>Guardar Producto</button>
            </form>
        </div>
    )
}