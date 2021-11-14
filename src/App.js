import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import HomeContainer from './Components/Home/HomeContainer';
import SkillsContainer from './Components/Skills/SkillsContainer';
import Proficiency from './Components/Proficiency/Proficiency.jsx';
import BigProjectsContainer from './Components/BigProjects/BigProjectsContainer';
import BlogsContainer from './Components/Blogs/BlogsContainer';
import ExperiencesContainer from './Components/Experiences/ExperiencesContainer';
import AchievementsContainer from './Components/Achievements/AchievementsContainer';
import ProjectsContainer from './Components/Projects/ProjectsContainer';
import BottomFooter from './Components/BottomFooter/BottomFooter';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Navbar />
      <HomeContainer />
      <SkillsContainer />
      <Proficiency />
      <ExperiencesContainer />
      <ProjectsContainer />
      <BigProjectsContainer />
      <AchievementsContainer />
      <BlogsContainer />
      <Footer />
      <BottomFooter />
    </div>
  );
}

export default App;
