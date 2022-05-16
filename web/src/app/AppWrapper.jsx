import App from "./App";

/* 
    Top level component
    Used to handling auth and context only
*/

/* 
    NOTES:
        - what needs to be considered
        - login status
        - login (set key)
        - logout (clear key)
    
    TODO:
        - not yet handled admin permissions
        - maybe lets just check key payload then apply it

*/

import { AuthContextProvider } from "../contexts/authContext";
import { UserContextProvider } from "contexts/userContext";

const AppWrapper = () => {
    return (
        <AuthContextProvider>
            <UserContextProvider>
                <App />
            </UserContextProvider>
        </AuthContextProvider>
    );
};

export default AppWrapper;
