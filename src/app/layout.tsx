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
          <nav>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>

            <SignedIn>
              <UserButton />
              <SignOutButton />
            </SignedIn>
          </nav>

          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
