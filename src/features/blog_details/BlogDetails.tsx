import React from 'react'
import BlogDetailsHero from './BlogDetailsHero'
import BlogDetailsContent from './BlogDetailsContent'
import HowWeEvaluated from './HowWeEvaluated'
import MonitoringSoftwareList from './MonitoringSoftwareList'
import SimilarBlogs from './SimilarBlogs'
import HomeFreeTailer from '../home/home_free_trailer/HomeFreeTailer'
import { BlogPost } from '@/data/blogs'


const BlogDetails = ({ blog }: { blog: BlogPost }) => {
    return (
        <div>
            <BlogDetailsHero blog={blog} />
            <BlogDetailsContent blog={blog} />
            <div className='bg-[#DEEDFF] pt-28 pb-20'>
                <HowWeEvaluated />
                <MonitoringSoftwareList />
            </div>
            <SimilarBlogs currentSlug={blog.slug} />
            <div className='bg-[#DEEDFF] pt-1 pb-20'>
                <HomeFreeTailer />
            </div>
        </div>
    )
}

export default BlogDetails
