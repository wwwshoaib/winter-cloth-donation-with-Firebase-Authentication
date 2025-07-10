
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";



const SocialLogin = () => {

    const { signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();


    const handleGoogleLogin = () => {

        signInWithGoogle()
            .then(result => {
                console.log(result)
                toast.success('Log in successfully!')
                navigate('/');
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <div>
            <div className="divider">OR</div>
            <div className="py-2 text-center">
                <button
                    onClick={handleGoogleLogin}
                    className="flex items-center gap-2 mx-auto px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
                >
                      <FcGoogle className="text-xl" />
                    <span>Sign in with Google, </span>
                  
                </button>
            </div>


        </div>
    );
};

export default SocialLogin;