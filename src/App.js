import { Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Youtube from "./components/Youtube";
import Flickr from "./components/Flickr";
import { fetchYoutube } from "./redux/youtubeSlice";
import { fetchFlickr } from "./redux/flickrSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchYoutube());
    //fetchFlickr는 파라미터로 opt객체를 받으므로 url에 적용될 정보값을 객체로 인수 전달
    dispatch(fetchFlickr({ type: "interest" }));
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
