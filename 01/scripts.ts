
type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}

type Usuario2 = Omit<Usuario, 'rg'>;
type UsuarioObrigatorio = Required<Usuario2>;



const cadastrarUsuário2 = (info: Usuario): Usuario => {
    return info
}


