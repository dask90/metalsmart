import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export default function Home() {
  return (
    <div className="page-container">
      <Header />

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <h1>Premium Metals & Roofing Materials</h1>
          <p>
            Iron rods, roofing sheets, and metal products — delivered with
            quality you can trust.
          </p>
          <a href="/services" className="btn-primary">
            Explore Our Products
          </a>
        </section>

        {/* Core Products */}
        <section className="section products-section">
          <div className="section-heading">Our Core Products</div>
          <div className="cards">
            <div className="card">
              <h3>Iron Rods</h3>
              <p>
                Standard high-tensile rods for strong foundations and durable
                structures.
              </p>
            </div>
            <div className="card">
              <h3>Roofing Sheets</h3>
              <p>
                Modern roofing in aluminum, galvanized, and longspan formats —
                cut to size.
              </p>
            </div>
            <div className="card">
              <h3>Metal Supplies</h3>
              <p>
                Square pipes, angle bars, flat bars, and more — available in
                custom quantities.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section why-us-section">
          <div className="section-heading">Why Choose MetalsMart?</div>
          <div className="features">
            <div className="feature">
              <h4> Quality Assured</h4>
              <p>
                We deal only in high-grade materials that meet industry
                standards for strength and durability.
              </p>
            </div>
            <div className="feature">
              <h4> Fast Delivery</h4>
              <p>
                Same-day and next-day delivery options available across major
                cities in Ghana.
              </p>
            </div>
            <div className="feature">
              <h4> Customer Support</h4>
              <p>
                Our team is available 7 days a week to support your project
                needs, quotes, and logistics.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <h2>Need Materials Urgently?</h2>
          <p>
            Get in touch now for bulk orders, pricing, or to request a quote
            tailored to your project.
          </p>
          <a href="/contact" className="btn-outline">
            Contact Us
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
