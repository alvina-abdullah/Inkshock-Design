const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We start by understanding your business, goals, and target audience to create a solid foundation for your project.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Based on our findings, we develop a strategic plan that outlines how we'll approach your design needs.",
    },
    {
      number: "03",
      title: "Design",
      description: "Our creative team gets to work, crafting unique designs that align with your brand and objectives.",
    },
    {
      number: "04",
      title: "Refinement",
      description: "We collaborate with you to refine the designs until they perfectly capture your vision.",
    },
    {
      number: "05",
      title: "Delivery",
      description:
        "Once approved, we deliver the final assets in all the formats you need for successful implementation.",
    },
  ]

  return (
    <section id="process" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-teal-400 font-medium">
              Our Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400">
              How we bring your vision to life
            </h2>
            <p className="max-w-[900px] text-gray-500 dark:text-zinc-400  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our proven design process ensures we deliver exceptional results that exceed your expectations.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12 text-black dark:text-zinc-400">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 mb-12 last:mb-0">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 text-black font-bold text-xl">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-black dark:text-zinc-400 mb-2">{step.title}</h3>
                <p className="text-gray-700 dark:text-zinc-400">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block h-12 w-px bg-gradient-to-b from-pink-500 to-teal-400 ml-8 mt-4"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ProcessSection;
