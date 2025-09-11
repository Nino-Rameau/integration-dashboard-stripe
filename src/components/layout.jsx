import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-150 bg-neutral-100 dark:bg-gray-800">
      <Header />

      <main className="flex-grow mx-auto py-8">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;