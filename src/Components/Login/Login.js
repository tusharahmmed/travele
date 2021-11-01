import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';



const Login = () => {

    const {handleGoogleSignIn} = useAuth();
    //  const { handleGoogleSignIn,handleFacebookSignIn } = useAuth();

    const history = useHistory();
    const location = useLocation();

    const direction = location.state?.from || "/";

    // // redirect after login successfully
    const redirectAfterLogin = () => {

        handleGoogleSignIn()
        .then(result => {
            history.push(direction);
            console.log(result)
        })
    }




    return (
        <>
            <div>
                <h1 className="title-font text-center text-white text-2xl md:text-4xl lg:text-7xl mb-4 font-bold lg:px-6 md:px-36 ">
                    For Book Any Package,<br /> Please Login
                </h1>
            </div>
            <section className="w-full pb-40">
                <div className=" w-full h-full bg-gray-900" style={{ backgroundImage: 'url(&quot;https://demos.creative-tim.com/tailwindcss-starter-project/static/media/register_bg_2.2fee0b50.png&quot)', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}></div>
                <div className="container mx-auto px-4 h-full">
                    <div className="flex content-center items-center justify-center h-full">
                        <div className="w-full lg:w-4/12 px-4 pt-8">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
                                <div className="rounded-t mb-0 px-6 py-4">
                                    <div className="text-center mb-3">
                                        <h6 className="text-gray-600 text-sm font-bold">Log in with</h6></div>
                                    
                                    <hr className="mt-6 border-b-1 border-gray-400" />
                                </div>
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                        <button onClick={redirectAfterLogin} className="bg-red-400 text-xl w-full flex items-center justify-center active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs" type="button" style={{ transition: 'all 0.15s ease 0s' }}><img alt="..." className="w-5 mr-1" src="https://icon-library.com/images/google-login-icon/google-login-icon-24.jpg" />Google</button>

                                   

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;