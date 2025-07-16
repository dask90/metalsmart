import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="services-hero">
          <h1>Our Services</h1>
          <p>
            Supplying top-grade metals and building materials with nationwide
            delivery and exceptional service.
          </p>
        </section>

        {/* Services List */}
        <section className="services-list container">
          <h2>What We Offer</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Iron Rod Supply</h3>
              <p>
                Wide range of iron rods (mild steel, high tensile) in various
                sizes and grades, ideal for foundations, beams, columns, and
                reinforced structures.
              </p>
            </div>
            <div className="service-card">
              <h3>Roofing Materials</h3>
              <p>
                Galvanized and aluminum roofing sheets (trapezoidal, self-lock,
                standing seam) with color options. Cut-to-size available.
              </p>
            </div>
            <div className="service-card">
              <h3>Structural Metal Supply</h3>
              <p>
                Angle bars, flat bars, I-beams, C-channels, steel pipes — in
                stock. Ideal for warehouses and industrial builds.
              </p>
            </div>
            <div className="service-card">
              <h3>Custom Orders</h3>
              <p>
                Need custom sizing or rare specs? We handle fabrication and
                special sourcing to meet your build requirements.
              </p>
            </div>
            <div className="service-card">
              <h3>Nationwide Delivery</h3>
              <p>
                We deliver across all 16 regions in Ghana, with logistics for
                both small and large-scale orders.
              </p>
            </div>
            <div className="service-card">
              <h3>Project Support & Advice</h3>
              <p>
                We advise on material specs and quantities from your drawings or
                BOQ to help you save time and avoid waste.
              </p>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="services-gallery container">
          <h2>Materials in Action</h2>
          <div className="gallery-grid">
            <img src="/services/i4.jpg" alt="Iron Rods" />
            <img src="/services/i2.jpeg" alt="Roofing Sheets" />
            <img src="/services/i3.jpeg" alt="Steel Pipes" />
            <img src="/services/i1.jpeg" alt="Angle Bars" />
            <img src="/services/i5.jpeg" alt="Warehouse Frames" />
            <img src="/services/i6.jpg" alt="Construction Work" />
          </div>
        </section>

        {/* CTA */}
        <section className="services-cta">
          <h2>Get a Quote or Ask About Availability</h2>
          <p>
            Reach out today and let our team assist with your next build. Fast
            response, competitive pricing, and real support from real people.
          </p>
          <a href="/contact" className="btn-outline">
            Contact Us
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
