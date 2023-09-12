interface User {
    id?: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role_id?: number;
    nim: string;
    year: string;
}

export default User;