import '../App.css'; // Ensure styles are applied
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Gui_Title from '../assets/Gui_Title.svg';
import Prince from '../assets/le_petit_prince.svg';
import SkillsTab from '../components/SkillsTab';
import Logo from '../assets/Logo.svg';



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      <Header />

      {/* Main Content */}
      <main className="flex-grow">

        {/* Hero */}
        <section
          id="about"
          className="relative flex items-center justify-center h-screen/1.5 mt-16 bg-white text-black"
        >
          {/* This ensures title is always centered, with the projects outside of view */}
          <div className="-translate-y-[2vh] sm:-translate-y-[1vh] lg:translate-y-0 px-6 text-center">
            <h1 className="flex items-center justify-center space-x-3">
              <img src={Gui_Title} alt="Gui Oba" className="h-75 w-260" />
            </h1>
            <p className="text-lg lg:text-xl max-w-2xl mx-auto mb-6 opacity-90">
              Computer Engineering Student @ McGill University
            </p>
            <a
              href="#projects"
              className="inline-block bg-white font-semibold  px-8 py-3 hover:bg-gray-100 transition"
            >
              Projects
            </a>
            <a

              href="#skills"
              className="inline-block bg-white font-semibold  px-8 py-3 hover:bg-gray-100 transition"
            >
              Skills
            </a>
            <a
              href="#whoami"
              className="inline-block bg-white font-semibold  px-8 py-3 hover:bg-gray-100 transition"
            >
              About Me
            </a>
            <a
              href="#links"
              className="inline-block bg-white font-semibold  px-8 py-3 hover:bg-gray-100 transition"
            >
              Links
            </a>
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Stitch - Learn Neural Nets"
                description="An interactive playground for building and understanding neural networks. Won 1st Place at McGill's MAIS AI Hackathon."
                techStack={['PyTorch', 'Typescript', 'Python', 'Flask', 'React']}
                gitLink="https://github.com/Gui-Oba/Stitch"
                detailLink="/projects/stitch"
                mediaSrc={"/projects/stitch_project_thumbnail.png"}
              />
              <ProjectCard
                title="Asset Management Model"
                description="Cross-sectional equity return prediction pipeline built during the FIAM hackathon."
                techStack={['Jupyter Notebook', 'DuckDB', 'Python', 'XGBoost']}
                gitLink="https://github.com/Gui-Oba/FIAM-model-A"
                detailLink="/projects/investment-model"
                mediaSrc={"/projects/FIAM_project_thumbnail.png"}
              />
              <ProjectCard
                title="H4I McGill Website"
                description="A refreshed digital home for Hack4Impact McGill showcasing projects, partners, and student stories."
                techStack={['HTML', 'Next.js', 'React', 'JavasScript']}
                gitLink="https://github.com/Gui-Oba/Hack4Impact-McGill-Website"
                demoLink={"https://mcgill.hack4impact.org"}
                detailLink="/projects/hack4impact-mcgill"
                mediaSrc={"/projects/hack4impact_project_thumbnail.png"}
              />

              <ProjectCard
                title="This Website"
                description="The site you're exploring right now—built as a living lab for my projects, ideas and creative pursuits."
                techStack={['Javascript', 'React', 'Tailwind CSS']}
                gitLink="https://github.com/Gui-Oba/Portfolio"
                // blogLink={"/writing/this-website"}
                detailLink="/projects/portfolio"
                mediaSrc={"/projects/portfolio_project_thumbnail.png"}

              />

              <ProjectCard
                title="BrickPi Robot"
                description="A LEGO BrickPi robot trained on sensor data to complete repeatable tasks autonomously."
                techStack={['Python', 'LEGO BrickPi', 'Thonny']}
                // blogLink={"/writing/brickpi-robot"}
                detailLink="/projects/brickpi-robot"
                mediaSrc={"/projects/brickpi_project_thumbnail.png"}
              />
              <ProjectCard
                title="ER Companion"
                description="Reimagining the emergency department waiting experience with real-time queue transparency."
                techStack={['React', 'Typescript', 'Python']}
                detailLink="/projects/mediqueue"
                mediaSrc={"/projects/mediqueue_project_thumbnail.png"}
                gitLink={"https://github.com/Gui-Oba/mediqueue"}
              />

              <ProjectCard
                title="PantryPal"
                description="A Java-based grocery management platform keeping store operations, customers, and employees in sync."
                techStack={['Java', 'Gradle', 'Cucumber', 'Umple']}
                gitLink={"https://github.com/Gui-Oba/PantryPal"}
                detailLink="/projects/pantrypal"
                mediaSrc={"/projects/pantrypal_project_thumbnail.jpg"}
              />

              {/* <ProjectCard
                title="Grocery Mangement System"
                description="A web application for managing grocery lists and recipes."
                techStack={['Java', 'Gherkin', 'Umple']}
                repoLink="https://github.com/Gui-Oba/Grocery-Management-System"
              /> */}
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-black text-center mb-6">
              Skills
            </h2>
            <SkillsTab />
          </div>
        </section>

        {/* Projects Section */}
        <section id="whoami" className="py-20 bg-white">
          <div className="mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-black text-center mb-10">
              Who Am I?
            </h2>
            <div className="max-w-4xl grid grid-cols-2 mx-auto gap-5 mb-10 place-items-center">
              <p className="text-lg text-center text-black">
                I'm a third year Computer Engineering student at McGill University passionate about machine learning, data science and computer hardware.
                <br></br><br></br>
                My journey in tech has been fueled by curiosity and a desire to create impactful solutions. From my work at
                Hack4Impact McGill, a nonprofit whose mission is to develop software for humanitarian organizations,
                to my participation in many hackathons, including last year's FIAM Asset Management Hackathon,
                I actively seek out opportunities to test my skills and expand my understanding.
                Whether it's through coding, collaborating on projects, or exploring new technologies,
                I'm always eager to learn and grow.<br></br><br></br>
                In my spare time, you can find me tackling new routes at the bouldering gym or going for a run around the city.
              </p>

            <img src={Logo} alt="Gui Oba Logo" className="h-3/4 w-3/4" />

            </div>
            {/* <h1 className="flex items-left justify-center ml-20 space-x-3">
              <img src={Prince} alt="Gui Oba" className="h-60 w-260" />
            </h1> */}
          </div>
          {/* </div> */}
        </section>

        <section id="links" className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-black mb-6">Links</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Connect with me on LinkedIn, or check out my projects on GitHub.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/guilherme-oba/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center  border border-gray-300 px-6 py-3 text-base font-semibold text-black transition hover:bg-gray-100"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Gui-Oba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center  border border-gray-300 px-6 py-3 text-base font-semibold text-black transition hover:bg-gray-100"
              >
                GitHub
              </a>

              
              <a
                href="https://devpost.com/guioba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center  border border-gray-300 px-6 py-3 text-base font-semibold text-black transition hover:bg-gray-100"
              >
                Devpost
              </a>

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
