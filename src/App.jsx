
import Header from "./components/Header.jsx";
import LeftNav from "./components/LeftNav.jsx";
import PaymentOverview from "./page/PaymentOverview.jsx";

export default function App() {
  return (
    <div className="h-screen w-screen bg-cyan-50">
      <LeftNav />
      <Header />
      <PaymentOverview />
    </div>
  );
}

