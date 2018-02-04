import { combineReducers } from 'redux';
import TasksReducer from './reducer_tasks'
import ProjectsReducer from './reducer_projects'
import ContactsReducer from './reducer_contacts'
const rootReducer = combineReducers({
  tasks: TasksReducer,
  projects: ProjectsReducer,
  contacts: ContactsReducer
});

export default rootReducer;
