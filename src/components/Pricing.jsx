const plans = [
  {
    name: "Starter",
    price: "$12",
    period: "per month",
    description: "Simple tools for easy editing. Best for new users.",
    cta: "Get Started",
    highlighted: false,
    features: [
      "Access to basic editing tools",
      "Export up to 1080p HD",
      "20GB cloud storage",
      "Standard transitions and effects",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "More tools, better quality. Great for pros and teams.",
    cta: "Upgrade to Pro",
    highlighted: true,
    features: [
      "All Starter features",
      "4K video export",
      "100GB cloud storage",
      "Advanced editing tools & templates",
      "Team collaboration",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="w-full py-3 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-semibold">
          Choose The Right Plan
          <br />
          For Your Editing
        </h2>
        <p className="text-gray-400 mt-4 max-w-md mx-auto">
          Choose a plan that fits your editing needs & start creating with ease
        </p>
      </div>

      <div className="mt-12 flex flex-col md:flex-row gap-6 max-w-3xl mx-auto justify-center">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex-1 rounded-2xl p-8 border ${
              plan.highlighted
                ? "bg-gradient-to-b from-purple-600/20 to-transparent border-purple-500"
                : "bg-white/5 border-white/20"
            }`}
          >
            <p className="text-white font-semibold">{plan.name}</p>
            <p className="text-white text-4xl font-bold mt-2">
              {plan.price}
              <span className="text-sm text-gray-400 font-normal">
                {" "}
                {plan.period}
              </span>
            </p>
            <p className="text-gray-400 text-sm mt-2">{plan.description}</p>

            <button
              className={`w-full mt-6 py-3 rounded-full font-semibold ${
                plan.highlighted
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                  : "bg-white/10 text-white"
              }`}
            >
              {plan.cta}
            </button>

            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="text-gray-300 text-sm flex items-start gap-2"
                >
                  <span className="text-purple-400">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
