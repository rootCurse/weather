import Link from 'next/link';

export function Header() {
  return (
    <div className="header">
      <Link href="/">Главная</Link>
      <Link href="/favorite">Избранные</Link>
    </div>
  );
}
