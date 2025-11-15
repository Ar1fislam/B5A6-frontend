// src/components/AboutPage.tsx
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Mail,
  MapPin,
  Phone,
  Target,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  

  useEffect(() => {
    const timer = setTimeout(() => {
    setTeamMembers([
  {
    name: "Shamsher Ali",
    role: "Chief Executive Officer",
    bio: "Pioneering financial inclusion through modern payment platforms for over a decade.",
    initials: "SA",
  },
  {
    name: "Nusrat Jahan",
    role: "Chief Technology Officer",
    bio: "Architecting resilient financial solutions with deep expertise in cybersecurity.",
    initials: "NJ",
  },
  {
    name: "Tanvir Islam",
    role: "Lead Designer",
    bio: "Crafting elegant, user-focused interfaces for innovative fintech products.",
    initials: "TI",
  },
  {
    name: "Arifa Siddiqui",
    role: "Director of Communications",
    bio: "Championing our purpose and engaging with our vibrant user community.",
    initials: "AS",
  },
]);


      // setMilestones([
      //   {
      //     year: "2020",
      //     title: "Founded",
      //     description:
      //       "Bondhu Pay was established with a vision to simplify digital payments in Bangladesh",
      //   },
      //   {
      //     year: "2021",
      //     title: "First Million Users",
      //     description:
      //       "Reached our first million users milestone within 18 months",
      //   },
      //   {
      //     year: "2022",
      //     title: "International Expansion",
      //     description:
      //       "Expanded services to neighboring countries in South Asia",
      //   },
      //   {
      //     year: "2023",
      //     title: "Crypto Integration",
      //     description:
      //       "Launched cryptocurrency support for modern financial needs",
      //   },
      // ]);

      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      {/* Our Story Section */}
      <section
        id="story"
        className="py-16 px-6 bg-[var(--card)] transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300">
              Our Story
            </h2>
          
          </div>

          <div className=" lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-[var(--card-foreground)] leading-relaxed">
                Wallet Nest was founded in 2015 after realizing something needed to change: most everyday people couldn't access reliable financial tools. Old-fashioned banks could be difficult to reach, costly to use, and sometimes just plain confusing for regular folks.
              </p>
              <p className="text-lg text-[var(--card-foreground)] leading-relaxed">
               We started by listening and learning in local communities, gathering stories from street vendors, small shop owners, and rural households. Their challenges inspired us to create a digital wallet platform that removes hurdles and focuses on what people really need—clarity, fairness, and control.
              </p>
              <p className="text-lg text-[var(--card-foreground)] leading-relaxed">
              Today, Wallet Nest empowers thousands to save, send, and spend confidently. We strive to transform financial wellbeing beyond city borders, making modern tools available to anyone with a mobile device. We're driven by a simple promise: access for everyone, everywhere, with no surprises or intimidation—just straightforward financial solutions designed for real life.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 bg-[var(--background)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="md:grid-cols-2 gap-12">
            <Card className="border-[var(--border)] shadow-md bg-[var(--card)]">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Target className="h-10 w-10 text-[var(--primary)] mr-4" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-[var(--card-foreground)]">
                  To democratize financial services by providing simple, secure,
                  and accessible digital payment solutions that empower
                  individuals and businesses to thrive in the digital economy.
                </CardDescription>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

     

      {/* Team Section */}
      <section
        id="team"
        className="py-16 px-6 bg-[var(--card)] transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300">
              Meet Our Team
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto transition-colors duration-300">
              The passionate people behind Bondhu Pay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {isLoading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <Card
                    key={index}
                    className="border-[var(--border)] shadow-md bg-[var(--card)]"
                  >
                    <CardHeader className="text-center">
                      <Skeleton className="h-24 w-24 rounded-full mx-auto mb-4" />
                      <Skeleton className="h-6 w-3/4 mx-auto" />
                      <Skeleton className="h-4 w-1/2 mx-auto" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6 mt-2" />
                    </CardContent>
                  </Card>
                ))
              : teamMembers.map((member, index) => (
                  <Card
                    key={index}
                    className="border-[var(--border)] shadow-md hover:shadow-lg transition-all duration-300 bg-[var(--card)] hover:-translate-y-1"
                  >
                    <CardHeader className="text-center">
                      <div className="bg-[var(--primary)] text-[var(--primary-foreground)] w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                        {member.initials}
                      </div>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <CardDescription className="text-[var(--primary)] font-medium">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-[var(--muted-foreground)] text-center">
                        {member.bio}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
    
    <section
  id="contact"
  className="py-16 px-6 bg-[var(--background)] transition-colors duration-300"
>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300">
        Connect With Us
      </h2>
      <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto transition-colors duration-300">
        Have questions or feedback? Our team at Wallet Nest is here to help and welcomes your message.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card className="border-[var(--border)] shadow-md bg-[var(--card)]">
        <CardHeader className="text-center">
          <div className="bg-[var(--accent)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="h-8 w-8 text-[var(--accent-foreground)]" />
          </div>
          <CardTitle className="text-xl">Write to Us</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <CardDescription className="text-[var(--muted-foreground)]">
            [hello@walletnest.com](mailto:hello@walletnest.com)
          </CardDescription>
          <CardDescription className="text-[var(--muted-foreground)]">
            [collaborate@walletnest.com](mailto:collaborate@walletnest.com)
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="border-[var(--border)] shadow-md bg-[var(--card)]">
        <CardHeader className="text-center">
          <div className="bg-[var(--accent)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="h-8 w-8 text-[var(--accent-foreground)]" />
          </div>
          <CardTitle className="text-xl">Ring Us</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <CardDescription className="text-[var(--muted-foreground)]">
            +880 1922 348731
          </CardDescription>
          <CardDescription className="text-[var(--muted-foreground)]">
            Sunday to Thursday, 10AM–5PM
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="border-[var(--border)] shadow-md bg-[var(--card)]">
        <CardHeader className="text-center">
          <div className="bg-[var(--accent)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-8 w-8 text-[var(--accent-foreground)]" />
          </div>
          <CardTitle className="text-xl">Our Location</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <CardDescription className="text-[var(--muted-foreground)]">
            Wallet Nest HQ
          </CardDescription>
          <CardDescription className="text-[var(--muted-foreground)]">
            Dhaka, Bangladesh
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

      
    </div>
  );
}
