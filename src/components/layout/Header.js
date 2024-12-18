import Link from "next/link";

export default function Header() {

    return (
        <header className="flex items-center justify-between">
            <nav className="flex items-center gap-8 font-semibold">
                <Link className="text-2xl text-green-700 font-bold" href='/'>
                    Pizza Hurt
                </Link>
                <Link href='/'>Home</Link>
                <Link href=''>Menu</Link>
                <Link href=''>About</Link>
                <Link href=''>Contact</Link>
            </nav>
            <nav className="flex items-center gap-8 font-semibold">
                <Link href={'/login'}>Login</Link>
                <Link href={'/register'} className="bg-green-700 text-white px-8 py-2 rounded-full">Register</Link>
            </nav>
        </header>
    );
}