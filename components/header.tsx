import Link from 'next/link';

export const Header = () => {
  return (
    <header className="flex justify-center mt-12">
      <div className="container">
        <nav>
          <ul className="flex items-center justify-center gap-10 text-lg font-bold uppercase tracking-wider text-gray-500">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
