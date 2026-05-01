"use client";

import { useState } from "react";

export default function Pay() {
  const [amount, setAmount] = useState("");

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
    <div style={{ padding: "20px" }}>
      <h1>Razorpay Payment Gateway Integration</h1>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={payNow}>Pay Now</button>
    </div>
  );
}