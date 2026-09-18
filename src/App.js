import Navbar from "./Navbar";
import Footer from "./Footer";
import WorldGlobe from "./WorldGlobe";
import PaymentAnimation from "./PaymentAnimation";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <section className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <span className="hero-label">
                PAYMENTS • FINTECH • GLOBAL
              </span>

              <h1>
                Money moves
                <span> the world.</span>
              </h1>

              <p>
                Explore how modern payment systems, fintech innovations and
                global networks connect people, businesses and economies.
              </p>

              <a href="#posts" className="hero-button">
                Explore Our Blog
              </a>
            </div>

            <div className="hero-globe">
              <WorldGlobe />
            </div>
          </div>
        </section>

        <section className="about">
          <div className="container">
            <div className="about-heading">
              <span className="section-label">HOW PAYMENTS MOVE</span>

              <h2>What happens to a cross-border payment?</h2>

              <p>
                A simple look at how a payment travels from one person to
                another across borders.
              </p>
            </div>

            <PaymentAnimation />
          </div>
        </section>

       <section className="posts" id="posts">
          <div className="container">
            <h2>Latest Posts</h2>

            <div className="card-grid">
              <div>
              <h3>What is happening in a Cross Border Payment?</h3>

              <p>
                A debtor instructs their bank to make a payment using a{" "}
                <strong>pain.001</strong> message.
              </p>

              <p>
                The sending bank processes the instruction and initiates the
                cross-border payment.
              </p>

              <p>
                The sending bank sends an interbank payment message,{" "}
                <strong>pacs.008</strong>, to the receiving bank.
              </p>

              <p>
                The receiving bank processes the payment and makes the funds available
                to the <strong>creditor</strong>.
              </p>
            </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;