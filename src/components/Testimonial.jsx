import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Testimonial() {
  // Dummy testimonials data from dentists reviewing a SaaS service for dental practices
  // With varying text lengths (short, medium, long) and full dentist names
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson, DDS (General Dentistry)",
      text: "This SaaS service is amazing! It improves accuracy in diagnostics, helping our patients trust us more.",
      image: "https://picsum.photos/200/200?random=1", // Placeholder image from Picsum
    },
    {
      id: 2,
      name: "Dr. Michael Chen, DMD (Orthodontics)",
      text: "The platform’s AI tools streamline our workflow, delivering precise treatment plans quickly. Patients love the fast results.",
      image: "https://picsum.photos/200/200?random=2",
    },
    {
      id: 3,
      name: "Dr. Emma Wilson, DDS (Pediatric Dentistry)",
      text: "Incredible accuracy in dental imaging! It saves time, reduces errors, and makes patient visits smoother for kids and parents alike.",
      image: "https://picsum.photos/200/200?random=3",
    },
    {
      id: 4,
      name: "Dr. David Lee, DMD (Periodontics)",
      text: "This service transformed our practice. Precise diagnostics and an easy interface boost efficiency, and patients gain confidence in our care.",
      image: "https://picsum.photos/200/200?random=4",
    },
    {
      id: 5,
      name: "Dr. Olivia Brown, DDS (Cosmetic Dentistry)",
      text: "Our patients love the transparency this tool provides. It’s user-friendly, accurate, and enhances our cosmetic treatment outcomes significantly.",
      image: "https://picsum.photos/200/200?random=5",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-12"> {/* Larger container for desktop */}
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">What Dentists Say About Our Service !</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full" // Remove gradient and animation from here
      >
        <CarouselContent className="h-[350px] md:h-[450px]"> {/* Adjustable height for desktop */}
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="basis-full md:basis-1/3 p-4">
              <div className="p-6">
                <Card className="h-full flex flex-col items-center justify-center shadow-lg" style={{ background: 'linear-gradient(40deg, #2D0038, #0A0116, #41004C)' }}>
                  <CardContent className="flex flex-col items-center justify-center p-6 gap-6 text-white"> {/* Changed text color to white for contrast with dark gradient */}
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name}'s profile`}
                      className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                      onError={(e) => { e.target.src = "https://picsum.photos/200/200?random=fallback"; }} // Fallback image
                    />
                    <blockquote className="text-base md:text-lg italic text-gray-200 dark:text-gray-300 text-center line-clamp-4">
                      “{testimonial.text}”
                    </blockquote>
                    <p className="font-semibold text-gray-100 dark:text-gray-100 text-sm md:text-base">
                      - {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-40px] top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 p-2 rounded-full" />
        <CarouselNext className="absolute right-[-40px] top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 p-2 rounded-full" />
      </Carousel>
    </div>
  );
}