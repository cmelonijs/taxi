import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div>
      <h1>UP</h1>
      <UserButton afterSignOutUrl="/"/>
      <h1>down</h1>
    </div>
  )
}
