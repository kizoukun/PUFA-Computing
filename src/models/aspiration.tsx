interface Aspirations {
   id: number;
   user_id: string;
   subject: string;
   message: string;
   anonymous: boolean;
   organization_id: number;
   closed: boolean;
   created_at: Date;
   updated_at: Date;
   upvote: number;
   admin_reply: string;
   organization: string;
   author: string;
}

export default Aspirations;