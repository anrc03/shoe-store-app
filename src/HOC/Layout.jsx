import Footer from "../page/Footer";
import Navbar from "../page/Navbar";

const withLayout = Page => {
    return () => (
      <div>
        <Navbar />
        <Page />
        <Footer />
      </div>
    );
  };
  
  export default withLayout;