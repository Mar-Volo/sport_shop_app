import TopLine from "../Header/TopLine";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ForCatalog from "../ForCatalog/ForCatalog";
import Products from "../Products/Products";
import Subscribe from "../Subscribe/Subscribe";
import Comments from "../Comments/Comments";
import Footer from "../Footer/Footer";
import BottomLine from "../BottomLine/BottomLine";

function App() {
  return (
    <div className="App">
      <TopLine />
      <Header />
      <main>
        <Hero />
        <ForCatalog/>
        <Products/>
        <Subscribe/>
        <Comments/>
      </main>
      <Footer/>
      <BottomLine/>
    </div>
  );
}

export default App;
