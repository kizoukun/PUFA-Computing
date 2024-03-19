interface User {
   id?: number;
   username: string;
   first_name: string;
   middle_name: string;
   last_name: string;
   email: string;
   password: string;
   major: string;
   role_id?: number;
   student_id?: string;
   year: string;
   // institution?: string;
}

export default User;
