import { useState, useEffect } from "react";
import UserContext from './UserContext';
//import { getUser } from '../../services/user';
import {useDataFunctions} from '../../Hooks/useDataFunctions'


const UserProvider = ({ children, userId,password }) => {
    const {getDataFunc}= useDataFunctions();

    const [user, setUser] = useState({});

    useEffect(() => {
        if(userId){
            getDataFunc(`http://localhost:8000/user/login/${userId}/${password}`)
            .then(
                (user) => { 

                    setUser(user);
                    console.log(user);
                    user&&localStorage.setItem("user",JSON.stringify(user))
                 
                   
                            }
                          );
            // getUser(userId).then(user =>
            //      setUser(user));

           
        }
    }, [userId]);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;