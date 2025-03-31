import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedHero from "@/components/animated-hero"
import ProjectCard from "@/components/project-card"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import Navbar from "@/components/navbar"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <AnimatedHero />

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
            <Image 
              src="/placeholder.svg?height=800&width=600" 
              alt="Portrait" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              About Me
            </h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-400">
              I&apos;m a passionate designer and developer dedicated to bringing your visions to life. With years of experience in creating stunning digital experiences, I understand that the journey of creation is just as important as the final destination.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-400">
              My approach is collaborative and client-focused. I believe in walking alongside you throughout the entire process, ensuring that your ideas are realized with precision and care.
            </p>
            <div className="pt-4">
              <Button className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white border-none">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            My Services
          </h2>
          <p className="mt-4 text-xl text-zinc-700 dark:text-zinc-400 max-w-3xl mx-auto">
            I offer comprehensive solutions to help you navigate the journey from concept to completion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Web Design"
            description="Creating stunning, responsive websites that captivate your audience and deliver exceptional user experiences."
            icon="Palette"
          />
          <ServiceCard 
            title="Development"
            description="Building robust, scalable applications with clean code and cutting-edge technologies."
            icon="Code"
          />
          <ServiceCard 
            title="UI/UX Design"
            description="Crafting intuitive interfaces and seamless user journeys that delight and engage."
            icon="Layers"
          />
          <ServiceCard 
            title="Brand Identity"
            description="Developing cohesive brand identities that communicate your unique value proposition."
            icon="Fingerprint"
          />
          <ServiceCard 
            title="Digital Marketing"
            description="Implementing strategies to increase visibility and drive meaningful engagement with your target audience."
            icon="TrendingUp"
          />
          <ServiceCard 
            title="Consultation"
            description="Providing expert guidance to help you navigate complex digital challenges and opportunities."
            icon="MessageCircle"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured Projects
          </h2>
          <p className="mt-4 text-xl text-zinc-700 dark:text-zinc-400 max-w-3xl mx-auto">
            A showcase of my recent work and the journeys we&apos;ve embarked on together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Ethereal E-commerce"
            category="Web Development"
            image="/placeholder.svg?height=600&width=800"
            description="A luxury e-commerce platform with seamless checkout and personalized recommendations."
          />
          <ProjectCard 
            title="Nebula App"
            category="Mobile Development"
            image="/placeholder.svg?height=600&width=800"
            description="A meditation and mindfulness app with interactive visualizations and guided sessions."
          />
          <ProjectCard 
            title="Quantum Dashboard"
            category="UI/UX Design"
            image="/placeholder.svg?height=600&width=800"
            description="An intuitive analytics dashboard for a fintech company, simplifying complex data visualization."
          />
          <ProjectCard 
            title="Celestial Branding"
            category="Brand Identity"
            image="/placeholder.svg?height=600&width=800"
            description="Complete brand overhaul for a sustainable fashion company entering the global market."
          />
          <ProjectCard 
            title="Prism Portfolio"
            category="Web Design"
            image="/placeholder.svg?height=600&width=800"
            description="A dynamic portfolio website for a photography collective, showcasing their diverse work."
          />
          <ProjectCard 
            title="Eclipse Marketing"
            category="Digital Strategy"
            image="/placeholder.svg?height=600&width=800"
            description="Comprehensive digital marketing campaign that increased client conversion by 200%."
          />
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white border-none">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            My Process
          </h2>
          <p className="mt-4 text-xl text-zinc-700 dark:text-zinc-400 max-w-3xl mx-auto">
            I believe in a structured yet flexible approach to ensure we reach our destination together.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-zinc-200 dark:bg-zinc-800"></div>
          
          {/* Timeline items */}
          <div className="space-y-24 relative">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <h3 className="text-2xl font-bold">Discovery</h3>
                <p className="mt-2 text-zinc-700 dark:text-zinc-400">We begin by understanding your vision, goals, and requirements through in-depth consultation.</p>
              </div>
              <div className="mx-auto md:mx-0 my-4 md:my-0 w-12 h-12 rounded-full bg-zinc-900 dark:bg-zinc-800 flex items-center justify-center z-10">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left"></div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right"></div>
              <div className="mx-auto md:mx-0 my-4 md:my-0 w-12 h-12 rounded-full bg-zinc-900 dark:bg-zinc-800 flex items-center justify-center z-10">
                <span className="text-white font-bold">2</span>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left">
                <h3 className="text-2xl font-bold">Strategy & Planning</h3>
                <p className="mt-2 text-zinc-700 dark:text-zinc-400">I develop a comprehensive roadmap that outlines our journey and sets clear milestones.</p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <h3 className="text-2xl font-bold">Creation & Development</h3>
                <p className="mt-2 text-zinc-700 dark:text-zinc-400">This is where ideas transform into reality through iterative design and development processes.</p>
              </div>
              <div className="mx-auto md:mx-0 my-4 md:my-0 w-12 h-12 rounded-full bg-zinc-900 dark:bg-zinc-800 flex items-center justify-center z-10">
                <span className="text-white font-bold">3</span>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left"></div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right"></div>
              <div className="mx-auto md:mx-0 my-4 md:my-0 w-12 h-12 rounded-full bg-zinc-900 dark:bg-zinc-800 flex items-center justify-center z-10">
                <span className="text-white font-bold">4</span>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left">
                <h3 className="text-2xl font-bold">Refinement & Testing</h3>
                <p className="mt-2 text-zinc-700 dark:text-zinc-400">Rigorous testing and refinement ensure that the final product exceeds expectations.</p>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <h3 className="text-2xl font-bold">Launch & Support</h3>
                <p className="mt-2 text-zinc-700 dark:text-zinc-400">The journey doesn&apos;t end at launch. I provide ongoing support to ensure continued success.</p>
              </div>
              <div className="mx-auto md:mx-0 my-4 md:my-0 w-12 h-12 rounded-full bg-zinc-900 dark:bg-zinc-800 flex items-center justify-center z-10">
                <span className="text-white font-bold">5</span>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Client Testimonials
          </h2>
          <p className="mt-4 text-xl text-zinc-700 dark:text-zinc-400 max-w-3xl mx-auto">
            Hear from those who have embarked on the journey with me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Alexandra Chen"
            role="CEO, Ethereal Designs"
            quote="Working with this team was transformative for our business. They didn&apos;t just deliver a website; they delivered a digital experience that perfectly captures our brand essence."
            avatar="/placeholder.svg?height=200&width=200"
          />
          <TestimonialCard 
            name="Marcus Johnson"
            role="Founder, Nebula Apps"
            quote="The attention to detail and commitment to excellence is unmatched. They were with us every step of the way, ensuring our vision was realized beyond our expectations."
            avatar="/placeholder.svg?height=200&width=200"
          />
          <TestimonialCard 
            name="Sophia Williams"
            role="Marketing Director, Quantum Finance"
            quote="Not only did they create a stunning dashboard that simplified our complex data, but they also provided insights that improved our overall user experience strategy."
            avatar="/placeholder.svg?height=200&width=200"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Start Your Journey
          </h2>
          <p className="mt-4 text-xl text-zinc-700 dark:text-zinc-400 max-w-3xl mx-auto">
            Ready to bring your vision to life? Let&apos;s embark on this journey together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-700 dark:text-zinc-400">Name</label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-3 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-400">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-3 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-zinc-700 dark:text-zinc-400">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-4 py-3 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-400">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black border-none">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-zinc-900 dark:text-white mr-4 mt-1" />
                  <div>
                    <p className="text-zinc-700 dark:text-zinc-400 font-medium">Email</p>
                    <a href="mailto:contact@example.com" className="text-zinc-900 dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300">contact@example.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-zinc-900 dark:text-white mr-4 mt-1" />
                  <div>
                    <p className="text-zinc-700 dark:text-zinc-400 font-medium">Phone</p>
                    <a href="tel:+1234567890" className="text-zinc-900 dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300">+1 (234) 567-890</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-zinc-900 dark:text-white mr-4 mt-1" />
                  <div>
                    <p className="text-zinc-700 dark:text-zinc-400 font-medium">Location</p>
                    <p className="text-zinc-900 dark:text-white">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
              <p className="text-zinc-700 dark:text-zinc-400 mb-6">
                Follow me on social media for updates on my latest projects and insights into my creative process.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                </div>
                </div>
                </div>
                </div>
                </section>
                </div>
                
   
  )}