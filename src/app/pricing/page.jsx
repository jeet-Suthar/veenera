// components/Pricing.js
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react"; // For checkmark icons

import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "For individual dentists or small practices getting started with Veneera AI.",
    features: [
      "5 AI diagnostics per month",
      "Manage up to 10 patient records",
      "Basic veneer visualization (standard colors)",
      "Community support forums",
    ],
    cta: "Sign Up",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    description: "For growing practices needing advanced tools and priority support.",
    features: [
      "Unlimited AI diagnostics",
      "Manage up to 100 patient records",
      "Advanced veneer visualization (custom colors, textures)",
      "Priority email support",
      "Monthly feature updates",
    ],
    cta: "Upgrade to Pro",
    popular: true,
  },
  {
    name: "Pro Plus",
    price: "$99",
    description: "For large practices or clinics requiring premium features and integrations.",
    features: [
      "All Pro features",
      "Unlimited patient records",
      "Integration with dental imaging software",
      "Advanced analytics dashboard",
      "24/7 phone and email support",
      "Early access to new features",
    ],
    cta: "Upgrade to Pro Plus",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <>
      <NavBar />
      <div className="w-full py-12 ">
        <div className="max-w-6xl mx-auto  px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
            Choose the Plan That’s Right for You
          </h2>
          <div className="grid grid-cols-1 py-2 md:py-20 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl ${
                  tier.popular
                    ? "border-1 border-purple-500 bg-purple-100  dark:bg-gray-950"
                    : "border border-gray-200 dark:border-gray-700"
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute top-4 right-4 bg-purple-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                    {tier.name}
                  </CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {tier.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    {tier.price}
                    <span className="text-sm font-normal">/month</span>
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full py-3 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      tier.popular
                        ? "bg-purple-500 hover:bg-purple-600 focus:ring-purple-500 text-white"
                        : "bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 text-white"
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}