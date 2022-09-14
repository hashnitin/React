import Logo from "./Logo";
import UserProfile from "./UserProfile";
import Container from "../UI/Container";
import "./Header.css";

const Header = () => {
  return (
    <Container className="row">
      <Logo />
      <UserProfile />
    </Container>
  );
};

export default Header;
