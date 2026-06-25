import React from 'react'
import BlogDetailsHero from './BlogDetailsHero'
import BlogDetailsContent from './BlogDetailsContent'
import HowWeEvaluated from './HowWeEvaluated'
import MonitoringSoftwareList from './MonitoringSoftwareList'
import SimilarBlogs from './SimilarBlogs'
import HomeFreeTailer from '../home/home_free_trailer/HomeFreeTailer'
import { BlogPost } from '@/data/blogs'
import { getPageContent } from '@/lib/cms'


const BlogDetails = async ({ blog }: { blog: BlogPost }) => {
    const cms = await getPageContent('blog')
    return (
        <div>
            <BlogDetailsHero blog={blog} />
            <BlogDetailsContent blog={blog} />
            <div className='bg-[#DEEDFF] py-20'>
                <HowWeEvaluated />
                <MonitoringSoftwareList />
            </div>
            <SimilarBlogs currentSlug={blog.slug} />
            <div className='bg-[#DEEDFF] py-20'>
                <HomeFreeTailer cms={cms.free_trailer ?? {}} />
            </div>
        </div>
    )
}

export default BlogDetails
