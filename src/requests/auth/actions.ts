import {Request} from "../common/Request";


export const register = (body:any) => Request({url: '/api/register', method: 'POST', body});

export const login = (body:any) => Request({url: '/api/login', method: 'POST', body});

export const getMe = () => Request({url: '/api/me', method: 'GET'});

export const editMe = (body:any) => Request({url: '/api/me', method: 'POST', body});