import { useSelector } from "react-redux";

function Members() {
  const members = useSelector((store) => store.members.data);

  return (
    <section>
      <h1>Members</h1>
      {members.map((member) => {
        return <p key={member.position}>{member.name}</p>;
      })}
    </section>
  );
}

export default Members;
