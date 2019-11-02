export interface UserProps {
    user: User,
    actionType: 'primary' | 'secondary',
    action: (id: string) => void;
}


export interface User {
    uuid: string;
    firstname: string;
    lastname: string;
}