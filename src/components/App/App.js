import TopLine from "../Header/TopLine";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ForCatalog from "../ForCatalog/ForCatalog";
import Products from "../Products/Products";
import Subscribe from "../Subscribe/Subscribe";

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
      </main>
    </div>
  );
}

export default App;
