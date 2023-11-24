'use strict'
//GET
async function listarUsuarios() {
    const url = 'http://10.107.140.2:8080/usuarios/'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    return data
}

//POST
async function cadastrarUsuario(usuario) {
    const url = 'http://10.107.140.2:8080/usuarios/'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }
    const response = await fetch(url, options)
    console.log(response.ok);
    return response.ok
}
//PUT
async function atualizarUsuario(usuario) {
    const url = `http://10.107.140.2:8080/usuarios/${usuario.id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }
    const response = await fetch(url, options)
    console.log(response.ok);
    return response.ok
}
//DELETE
async function deletarUsuario(id) {
    const url = `http://10.107.140.2:8080/usuarios/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    console.log(response.ok);
    return response
}

//area de teste

// const usuarioNovo={
//     nome:'Leticia',
//     email:'leticia@gmail.com'
// }

// const usuarioAtualizado={
//     id:'3',
//     nome:'Helena',
//     email: 'helena@gmail'
// }

// listarUsuarios()
// cadastrarUsuario(usuarioNovo)
// atualizarUsuario(usuarioAtualizado)
// deletarUsuario(3)