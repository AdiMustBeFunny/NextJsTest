'use client';
import { AllowOnlyAuthenticated } from "@/lib/components/route-guard";

function Home(){
  return (
    <>
      <div>
        This is dashboard
      </div>
    </>
  );
}

export default function GuardedHome() {

  
  const GuardedHome = AllowOnlyAuthenticated(Home);

  return (
    <GuardedHome></GuardedHome>
  )
}
