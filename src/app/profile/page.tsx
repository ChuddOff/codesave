import Profile from "@/components/app-profile/Profile";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <SignedOut>
        <div className="flex flex-col justify-center items-center w-full h-[calc(100vh-65px-156px)] gap-10">
          <h3 className="text-3xl font-bold">Для доступа войдите в аккаунт.</h3>
          <SignInButton>
            <button className={"text-violet text-3xl font-bold"}>
              Sign in
            </button>
          </SignInButton>
        </div>
      </SignedOut>
      <SignedIn>
        <Profile />
      </SignedIn>
    </>
  );
}
