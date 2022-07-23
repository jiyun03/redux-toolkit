import { useSelector } from "react-redux";

function Main() {
  const youtube = useSelector((store) => store.youtube.data);
  const flickr = useSelector((store) => store.flickr.data);

  return (
    <section>
      <article>
        <h2>Youtube</h2>
        <ul>
          {youtube.map((vid, idx) => {
            if (idx >= 3) return;
            return <li key={vid.id}>{vid.snippet.title}</li>;
          })}
        </ul>
      </article>
      <article>
        <h2>Flickr</h2>
        <ul>
          {flickr.map((pic, idx) => {
            if (idx >= 3) return;
            return (
              <li key={pic.id}>
                <img
                  src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
                  alt={pic.title}
                />
                {pic.owner}
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}

export default Main;
