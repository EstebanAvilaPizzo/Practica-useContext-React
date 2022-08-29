// Este archivo types.js sirve para ver que funcionalidad tenemos dentro de nuestro estado
// aqui realizamos los siguiente:

export const GET_USERS = 'GET_USERS';
export const GET_PROFILE = 'GET_PROFILE';

//definimos una constante que tiene su mismo nombre
//sirve para que cuando queremos ejecutar determinada funcionalidad, no tengamos que llamar a la funcion
//directamente llama el tipo, el cual, sabe el tipo de dato que pasará, o lista de funciones que puedo ejecutar
//para utilizar esto, en el componente UserReducer  definir que haremos cuando se ejecuten estos nombre GET_USER , GET_PROFILE