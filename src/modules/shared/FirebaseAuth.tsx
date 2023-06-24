'use client';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase';
import { useRouter } from 'next/navigation';

interface User {
  uid: string;
  nome: string;
  email: string;
  imageUrl: string;
}

const FirebaseAuth: React.FC = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();

  const login = async () => {
    await signInWithPopup(auth, googleAuth);
    router.push('/'); // Redirect to home page
  };

  return (
    <div>
        <button className="rounded-full bg-blue-500 text-white px-4 py-2" onClick={login}>
          LOGIN
        </button>
    </div>
  );
};

export default FirebaseAuth;