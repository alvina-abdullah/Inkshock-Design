
import Image from "next/image";
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "InkShock Design transformed our brand with their vibrant designs. Our customers love our new look!",
      author: "Sarah Johnson",
      company: "Bloom Boutique",
      image: "/images/testimonials/auth-01.png?height=60&width=60",
    },
    {
      quote:
        "Working with InkShock was a game-changer for our website. The design is stunning and our conversions have increased by 40%.",
      author: "Michael Chen",
      company: "TechNova",
      image: "/images/testimonials/auth-02.png?height=60&width=60",
    },
    {
      quote:
        "The team at InkShock Design understood our vision perfectly and delivered beyond our expectations. Highly recommended!",
      author: "Emily Rodriguez",
      company: "Culinary Creations",
      image: "/images/testimonials/auth-03.png?height=60&width=60",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-yellow font-medium">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400">
              What our clients say
            </h2>
            <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-lg border border-zinc-800 bg-zinc-950 p-6"
            >
              <div className="mb-4">
                <svg className="h-8 w-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <blockquote className="flex-1 text-lg font-medium text-white mb-4">"{testimonial.quote}"</blockquote>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  width={60}
                  height={60}
                  alt={testimonial.author}
                  className="rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-white">{testimonial.author}</div>
                  <div className="text-sm text-zinc-400">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default TestimonialsSection;