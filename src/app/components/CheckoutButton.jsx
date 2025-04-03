import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

// Validate environment variable
if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error("Missing required environment variable: NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY");
}

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutButton({ priceId }) { // Changed productId to priceId
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    console.log("Sending priceId to API:", priceId); // Log the priceId
    try {
        const stripe = await stripePromise;

        const response = await fetch("/api/stripe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ priceId }), // Ensure priceId is being sent
        });

        const data = await response.json();

        if (data.error) {
            alert(`Error: ${data.error}`);
            return;
        }

        if (data.id) {
            await stripe.redirectToCheckout({ sessionId: data.id });
        } else {
            console.error("Stripe session error:", data.error);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An unexpected error occurred. Please try again.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
    >
      {loading ? "Processing..." : "Get it now!"}
    </button>
  );
}
