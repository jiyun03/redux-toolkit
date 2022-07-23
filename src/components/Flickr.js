import { useSelector } from "react-redux";

function Flickr() {
  const flickr = useSelector((store) => store.flickr.data);
  console.log(flickr);

  return (
    <section>
      <h1>Flickr</h1>
      {flickr.map((pic) => (
        <p key={pic.id}>{pic.title}</p>
      ))}
    </section>
  );
}

export default Flickr;
