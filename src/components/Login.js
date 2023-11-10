'use client'
import { useRouter } from "next/navigation";
import { Suspense } from "react";
const Login = () => {
  const router = useRouter()
  return (
    <Suspense>
      <button onClick={()=>router.push('/api/auth/signin')} className="bg-soft-red rounded  text-dark-text p-2 min-w-[100px] w-full">
      Login
    </button>
    </Suspense>
    
  );
};

export default Login;
