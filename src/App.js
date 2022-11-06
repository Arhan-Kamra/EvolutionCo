import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

import Approach from "./components/Approach";
import Banner from "./components/Banner";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Initiatives from "./components/Initiatives";
import Legislative from "./components/Legislative";
import Search from "./components/Search";
import SearchBar from "./components/SearchBar";
import Sustainability from "./components/Sustainability";

function App() {
  return (
      <div>
        

          <SearchBar />
          <Search />
          <Header />
          <Banner />
          <Initiatives />
          <Approach />
          <Sustainability />
          <Community />
          <Legislative />
          <Footer />

          
    </div>
  );
}

export default App;
