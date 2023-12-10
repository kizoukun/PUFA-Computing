interface User {
   id?: number;
   first_name: string;
   last_name: string;
   email: string;
   password: string;
   role_id?: number;
   student_id?: string;
   year?: string;
   institution?: string;
}

export default User;
