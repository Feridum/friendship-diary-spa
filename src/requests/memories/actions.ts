import {Request} from "../common/Request";

export const postMemory = (body: any) => Request({url: '/api/memory', method: 'POST', body});

export const getMemories = () => Request({url: '/api/memories', method: 'GET'});

export const getMemoriesDraft = () => Request({url: '/api/memories/drafts', method: 'GET'});
export const postMemoryDraft = (body: any) => Request({url: '/api/memories/draft', method: 'POST', body});
export const putMemoryDraft = (body: any, id: string) => Request({
    url: `/api/memories/draft/${id}`,
    method: 'PUT',
    body
});