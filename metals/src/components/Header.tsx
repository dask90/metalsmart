import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="header-content container">
        <Link
          href="/"
          className="logo"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Image src="/log.jpg" alt="Logo" width={40} height={40} />
          <span
            style={{
              marginLeft: "10px",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#0056b3",
            }}
          >
            MetalsMart
          </span>
        </Link>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
