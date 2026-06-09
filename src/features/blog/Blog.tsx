import HomeFreeTailer from '../home/home_free_trailer/HomeFreeTailer'
import BlogCards from './BlogCards'
import BlogHero from './BlogHero'

const Blog = () => {
  return (
    <div>
      <BlogHero />
      <BlogCards />
      <div className='bg-[#DEEDFF] pt-5 pb-28'>
        <HomeFreeTailer />
      </div>
    </div>
  )
}

export default Blog