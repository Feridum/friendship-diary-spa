export interface UserProps {
    user: User,
    actionType: 'primary' | 'secondary',
    action: (id: string) => void;
    actionLabel: string;
}


export interface User {
    username: string;
    firstname: string;
    lastname: string;
}