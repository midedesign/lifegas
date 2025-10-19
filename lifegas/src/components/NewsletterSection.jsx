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
    <section className="bg-gray-50 py-10 sm:py-12 md:py-16 lg:py-20">
      {" "}
      <div className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto text-center px-4 sm:px-6">
        {/* Main Heading */}
        <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-normal md:font-light text-salmonpink-1000 mb-6 sm:mb-8 leading-relaxed md:leading-tight">
          {title}
        </h3>

        {/* Subscription Input */}
        <div className="mt-6 sm:mt-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto">
          <div className="mb-3 sm:mb-4 md:mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={placeholder}
              className="w-full px-3 sm:px-4 py-3 bg-salmonpink-100 text-left text-lightolive-300 placeholder-lightolive-300 text-xs sm:text-sm md:text-base focus:outline-none focus:bg-salmonpink-100 transition-colors duration-200"
              disabled={isSubmitting}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-salmonpink-1100 text-white px-6 sm:px-8 py-3 text-xs sm:text-sm md:text-sm font-semibold uppercase tracking-wider hover:bg-salmonpink-1000 disabled:bg-salmonpink-1000 disabled:cursor-not-allowed transition-colors duration-300 shadow-md hover:shadow-lg md:w-auto w-auto"
          >
            {isSubmitting ? "Subscribing..." : buttonText}
          </button>
        </div>

        {/* Success/Error Message */}
        {message && (
          <div
            className={`mt-3 sm:mt-4 text-xs sm:text-sm ${
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
