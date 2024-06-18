"use client"

import Link from "next/link"
import Image from "next/image"
import { type Session } from "next-auth"
import { signOut } from "next-auth/react"

const Header = ({ session }: { session: Session | null}) => {
    return (
        <header className="bg-gray-800 text-white p-8 z-10">
            <ul className="flex items-center space-x-4">
                { session ? (
                <>
                <li>
                    <Image
                        src={session.user?.image ?? ""} //iamgeがNullの場合は""(空文字)を返す
                        alt={session.user?.name ?? ""}
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                </li>
                <li>
                    <button
                        onClick={() => signOut()}
                        className="rounded-lg bg-blue-500 px-4 py-[7px] text-white hover:bg-gray-600"
                    >
                        Logout
                    </button>
                </li>
                </>
                ) : (
                <>
                <li>
                    <Link href="/login">
                        <button
                            className="rounded-lg bg-blue-500 px-4 py-[7px] tect-white hover:bg-grat-600"
                        >
                            Login
                        </button>
                    </Link>
                </li>
                </>
                )}
            </ul>
        </header>
    )
}

export default Header