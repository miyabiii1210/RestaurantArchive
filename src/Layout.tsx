import NavBar from "./components/Nav";
import TopMessage from './components/TopMessage';

export default function Layout() {
  return (
    <div>
      <NavBar />
      <div className="container px-10">
        <TopMessage />
      </div>
    </div>
  );
}
