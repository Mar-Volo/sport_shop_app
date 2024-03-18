import TopLine from "../Header/TopLine";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ForCatalog from "../ForCatalog/ForCatalog";
import Products from "../Products/Products";

function App() {
  return (
    <div className="App">
      <TopLine />
      <Header />
      <main>
        <Hero />
        <ForCatalog/>
        <Products/>
      </main>
    </div>
  );
}

export default App;
