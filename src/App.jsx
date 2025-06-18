import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectCard from './components/ProjectCard';
import Header from './components/Header';
import Gui_Title from './assets/Gui_Title.svg';



export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero / About Section */}
        <section
          id="about"
          className="bg-white text-black py-24 mb-25 mt-15"
        >
          <div className="container mx-auto px-6 text-center">
            <h1 className="flex items-center justify-center space-x-3">
              <img src={Gui_Title} alt="Gui Oba" className="h-80 w-260" />
            </h1>
            <p className="text-lg lg:text-xl max-w-2xl mx-auto mb-8 opacity-90">
              Computer Engineering Student @ McGill University
            </p>
            <a
              href="#projects"
              className="inline-block bg-white font-semibold rounded-full px-8 py-3 hover:bg-gray-100 transition"
            >
              Projects
            </a>
            <a
              href="#whoami"
              className="inline-block bg-white font-semibold rounded-full px-8 py-3 hover:bg-gray-100 transition"
            >
              WhoAmI
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 mb-12">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-black text-center mb-12">
              Projects
            </h2>
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Mediqueue"
                description="Mediqueue is a software designed to alleviate stress and anxiety within Emergency Department waiting rooms."
                techStack={['React', 'Typescript', 'Python']}
                repoLink="https://github.com/Gui-Oba/mediqueue"
              />
              <ProjectCard
                title="Hack4Impact McGill"
                description="Website for Hack4Impact McGill, a student-run organization that builds tech solutions for non-profits."
                techStack={['Node.js', 'React', 'Typescript']}
                repoLink="https://github.com/Gui-Oba/Hack4Impact-McGill-Website"
              />

              <ProjectCard
                title="This Website"
                description="A portfolio website to showcase my projects and skills."
                techStack={['React', 'Tailwind CSS', 'Vite']}
                repoLink="https://github.com/Gui-Oba/Portfolio"
              />
              {/* Add more <ProjectCard /> instances as needed */}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="whoami" className="py-20 bg-white">
          <div className="mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-black text-center mb-12">
              Who Am I?
            </h2>
            <div className="max-w-3xl mx-auto text-left">
              <p className="text-lg text-black mb-6">
                I'm a Computer Engineering student at McGill University, passionate about software development and problem-solving. I love building applications that make a difference.
              </p>
              <p className="text-lg text-black mb-6">
                My journey in tech has been fueled by curiosity and a desire to create impactful solutions. Whether it's through coding, collaborating on projects, or exploring new technologies, I'm always eager to learn and grow.
              </p>
              <p className="text-lg text-black">
                When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying a good book.
              </p>
              </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center text-black mb-12">
              Let's Build Something Together
            </h2>
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Panel: Text + Social Links */}
                <div className="p-12 bg-gradient-to-br from-indigo-600 to-blue-500 text-white flex flex-col justify-center space-y-6">
                  <h3 className="text-2xl font-bold">Get in Touch</h3>
                  <p className="text-gray-200">
                    Have a project in mind? I'm always excited to collaborate.
                    Shoot me a message and let's chat.
                  </p>
                  <div className="flex space-x-6">
                    <a
                      href="https://www.linkedin.com/in/guilherme-oba/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 hover:underline"
                    >
                      
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/Gui-Oba"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 hover:underline"
                    >
                      
                      <span className="text-sm">GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Right Panel: Sleek Contact Form */}
                <div className="p-12">
                  <form
                    action={`mailto:gui.msampaio@gmail.com`}
                    method="POST"
                    encType="text/plain"
                    className="space-y-6"
                  >
                    <div className="flex flex-col">
                      <label
                        htmlFor="name"
                        className="text-gray-700 font-medium mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 placeholder-gray-400 transition-colors"
                        placeholder="Internet Person"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label
                        htmlFor="email"
                        className="text-gray-700 font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 placeholder-gray-400 transition-colors"
                        placeholder="coolcoder@theweb.com"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label
                        htmlFor="message"
                        className="text-gray-700 font-medium mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        className="border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 placeholder-gray-400 transition-colors resize-none"
                        placeholder="Tell me about your project... or about your favorite cat video!"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:from-indigo-700 hover:to-blue-600 transition"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-auto">
        <div className="container mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Gui Oba. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
