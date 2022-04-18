import React from 'react';
import { Button } from 'react-bootstrap';
import Loading from '../../Shared/Loading/Loading';
import google from '../../../images/google.png';
import github from '../../../images/git.png';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorMessage;

    if (googleLoading || gitLoading) {
        return <Loading></Loading>;
    }

    if (googleError || gitError) {
        errorMessage = <p className='text-danger'>Error: {googleError?.message} {gitError?.message}</p>
    }

    if (googleUser || gitUser) {
        navigate('/');
    }

    return (
        <div className="login-buttons">
            <Button onClick={() => signInWithGoogle()} className='btn btn-theme' type="submit">
                <img src={google} alt="" /> Continue With Google
            </Button>
            <Button onClick={() => signInWithGithub()} className='btn btn-theme' type="submit">
                <img src={github} alt="" /> Continue With Github
            </Button>
            {errorMessage}
        </div>
    );
};

export default SocialLogin;