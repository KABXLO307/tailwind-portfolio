import React from 'react'
import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
        <div className="align-element grid md:grid-cols-2 items-center gap-16">
            <img src={aboutSvg} className='w-full h-64'/>
            <article>
                <SectionTitle text='About'/>
                <p className='text-slate-600 mt-8 leading-loose'>
I am a motivated CS professional and full-stack developer with hands-on experience building scalable web applications using technologies such as Node.js, Express, MySQL, and modern frontend frameworks. I have developed practical projects including real-time applications, job portals, and service-based platforms, demonstrating strong problem-solving skills and an ability to design efficient, user-focused systems.</p>
                </article></div></section>
  )
}

export default About