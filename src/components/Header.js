import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const isHome = router.pathname === "/"; // only Home page shows section links

  return (
    <header className="bg-blue-800 sticky top-0 z-50 border-b-2 border-red-600 text-red-600 p-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="logo">
        <img src="/assets/images/BIDA_Logo.png" alt="BIDA Logo" className="h-10" />
      </div>

      {/* Navigation */}
      <nav className="flex gap-6 text-lg font-semibold">
        <Link href="/" className="hover:text-red-500 hover:bg-blue-900 transition">Home</Link>
        <Link href="/about" className="hover:text-red-500 hover:bg-blue-900 transition">About</Link>
        <Link href="/blog" className="hover:text-red-500 hover:bg-blue-900 transition">Blog</Link>

        {/* Section links only for Home page */}
        {isHome && (
          <>
            <a href="#services" className="hover:text-red-500 hover:bg-blue-900 transition">Services</a>
            <a href="#statistics" className="hover:text-red-500 hover:bg-blue-900 transition">Statistics</a>
            <a href="#dashboard" className="hover:text-red-500 hover:bg-blue-900 transition">Dashboard</a>
            <a href="#contact" className="hover:text-red-500 hover:bg-blue-900 transition">Contact</a>
          </>
        )}
      </nav>
    </header>
  );
}
