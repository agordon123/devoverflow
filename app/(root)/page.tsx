import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <main className="flex-center">
      <h1 className="h1-bold">Next JS 13 We&apos;re Coming!</h1>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
