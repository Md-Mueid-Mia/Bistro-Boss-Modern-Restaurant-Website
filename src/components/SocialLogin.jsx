import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { IoLogoGoogle } from 'react-icons/io5';
import useAuth from '../Hooks/useAuth';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn, githubSignIn, facebookSignIn} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate =useNavigate()

    const handleGoogleSignin = () => {
        googleSignIn()
        .then(res=>{
            console.log(res.user)
            const userInfo = {
                name: res.user?.displayName,
                email: res.user?.email,
                photoURL: res.user?.photoURL
            }
            axiosPublic.post('/users', userInfo)
             .then(res=>{
                console.log(res.data)
                navigate('/')
             })
        })
    }
    
    const handleGithubSignin = () => {
       githubSignIn()
       .then(res=>{
            console.log(res.user)
            const userInfo = {
                name: res.user?.name,
                email: res.user?.email,
                photoURL: res.user?.avatar_url
            }
            axiosPublic.post('/users', userInfo)
             .then(res=>{
                console.log(res.data)
                navigate('/')
             })
        })
    }
    
    const handleFacebookSignin = () => {
        facebookSignIn()
        .then(res=>{
            console.log(res.user)
            const userInfo = {
                name: res.user?.displayName,
                email: res.user?.email,
                photoURL: res.user?.photoURL
            }
            axiosPublic.post('/users', userInfo)
             .then(res=>{
                console.log(res.data)
                navigate('/')
             })
        })
    }
    return (
        <div>
             <div className="flex items-center justify-center space-x-6">
                          <button onClick={handleFacebookSignin}>
                            <FaFacebook className="text-2xl" />
                          </button>
                          <button onClick={handleGoogleSignin}>
                            <IoLogoGoogle className="text-2xl" />
                          </button>
                          <button onClick={handleGithubSignin}>
                            <FaGithub className="text-2xl" />
                          </button>
                        </div>
        </div>
    );
};

export default SocialLogin;