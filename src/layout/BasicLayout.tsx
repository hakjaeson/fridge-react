import Footer from "../component/layout/Footer";
import Header from "../component/layout/Header";
import { LayoutWrapper } from "../style/LayoutStyles";
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
        <main>{children}</main>
        {/* @AREA Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </LayoutWrapper>
  );
};

export default BasicLayout;
