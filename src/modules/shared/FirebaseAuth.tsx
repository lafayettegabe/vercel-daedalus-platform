'use client';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase';
import { useRouter } from 'next/navigation';
import GButton from 'src/Images/GButton.png';
import Image from 'next/image';

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
        <button onClick={login} style={{ border: 'none', background: 'none' }}>
          <Image src={GButton} alt="Google Login" width={250} height={65} />
        </button>
    </div>
  );
};

export default FirebaseAuth;