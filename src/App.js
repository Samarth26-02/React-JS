import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import EventsDemo from "./EventsDemo";
import GreatingEvent from "./GreatingEvent";
import LoginControl from "./LoginControl";
import NameList from "./NameList";
import NameListWithKey from "./NameListWithKey";
import Notification from "./Notification";
import TaskList from "./TaskList";
import TextForm from "./TextForm";
import TextInput from "./TextInput";
import ToggleMessage from "./ToggleMessage";
import UserList from "./UserList";
import UserForm from "./UserForm";
import PreferenceForm from "./PreferenceForm";
import UncontrolledForm from "./UncontrolledForm";
import RegistrationForm from "./RegistrationForm";
import TitleUpdater from "./TitleUpdater";
function App(){
  return(
    <div>
      <h1>Hi, This is just a useState example</h1>
      <Counter />
      <ClickEvent />
      <GreatingEvent />
      <TextInput />
      <EventsDemo />
      <Notification hasNewMessage={true}/>
      <Notification hasNewMessage={false}/>
      <LoginControl />
      <ToggleMessage />
      <NameList />
      <NameListWithKey />
      <UserList />
      <TaskList />
      <TextForm />
      <UserForm />
      <PreferenceForm />
      <UncontrolledForm />
      <RegistrationForm />
      <TitleUpdater />
    </div>
  );
}

export default App;