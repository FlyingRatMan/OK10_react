import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <>
      <div className="wrap">
        <Users /> <Posts />
      </div>
      <Comments />
    </>
  );
}

export default App;