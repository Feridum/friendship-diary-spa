import {User} from "./User/User.types";

export interface UsersProps {
    users: User[];
    actionType: 'primary' | 'secondary',
    action: (id: string) => void;
}