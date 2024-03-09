// // UserContext.tsx
// import React, { createContext, useContext, useState } from 'react';
//
// interface UserContextType {
//    firstName: string;
//    lastName: string;
// }
//
// const UserContext = createContext<UserContextType | null>(null);
//
// export const UserProvider: React.FC = ({ children }) => {
//    const [firstName, setFirstName] = useState<string>('');
//    const [lastName, setLastName] = useState<string>('');
//
//    return (
//       <UserContext.Provider value={{ firstName, lastName }}>
//          {children}
//       </UserContext.Provider>
//    );
// }
//
// export const useUser = () => {
//    const context = useContext(UserContext);
//    if (!context) {
//       throw new Error('useUser must be used within a UserProvider');
//    }
//    return context;
// };
