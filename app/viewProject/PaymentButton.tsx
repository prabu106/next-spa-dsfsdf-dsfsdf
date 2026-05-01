"use client";

import Link from "next/link";
import { useState } from "react";

export default function PaymentButton() {
    const [amount, setAmount] = useState(4999);

    const payNow = async () => {
        if (!amount) return alert("Enter amount");

        // Step 1: Create order from backend
        const res = await fetch("/api/create-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount }),
        });

        const order = await res.json();

        // Step 2: Razorpay options
        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // public key
            amount: order.amount,
            currency: order.currency,
            name: "Acme Corp",
            description: "Test Transaction",
            order_id: order.id,

            handler: async function (response: any) {
                // Step 3: Verify payment
                const verifyRes = await fetch("/api/verify-payment", {
                    method: "POST",
                    body: JSON.stringify(response),
                });

                const verifyData = await verifyRes.json();

                if (verifyData.success) {
                    alert("Payment Successful ✅");
                } else {
                    alert("Payment Failed ❌");
                }
            },

            prefill: {
                name: "prabu venk",
                email: "prabuvenk87@gmail.com",
                contact: "91875124497",
            },

            theme: {
                color: "#F37254",
            },
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.open();
    };

    return (
        <div>
            <Link
                href="javascript:void(0)"
                className="mt-7 flex items-center justify-center gap-3 rounded-lg bg-[linear-gradient(180deg,#ff9f18_0%,#ff8200_100%)] px-5 py-4 text-sm font-bold text-white shadow-[0_12px_24px_rgba(255,130,0,0.28)]"
                onClick={(e) => {
                    e.preventDefault();
                    payNow();
                }}
            >
                <LockIcon className="h-5 w-5" />
                Pay Now & Get Project
            </Link>
            {/* <h1>Razorpay Payment Gateway Integration</h1>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={payNow}>Pay Now</button> */}
        </div>
    );
};

function LockIcon({ className }: { className?: string }) {
    return <svg viewBox="0 0 32 32" fill="none" className={className}><rect x="8" y="14" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M12 14v-4a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="2" /><path d="M16 19v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}