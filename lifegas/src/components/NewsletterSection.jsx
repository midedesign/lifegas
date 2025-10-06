import React, { useState } from "react";

const NewsletterSection = ({
  title = "Join our design circle for exclusive drops, styling tips, and early access.",
  placeholder = "Email address",
  buttonText = "Subscribe Now",
  onSubscribe,
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      setMessage("Please enter your email address");
      return;
    }

    if (!isValidEmail(email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      if (onSubscribe) {
        await onSubscribe(email);
      } else {
        // replacing with API call
        console.log("Subscribing email:", email);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating API call
      }

      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-3xl mx-auto text-center px-6">
        {/* Main Heading */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-8 leading-relaxed">
          {title}
        </h3>

        {/* Subscription Input */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={placeholder}
              className="w-full px-4 py-3 border border-gray-300 text-center text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors duration-200"
              disabled={isSubmitting}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full md:w-auto bg-gray-900 text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-gray-800 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {isSubmitting ? "Subscribing..." : buttonText}
          </button>
        </div>

        {/* Success/Error Message */}
        {message && (
          <div
            className={`mt-4 text-sm ${
              message.includes("Thank you") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
