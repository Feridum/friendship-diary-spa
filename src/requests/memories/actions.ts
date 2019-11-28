import {Request} from "../common/Request";

export const postMemory = (body: any) => Request({url:'/api/memory', method: 'POST', body});

export const getMemories = () => Request({url: '/api/memory', method: 'GET'});

export const getMemoriesDraft = () => Request({url: '/api/memory/draft', method: 'GET'});
export const postMemoriesDraft = (body:any) => Request({url: '/api/memory/draft', method: 'POST', body});
export const putMemoriesDraft = (body:any, id:string) => Request({url: `/api/memory/draft/${id}`, method: 'POST', body});