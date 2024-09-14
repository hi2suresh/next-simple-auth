'use client';

import { useRouter } from 'next/navigation';

interface LoginButtonProps {
  children: React.ReactNode;
  modal?: 'modal' | 'redirect';
  asChild?: boolean;
}
function LoginButton({
  children,
  modal = 'redirect',
  asChild,
}: LoginButtonProps) {
  const handleClick = () => {
    router.push('/auth/login');
  };
  const router = useRouter();
  if (modal === 'modal') {
    return <span>TODO</span>;
  }
  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  );
}
export default LoginButton;
