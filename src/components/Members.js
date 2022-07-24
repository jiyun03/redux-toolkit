import { useSelector } from "react-redux";

function Department() {
  const members = useSelector((store) => store.member.data);

  return (
    <section>
      <h1>Department</h1>
      {members.map((mem, idx) => {
        return <p key={idx}>{mem.name}</p>;
      })}
    </section>
  );
}

export default Department;
