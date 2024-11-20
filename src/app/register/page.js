"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleFormSubmit(e) {
        e.preventDefault();
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type' : 'application/json'},
        });
    }
    return (
        <section>
            <h1 className="text-center text-green-700 text-4xl mb-4">
                Register
            </h1>
            <form className="block max-w-xs mx-auto">
                <input type="email" placeholder="email" onSubmit={handleFormSubmit}
                    value={email}
                    // disabled={creatingUser}
                    onChange={e => setEmail(e.target.value)}
                />
                <input type="password" placeholder="password"
                    value={password}
                    //     disabled={creatingUser}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit"
                // disabled={creatingUser}
                >
                    Register
                </button>
                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                <button
                    // onClick={() => signIn('google', { callbackUrl: '/' })}
                    className="flex gap-4 justify-center mb-4">
                    <Image src={'/google.png'} alt={''} width={24} height={24} />
                    Login with google
                </button>
                {/* <div className="text-center my-4 text-gray-500 border-t pt-4">
                    Existing account?{' '}
                    <Link className="underline" href={'/login'}>Login here &raquo;</Link>
                </div> */}
            </form>
        </section>
    )
}