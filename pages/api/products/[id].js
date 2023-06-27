export default function handler(req, res){ 
    //req es la informacion que esta llegando al navegador (esta la informacion de la url)-Pidiendo datos
    //res es la funcion que puedeo devolver al navegador
    return res.status(200).json('Getting one Product:' + req.query.id)
}