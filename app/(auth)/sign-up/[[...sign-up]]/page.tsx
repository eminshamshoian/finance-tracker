import { Loader2 } from "lucide-react";
import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
        <ClerkLoaded>
            <SignUp />
        </ClerkLoaded>
        <ClerkLoading>
            <Loader2 className="animate-spin h-12 w-12 text-gray-500"/>
        </ClerkLoading>
    </div>
  );
}