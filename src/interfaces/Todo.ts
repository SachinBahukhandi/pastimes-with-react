import User from "./User";

export default interface Todo {
    id: number;
    name: string;
    description: string;
    user?: User;
};