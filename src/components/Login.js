'use client'
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter()
  return (
    <button onClick={()=>router.push('/api/auth/signin')} className="bg-soft-red rounded  text-dark-text p-2 min-w-[100px] w-full">
      Login
    </button>
  );
};

export default Login;
