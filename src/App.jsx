
import Header from "./components/Header.jsx";
import LeftNav from "./components/LeftNav.jsx";
import PaymentOverview from "./page/PaymentOverview.jsx";
import "./app.css"
export default function App() {
  return (
    <div className="h-screen w-screen bg-cyan-50 font-sans">
      <LeftNav />
      <Header />
      <PaymentOverview />
    </div>
  );
}

