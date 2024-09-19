import "./App.css";
import Booking from "./components/booking/Booking";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <Header />

      <div className="container">
        <main className="main-booking">
          <Booking />
        </main>
      </div>
    </>
  );
}

export default App;
