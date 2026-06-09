import React from 'react'
import BlogHero from './BlogHero'
import BlogCards from './BlogCards'
import FeaturedBlog from './FeaturedBlog'
import HomeFreeTailer from '../home/home_free_trailer/HomeFreeTailer'

const Blog = () => {
  return (
    <div>
        <BlogHero/>
        <FeaturedBlog/>
        <BlogCards/>
        <div className='bg-[#DEEDFF] pt-5 pb-28'>
            <HomeFreeTailer/>
        </div>
    </div>
  )
}

export default Blog