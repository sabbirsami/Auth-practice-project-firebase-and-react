import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import auth from "../../firebase.config";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

function AuthProvider({ children }) {
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    };
    const data = { signInWithGoogle };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
};
