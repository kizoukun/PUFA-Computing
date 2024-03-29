"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Toast } from "@/lib/Toast";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target as HTMLFormElement);
        const { email, password } = Object.fromEntries(formData.entries());
        await signIn("credentials", {
            email,
            password,
            redirect: false,
        }).then((response) => {
            setLoading(false);

            if (!response?.ok || response?.error) {
                Toast.fire({
                    icon: "error",
                    title: response?.error || "Something went wrong",
                });
                return;
            }
            Toast.fire({
                icon: "success",
                title: "Login successful",
            });
            router.push("/dashboard/profile");
        });
    };

    return (
        <form onSubmit={handleLogin}>
            <div className="mt-8">
                <div className="relative flex items-center">
                    <span className="absolute"></span>
                    <input
                        type="email"
                        className="block w-full rounded-lg border bg-white px-6 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring-blue-300 md:px-10"
                        placeholder="Email"
                        name="email"
                    />
                </div>
            </div>

            <div className="mt-4">
                <div className="relative flex items-center">
                    <span className="absolute"></span>
                    <input
                        type="password"
                        className="block w-full rounded-lg border bg-white px-6 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring-blue-300 md:px-10"
                        placeholder="Password"
                        name="password"
                    />
                </div>
            </div>

            <div className="mt-6">
                <button
                    type="submit"
                    className="w-full transform rounded-lg border border-[#6B7280] bg-white px-6 py-3 text-sm font-medium capitalize tracking-wide text-[#6B7280] transition-colors duration-300 hover:bg-[#6B7280] hover:text-white"
                >
                    {loading ? "Loading..." : "Sign In"}
                </button>
                <h1 className="pt-1 text-center font-[400] text-[#475467] text-[0.875] md:pt-3">
                    Doenst have an account ?
                    <span className="text-[#02ABF3] hover:underline">
                        <Link href={"/auth/signup"}> Sign Up</Link>{" "}
                    </span>
                </h1>
            </div>
        </form>
    );
}
