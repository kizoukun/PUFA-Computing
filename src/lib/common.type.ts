import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

export interface StudyProgramDataProps {
   title: string;
   article: string;
   link: string;
}

export interface FaqProps {
   title: string;
   content: string;
   status?: string;
}

type UserId = string;

type UserProps = {
   id: UserId;
   email: string;
   firstName: string;
   lastName: string;
   studentId: string;
   major: string;
   yearOfBatch: string;
   updatedAt: Date;
   createdAt: Date;
};

declare module "next-auth" {
   interface Session {
      user: UserProps;
   }
}

declare module "next-auth/jwt" {
   interface JWT extends UserProps {
      email: string;
   }
}
