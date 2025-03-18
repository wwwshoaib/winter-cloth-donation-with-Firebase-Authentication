import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { updateProfile } from "firebase/auth";
import { auth, } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        const profile = {
            displayName: name,
            photoURL: photo
        }

        updateProfile(auth.currentUser, profile)
            .then(() => {
                toast.success("Successfully updated!")
                e.target.reset();
                // Navigating the user after updating the profile
                navigate("/dashboard");

            })
            .catch(error => console.log("Error Update", error))

    };

    return (
        <div>
            <Navbar />
            <div className="w-11/12 mx-auto flex flex-col items-center">
                <div className="text-center py-5 text-2xl font-semibold">
                    <h2 className="text-gray-700">Update Your Profile</h2>
                </div>

                {/* Form */}
                <form onSubmit={handleUpdate}>
                    <div className="relative flex w-96 flex-col rounded-xl bg-white shadow-md p-6">
                        <div className="flex flex-col gap-4">
                            {/* Name Input */}
                            <div className="relative w-full">
                                <label className="text-sm font-medium text-gray-700">Name</label>
                                <input
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-full rounded-md border px-3 py-2 text-gray-700 outline-none focus:border-pink-500"
                                />
                            </div>

                            {/* Photo URL Input */}
                            <div className="relative w-full">
                                <label className="text-sm font-medium text-gray-700">Photo URL</label>
                                <input
                                    name="photo"
                                    placeholder="Enter photo URL"
                                    className="w-full rounded-md border px-3 py-2 text-gray-700 outline-none focus:border-pink-500"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 text-white font-bold uppercase shadow-md hover:shadow-lg"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default UpdateProfile;
