
import { redirect } from 'next/navigation'

const page = () => {
  return redirect('/home')  // Redirect is server navigation
  // return <Button>Click me</Button>
}

export default page