import { Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Youtube from "./components/Youtube";
import Flickr from "./components/Flickr";

function App() {
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
