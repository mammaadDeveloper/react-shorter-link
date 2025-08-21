import Header from "./Header";
import RecentLinks from "./RecentLinks";
import ShortenBox from "./ShortenBox";

function App() {
  return (
    <div className="app">
      <Header/>
      <main>
        <ShortenBox/>
        <RecentLinks/>
      </main>
    </div>
  )
}

export default App;
