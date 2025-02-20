import restaurant from "../assets/images/restaurant-img.jpg";
import logo from "../assets/images/logo.png";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import { useState } from "react";

function Auth() {
    const [isRegister, setIsRegister] = useState(false);

    const toggleAuthMode = (e) => {
        e.preventDefault();
        setIsRegister(!isRegister);
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen w-full">
            {/** Left section */}
            <div className="w-full lg:w-1/2 relative bg-[#1f1f1f] flex items-center justify-center bg-cover min-h-[50vh] lg:min-h-screen">
                {/** BG Image */}
                <img
                    className="w-full h-full object-cover"
                    src={restaurant}
                    alt="Restaurant Image"
                />

                {/** Black Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-80"></div>

                {/** Quote at Bottom */}
                <blockquote className="absolute bottom-10 px-8 mb-10 text-lg lg:text-2xl italic text-white text-center lg:text-left">
                    &quot;Serve customers the best food with prompt and friendly service in a welcoming atmosphere, and they&apos;ll keep coming back.&quot;
                    <br />
                    <span className="block mt-4 text-yellow-400">- Founder of Resto</span>
                </blockquote>
            </div>

            {/** Right section */}
            <div className="w-full lg:w-1/2 min-h-screen bg-[#1a1a1a] p-6 lg:p-10">
                <div className="flex flex-col items-center gap-2">
                    <img
                        src={logo}
                        alt="Resto Logo"
                        className="h-14 w-14 border-2 rounded-full p-1"
                    />
                    <h1 className="text-lg font-semibold text-[#f5f5f5] tracking-wide">Resto</h1>
                </div>
                <h2 className="text-3xl lg:text-4xl text-center font-semibold text-yellow-400 mb-6 lg:mb-10">
                    {isRegister ? "Employee Registration" : "Employe Login"}
                </h2>

                {/** Components <Register /> */}
                {isRegister ? <Register setIsRegister={setIsRegister}/> : <Login />}

                <div className="flex justify-center mt-6">
                    <p className="text-sm text-[#ababab]">
                        {isRegister ? "Already have an account?" : "Don't have an account?"}
                        <a
                            onClick={toggleAuthMode}
                            className="text-yellow-400 font-semibold hover:underline"
                            href="#"
                        >
                            {isRegister ? "Sign in" : "Sign up"}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Auth;