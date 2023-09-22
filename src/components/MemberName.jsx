import "./MemberName.css";

const MemberName = ({ name, classe }) => {
  return <h1 className={classe}>{name}</h1>;
};

export default MemberName;
