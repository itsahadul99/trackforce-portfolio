
import { permanentRedirect } from 'next/navigation'

const page = () => {
  return permanentRedirect('/home')  // 308 so search engines consolidate signals onto /home
}

export default page