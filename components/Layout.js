import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">eMazadi</h1>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/browse">Browse</Link>
          <Link href="/sell">Sell</Link>
          <Link href="/login">Login</Link>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-black text-white text-center p-4 text-sm">
        © 2025 eMazadi
      </footer>
    </div>
  );
}