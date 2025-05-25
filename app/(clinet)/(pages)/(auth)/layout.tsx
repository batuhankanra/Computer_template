'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const layout = ({children}:Readonly<{children: React.ReactNode;}>) => {
     const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      // Giriş yapılmışsa yönlendir
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Yükleniyor...</p>; // veya skeleton
  }
  return (
    <div>{children}</div>
  )
}

export default layout
