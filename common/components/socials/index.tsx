import { Facebook, Instagram } from "react-bootstrap-icons";
const Socials = ({ size = 36 }) => (
  <>
    <a
      href="https://www.instagram.com/ccp_coaching/"
      target="_blank"
      rel="noreferrer"
    >
      <Instagram size={size} />
    </a>
    <a
      href="https://www.facebook.com/groups/388597486208321"
      target="_blank"
      rel="noreferrer"
      style={{ marginLeft: `${size / 1.5}px` }}
    >
      <Facebook size={size} />
    </a>
  </>
);

export default Socials;
