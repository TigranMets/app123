import { combineReducers, createStore, compose } from "redux";
import HomeReducer from "./Home-reducer";
import ExperiencesReducer from "./Experiences-reducer";
import AchievemtnsReducer from './Achievemtns-reducer';
import ProjectsReducer from './Projects-reducer';
import BigProjectsReducer from './BigProjects-reducer';
import BlogsReducer from './Blogs-reducer';
import SkillsReducer from './Skills-reducer';

let reducers = combineReducers({
    Home: HomeReducer,
    Experiences: ExperiencesReducer,
    Achievemtns: AchievemtnsReducer,
    Projects: ProjectsReducer,
    BigProjects: BigProjectsReducer,
    Blogs: BlogsReducer,
    Skills: SkillsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());
window.store = store;

export default store;