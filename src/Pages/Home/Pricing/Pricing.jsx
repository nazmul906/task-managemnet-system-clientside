import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "FREE",
      price: 0,
      features: [
        "Create and manage tasks",
        "Set due dates and reminders",
        "Organize tasks into categories",
        "Basic task priority settings",
      ],
    },
    {
      name: "BASIC",
      price: 9.99,
      features: [
        "All features of FREE plan",
        "Task collaboration with up to 5 users",
        "Advanced task priority settings",
        "Task progress tracking",
      ],
    },
    {
      name: "PRO",
      price: 19.99,
      features: [
        "All features of BASIC plan",
        "Unlimited task collaboration",
        "Customizable task labels and tags",
        "Task analytics and reporting",
      ],
    },
  ];

  return (
    // <div className="max-w-4xl mx-auto p-4">
    <div className=" p-4 text-gray-800 mt-8 mb-6 text-center">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 ">Pricing</h2>
        <h1 className="text-4xl font-bold mb-2 ">
          Choose the Right Plan for You
        </h1>
        <p className="text-lg mb-4 ">
          Unlock the full potential of our task manager with our flexible
          pricing options.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-[#E6EBE0] rounded p-6 shadow-md text-center"
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl font-bold mr-1">$</span>
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="ml-1 text-gray-600">/ month</span>
            </div>
            <ul className="mb-4 ml-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <span className="mr-2">&#10003;</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
              {plan.name === "FREE"
                ? "Continue with Free"
                : `Try the ${plan.name} plan`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
