import { NextResponse } from "next/server";
import Stripe from "stripe";

// Validate environment variables
if (!process.env.STRIPE_SECRET_KEY || !process.env.NEXT_PUBLIC_BASE_URL) {
    throw new Error("Missing required environment variables: STRIPE_SECRET_KEY or NEXT_PUBLIC_BASE_URL");
}

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Predefined price IDs for each plan
const priceIds = {
    BASIC: "price_1R7ieJ032h14KKiZTDdPLclI",    // Free plan price ID (one-time payment)
    STARTER: "price_1R7ipg032h14KKiZF8ozsUBW",  // Subscription plan price ID
    ADVANCED: "price_1R7irc032h14KKiZv1etY25s", // Subscription plan price ID
    PRO: "price_1R7iuq032h14KKiZodahR8Y3",      // Subscription plan price ID
};

export async function POST(req) {
    try {
        const { priceId } = await req.json(); // Expect priceId
        console.log("Received priceId in API:", priceId); // Log the received priceId

        if (!Object.values(priceIds).includes(priceId)) {
            throw new Error("Invalid price ID");
        }

        const paymentMode = priceId === priceIds.BASIC ? "payment" : "subscription";

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price: priceId, // Use priceId directly
                    quantity: 1,
                },
            ],
            mode: paymentMode,
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
        });

        return NextResponse.json({ id: session.id });
    } catch (error) {
        console.error("Stripe API Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
