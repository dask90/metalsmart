import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="about-hero">
          <h1>About MetalsMart</h1>
          <p>
            Reliable Suppliers of Roofing Sheets, Iron Rods, and Structural
            Metals Across Ghana.
          </p>
        </section>

        {/* Company Intro */}
        <section className="about-intro container">
          <h2>Who We Are</h2>
          <p>
            MetalsMart is a trusted supplier of high-quality building and
            construction materials, including iron rods, galvanized and aluminum
            roofing sheets, angle bars, flat bars, and more. With years of
            experience in the industry, we&rsquo;ve grown from a small local
            distributor into a major supplier serving contractors, engineers,
            and developers across Ghana and West Africa.
          </p>
          <p>
            Our reputation is built on consistency, transparency, and fast
            delivery. Whether you&rsquo;re building a home, office, warehouse,
            or industrial site — we supply durable materials that meet both
            local and international standards.
          </p>
        </section>

        {/* Mission + Vision */}
        <section className="about-values">
          <div className="container values-grid">
            <div>
              <h3>Our Mission</h3>
              <p>
                To be the most reliable supplier of metals and building
                materials in West Africa by delivering unmatched quality, speed,
                and customer service at every stage of the construction process.
              </p>
            </div>
            <div>
              <h3>Our Vision</h3>
              <p>
                To empower builders and developers by providing timely access to
                premium construction materials, enabling safer, stronger, and
                longer-lasting structures across the region.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-us container">
          <h2>Why Choose MetalsMart?</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <h4>Top-Grade Materials</h4>
              <p>
                We only supply certified and quality-verified materials that
                stand the test of time, whether for residential or industrial
                use.
              </p>
            </div>
            <div className="reason-card">
              <h4>Nationwide Delivery</h4>
              <p>
                We deliver to all regions in Ghana with fast logistics partners
                and tracking — no matter the scale of your project.
              </p>
            </div>
            <div className="reason-card">
              <h4>Customer-First Support</h4>
              <p>
                Our sales team is on standby to assist with quotes, product
                specs, and delivery coordination every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="about-cta">
          <h2>Ready to Get Started?</h2>
          <p>
            Contact us today for pricing, availability, and delivery options and
            let&rsquo;s build something strong together.
          </p>
          <a href="/services" className="btn-outline">
            View Our Services
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
