import Link from 'next/link';
import style from './header.module.scss';

export function Header() {
  return (
    <header className={style.header}>
      <Link href="/">Home</Link>

      <nav>
        <ul className={style.navList}>
          <li>
            <Link href="/test-1">model 1</Link>
          </li>
          <li>
            <Link href="/test-2">model 2</Link>
          </li>
          <li>
            <Link href="/test-3">model 3</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
