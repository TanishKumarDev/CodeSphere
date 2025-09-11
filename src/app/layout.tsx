// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";

export const metadata: Metadata = {
  title: "CodeSphere",
  description: "Online Code Editor with Next.js + Clerk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>
          <nav className="p-4 flex justify-end space-x-4 bg-amber-500 text-amber-300">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>

            <SignedIn>
              <UserButton />
              <SignOutButton />
            </SignedIn>
          </nav>
          <ConvexClientProvider>
            {children}
          </ConvexClientProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
