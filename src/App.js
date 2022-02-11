import Signup from "./component/pages/Signup";
import Login from "./component/pages/Login";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import ArticleView from "./component/article/ArticleView";
import ArticleList from "./component/article/ArticleList";
import AddArticle from "./component/article/AddArticle";
import UpdateArticle from "./component/article/UpdateView";
import About from "./component/about/About";
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";


function App() {
  return (
    <Router>
     <div className="App">
     <Header  />
     <Routes>  
     <Route path="/" element={<Home />}></Route> 
     <Route path="/api/article-list/:id" element={<ArticleList />}></Route>
     <Route path="/api/article-view" element={<ArticleView />}></Route>
     <Route path="/api/create-article" element={<AddArticle />}></Route>
     <Route path="/api/update-article/:id" element={<UpdateArticle />}></Route>
     <Route path="/api/about" element={<About /> }></Route>
     <Route path="/api/signup" element={<Signup />}></Route>
     <Route path="/api/login" element={<Login />}></Route>
     </Routes>
    </div>
    </Router>
  
  );
}

export default App;
