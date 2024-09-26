import { Container } from "react-bootstrap";
import styles from "./styles.module.css";
import { Header, Footer } from "../../Components/Common";
const { container, wrapper } = styles;

function MainLayout() {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}></div>
      <Footer />
    </Container>
  );
}

export default MainLayout;
