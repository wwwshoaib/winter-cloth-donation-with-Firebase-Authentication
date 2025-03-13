
import { Outlet } from "react-router";

const AuthLayout = () => {
    return (
        <div className="text-green-300">
          <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;