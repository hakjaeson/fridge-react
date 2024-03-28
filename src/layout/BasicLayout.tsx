import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { LayoutWrapper, MainWrapper } from "../style/LayoutStyles";
import { layout } from "./Layout";

const BasicLayout: React.FC<layout> = ({ children }) => {
  return (
    <LayoutWrapper>
      <div>
        {/* @AREA Header */}
        <header>
          <Header />
        </header>
        {/* @AREA Main */}
        <MainWrapper>{children}</MainWrapper>
        {/* @AREA Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </LayoutWrapper>
  );
};

export default BasicLayout;
