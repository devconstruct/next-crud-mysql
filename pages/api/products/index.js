import {pool} from '../../../config/db';


export default async function handler(req, res){
    //hacemos la peticion para pedir productos
    switch(req.method){
        case 'GET':
            return res.status(200).json('obteniendo productos')
        case 'POST':
            const {name, description, price} = req.body

            const [result] = await pool.query('INSERT INTO product SET ?',{
                name: name,
                description: description,
                price: price
            });
            return res.status(200).json({name,description, price, id:result.insertId})
    }
}