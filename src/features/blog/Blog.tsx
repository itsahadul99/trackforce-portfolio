import { getAllBlogPosts } from '@/data/blogs'
import { getPageContent } from '@/lib/cms'
import HomeFreeTailer from '../home/home_free_trailer/HomeFreeTailer'
import BlogCards from './BlogCards'
import BlogHero from './BlogHero'

const Blog = async () => {
  const [posts, cms] = await Promise.all([getAllBlogPosts(), getPageContent('blog')])

  return (
    <div>
      <BlogHero cms={cms.hero ?? {}} />
      <BlogCards initialCards={posts} cms={cms.featured ?? {}} />
      <div className='bg-[#DEEDFF] pt-5 pb-28'>
        <HomeFreeTailer cms={cms.free_trailer ?? {}} />
      </div>
    </div>
  )
}

export default Blog
