import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>
            We&rsquo;re ready to supply your next build — reach out today for
            quotes, availability, and support.
          </p>
        </section>

        {/* Contact Info + Form */}
        <section className="contact-section">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Let&rsquo;s Talk</h2>
            <p>
              Whether you&rsquo;re a contractor, builder, engineer, or
              individual homeowner — our team is here to help you get the right
              materials fast and affordably.
            </p>
            <ul>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+233256565609">+233 20 382 7230</a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:sales@metalsmart.com">sales@metalsmart.com</a>
              </li>
              <li>
                <strong>Office Hours:</strong> Mon – Sat, 7:00 AM – 6:00 PM
              </li>
              <li>
                <strong>Location:</strong> MetalsMart Yard, Spintex Road, Accra,
                Ghana
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your full name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="you@example.com" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows={4} placeholder="What can we help you with?" />
              </div>
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* CTA Section */}
        <section className="contact-cta">
          <h3>Prefer to chat on WhatsApp?</h3>
          <p>Send us a quick message and get a reply fast.</p>
          <a
            href="https://wa.me/233256565609"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            Chat on WhatsApp
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
