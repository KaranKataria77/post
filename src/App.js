import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from './components/Post/Post';
import Userview from './components/Userview/Userview';
import PostView from './components/PostView/PostView';
import SearchUser from './components/SearchUser/SearchUser';


function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Post}>
          <Post />
        </Route>
        <Route path="/user/:id" component={Userview}>
          <Userview />
        </Route>
        <Route path="/post/:id" component={PostView}>
          <PostView />
        </Route>
        <Route  path="/search" component={SearchUser}>
          <SearchUser />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
