import FooterContentContainer from "../../Components/LayoutContentContainer/FooterContentContainer";
// Style
import "./style.css";
// App
const FooterLayoutContainer = () => {
  return (
    <footer data-testid="footer-layout-container" className="footer-layout-container">
      <FooterContentContainer />
    </footer>
  );
};

export default FooterLayoutContainer;
