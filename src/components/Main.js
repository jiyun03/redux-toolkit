import { useSelector } from "react-redux";

function Main() {
  const youtube = useSelector((store) => store.youtube.data);

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
    </section>
  );
}

export default Main;
