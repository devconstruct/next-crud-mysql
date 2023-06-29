import axios from 'axios';

export function ProductForm() {

    //Para hacer que el formulario envie la informacion por medio del boton.
    //creamos una funcion llamada handlesubmit, que va a recibir un objeto event (e) que va a ser la informacion del evento
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('/api/products', {
            name: 'producto 1',
            description: 'algun producto',
            price: 1
        })
        console.log(res);
    };

  return (
    <div className="bg-gray-100">
        <form onSubmit={handleSubmit}> {/* en el form colocamos onSubmit */}
            <label htmlFor='name'>Nombre</label>
            <input type="text" name="name"/>

            <label htmlFor="price">Precio</label>
            <input type='text' name='price' id='price'/>

            <label htmlFor='description'>Descripcion</label>
            <textarea name='description' rows="2"></textarea>

            <button>Guardar Producto</button>
        </form>
    </div>
  )
}