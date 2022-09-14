import Container from "./UI/Container";
import Header from "./Comman/Header";
import SideBar from "./Comman/SideBar";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Comman/Footer";
import "./Main.css";

const Main = () => {
  return (
    <div className="container">
      <div className="p-1"></div>
      <Header />
      <div className="p-1"></div>
      <Container className="row padding-top-middle-box">
        <SideBar />
        <Dashboard />
      </Container>
      <div className="p-1"></div>
      <Footer />
    </div>
  );
};

export default Main;
