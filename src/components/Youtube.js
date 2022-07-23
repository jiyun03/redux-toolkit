import { useSelector } from "react-redux";

function Youtube() {
  const youtube = useSelector((store) => store.youtube.data);

  return (
    <section>
      <h1>Youtube</h1>
      {youtube.map((vid) => {
        return <p key={vid.id}>{vid.snippet.title}</p>;
      })}
    </section>
  );
}

export default Youtube;
