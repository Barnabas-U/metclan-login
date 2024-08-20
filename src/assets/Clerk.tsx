
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Clerk = () => {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}

export default Clerk