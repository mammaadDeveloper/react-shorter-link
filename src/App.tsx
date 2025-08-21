import Header from "./Header";
import RecentLinks from "./RecentLinks";
import ShortenBox from "./ShortenBox";
import './styles/app.scss';

function App() {
  return (
    <div className="app w-full h-screen flex justify-center items-center">
      <div className="container m-2 bg-white rounded-2xl">
        <Header />
        <main>
          <ShortenBox />
          <RecentLinks />
        </main>
      </div>
    </div>
  );
}

export default App;
