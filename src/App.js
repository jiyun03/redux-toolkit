import { Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Youtube from "./components/Youtube";
import Flickr from "./components/Flickr";
import { fetchYoutube } from "./redux/youtubeSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchYoutube());
  }, []);

  return (
    <main>
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/youtube" component={Youtube} />
      <Route path="/flickr" component={Flickr} />
    </main>
  );
}

export default App;
