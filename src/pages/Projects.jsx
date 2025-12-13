import '../App.css';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h1 className="mb-2 text-4xl font-extrabold text-gray-900">Projects</h1>
            <p className="text-md mb-10 text-gray-600">
              A collection of experiments, collaborations, and longer-term builds. Click through to explore the full
              write-ups with context, media, and technical notes.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Stitch - Learn Neural Nets"
              description="An interactive playground for building and understanding neural networks"
              techStack={['PyTorch', 'Typescript', 'Python', 'Flask', 'React']}
              gitLink="https://github.com/Gui-Oba/Stitch"
              detailLink="/projects/stitch"
              mediaSrc={"/public/projects/stitch_project_thumbnail.png"}
            />

             <ProjectCard
                            title="Asset Management Model"
                            description="Cross-sectional equity return prediction pipeline built during the FIAM hackathon."
                            techStack={['Jupyter Notebook', 'DuckDB', 'Python', 'XGBoost']}
                            gitLink="https://github.com/Gui-Oba/FIAM-model-A"
                            detailLink="/projects/investment-model"
                            mediaSrc={"/public/projects/FIAM_project_thumbnail.png"}
                          />
            
            <ProjectCard
              title="H4I McGill Website"
              description="A refreshed digital home for Hack4Impact McGill showcasing projects, partners, and student stories."
              techStack={['HTML', 'Next.js', 'React', 'JavasScript']}
              gitLink="https://github.com/Gui-Oba/Hack4Impact-McGill-Website"
              demoLink={"https://mcgill.hack4impact.org"}
              detailLink="/projects/hack4impact-mcgill"
              mediaSrc={"public/projects/hack4impact_project_thumbnail.png"}
            />
            <ProjectCard
              title="This Website"
              description="The site you're exploring right now—built as a living lab for design systems, content pipelines, and performance experiments."
              techStack={['Javascript', 'React', 'Tailwind CSS', 'Vite']}
              gitLink="https://github.com/Gui-Oba/Portfolio"
              detailLink="/projects/portfolio"
              mediaSrc={"public/projects/portfolio_project_thumbnail.png"}

            />
            <ProjectCard
              title="BrickPi Robot"
              description="A LEGO BrickPi robot trained on sensor data to complete repeatable tasks autonomously."
              techStack={['Python', 'LEGO BrickPi', 'Thonny']}
              detailLink="/projects/brickpi-robot"
              mediaSrc={"public/projects/brickpi_project_thumbnail.png"}
            />
            <ProjectCard
              title="ER Companion"
              description="Reimagining the emergency department waiting experience with real-time queue transparency."
              techStack={['React', 'Typescript', 'Python']}
              detailLink="/projects/mediqueue"
              mediaSrc={"public/projects/mediqueue_project_thumbnail.png"}
              gitLink={"https://github.com/Gui-Oba/mediqueue"}
            />
            <ProjectCard
              title="PantryPal"
              description="A Java-based grocery management platform keeping store operations, customers, and employees in sync."
              techStack={['Java', 'Gradle', 'Cucumber', 'Umple']}
              gitLink={"https://github.com/Gui-Oba/PantryPal"}
              detailLink="/projects/pantrypal"
              mediaSrc={"public/projects/pantrypal_project_thumbnail.jpg"}

            />
          </div>
        </div>
      </main>
      <footer className="mt-auto bg-white">
        <div className="container mx-auto px-6 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Gui Oba. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
