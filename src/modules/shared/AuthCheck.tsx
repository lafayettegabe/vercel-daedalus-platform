'use client'
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase';

export function AuthCheck<P>(WrappedComponent: any) {
  return function SubscriptionWrapper(props: P) {
    const router = useRouter();
    const [user] = useAuthState(auth);
    const loading = false;

    if (!user) {
      router.push('/login'); // Redirect to login page or access denied page
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}