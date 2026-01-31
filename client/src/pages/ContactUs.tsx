import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Layout } from "@/components/Layout";

export default function ContactUs() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      value: "support@careerguide.com",
      action: "mailto:support@careerguide.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our career guidance team",
      value: "+91 98765 43210",
      action: "tel:+919876543210",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our office location",
      value: "Mumbai, Maharashtra, India",
      action: "#",
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "When you can reach us",
      value: "Mon-Fri: 9AM-6PM IST",
      action: "#",
    },
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold font-display mb-2">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about your career path? Need guidance or support?
            We're here to help you navigate your educational and professional journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                    <a
                      href={item.action}
                      className="text-primary hover:text-primary/80 underline underline-offset-4"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Quick answers to common questions about CareerGuide
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">How accurate is the career guidance?</h4>
              <p className="text-muted-foreground text-sm">
                Our career paths are based on current industry trends, educational requirements, and expert insights.
                However, career choices should also consider your personal interests, skills, and local job market conditions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Can I suggest new career paths?</h4>
              <p className="text-muted-foreground text-sm">
                Absolutely! We welcome suggestions for new career paths. Use the feedback form to share your ideas,
                and we'll review them for inclusion in our database.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Is CareerGuide free to use?</h4>
              <p className="text-muted-foreground text-sm">
                Yes, CareerGuide is completely free to use. We believe quality career guidance should be accessible to everyone.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">How often is the content updated?</h4>
              <p className="text-muted-foreground text-sm">
                We regularly update our career paths and information based on industry changes, new educational opportunities,
                and user feedback. Major updates are typically released quarterly.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? We'd love to hear from you!
          </p>
          <Button asChild>
            <a href="/feedback">Send us a message</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
}