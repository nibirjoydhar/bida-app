export default function Footer() {
  // Example content data (can be dynamic later)
  const links = [
    { name: "BIDA Official", url: "https://bida.gov.bd" },
    { name: "BIDA One Stop Service (OSS)", url: "https://oss.bida.gov.bd" },
  ];

  const socials = [
    { name: "Facebook", url: "https://www.facebook.com/bidabd", icon: "F" },
    { name: "X", url: "https://twitter.com/bidabd", icon: "X" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/bangladesh-investment-development-authority-bida-", icon: "In" },
    { name: "YouTube", url: "https://www.youtube.com/user/bidabd", icon: "▶" },
  ];

  const visitorCount = 2725; // can be dynamic from API later

  return (
    <footer id="contact" className="bg-blue-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Links + Visitor */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <h4 className="font-semibold text-lg mt-6 mb-2">Visitor Count</h4>
          <p>{visitorCount.toLocaleString()}</p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
          <p className="space-y-2">
            Address: E-6/B Agargaon, Sher-e-Bangla Nagar, Dhaka-1207<br />
            Email: <a href="mailto:dd.ossrr@bida.gov.bd" className="hover:text-red-500">dd.ossrr@bida.gov.bd</a><br />
            Phone: <a href="tel:+880244826783" className="hover:text-red-500">+880 2448 26783</a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-2xl">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="hover:text-red-500 transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-blue-800 text-center text-sm py-4 mt-6">
        <p>
          &copy; {new Date().getFullYear()} Bangladesh Investment Development Authority. All rights reserved.<br />
          Powered by <strong>Astha IT</strong>
        </p>
      </div>
    </footer>
  );
}
