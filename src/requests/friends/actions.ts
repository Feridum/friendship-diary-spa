import {Request} from "../common/Request";


export const getFriends = () => Request({url: '/api/friends', method: 'GET'});

export const deleteFriend = (id: string) => Request({url: `/api/friends/${id}`, method: 'DELETE'})

export const addFriend = (id: string) => Request({url: `/api/friends/${id}`, method: 'POST'})