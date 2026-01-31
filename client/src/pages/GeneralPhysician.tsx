import { Layout } from "@/components/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, ArrowLeft, Heart, Stethoscope, BookOpen, ShieldCheck, GraduationCap, Briefcase } from "lucide-react";
import { Link } from "wouter";

export default function GeneralPhysician() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to image index (1 to 6)
  const imageIndex = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const [currentFrame, setCurrentFrame] = useState(1);

  useEffect(() => {
    return imageIndex.onChange((latest) => {
      setCurrentFrame(Math.round(latest));
    });
  }, [imageIndex]);

  const content = {
    title: "General Physician (MD General Medicine)",
    subtitle: "Internal Medicine Specialist",
    description: "Internal medicine specialist diagnosing and treating adult diseases in hospitals/clinics. Focuses on comprehensive care, combining strong diagnostic skills with long-term patient relationships.",
    sections: [
      {
        title: "What is Internal Medicine?",
        icon: Stethoscope,
        items: [
          "Experts in diagnosing complex medical cases",
          "Known as the 'Doctor's Doctor'",
          "Provide long-term care for adult patients",
          "Focus exclusively on adult and elderly healthcare"
        ]
      },
      {
        title: "Core Responsibilities",
        icon: Heart,
        items: [
          "Clinical Diagnosis & Physical Exams",
          "Chronic Disease Management (Diabetes, Hypertension)",
          "Acute Care Treatment (Fever, Infections)",
          "Preventive Healthcare & Screenings",
          "Care Coordination with Specialists"
        ]
      },
      {
        title: "Educational Path",
        icon: GraduationCap,
        items: [
          "MBBS Degree (Bachelor of Medicine & Surgery)",
          "MD in General Medicine (3-year specialization)",
          "Medical Certification & Registration",
          "Optional Subspecialization (Cardiology, Oncology, etc.)"
        ]
      },
      {
        title: "Ethics & Values",
        icon: ShieldCheck,
        items: [
          "Beneficence (Acting in patient's best interest)",
          "Non-maleficence (Do no harm)",
          "Respect for Autonomy",
          "Patient Confidentiality"
        ]
      }
    ]
  };

  return (
    <Layout>
      <div ref={containerRef} className="relative min-h-[300vh]">
        {/* Sticky Animation Section */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={`/animation/general-physician/frame-${currentFrame}.jpg`}
              alt="Medical Professional Animation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background" />
          </div>

          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/career-path">
                <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Careers
                </Button>
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{content.title}</h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-8 font-medium">{content.subtitle}</p>
              <div className="flex items-center justify-center gap-4 text-sm uppercase tracking-widest text-white/70">
                <span>Scroll to Explore</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-8 bg-white/30 rounded-full flex justify-center p-0.5"
                >
                  <div className="w-full h-2 bg-white rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-20 bg-background pt-20 pb-32">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-6">Career Overview</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {content.description}
                  </p>
                  <div className="flex gap-4 mt-8">
                    <Badge variant="secondary" className="px-4 py-2 text-base">12-35 LPA Range</Badge>
                    <Badge variant="outline" className="px-4 py-2 text-base">Government & Private</Badge>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-6">
                  {content.sections.map((section, idx) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Card className="border-border/50 hover:border-primary/30 transition-colors">
                        <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <section.icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{section.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {section.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="sticky top-24 space-y-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-primary text-primary-foreground overflow-hidden border-none shadow-2xl">
                    <div className="p-8 relative">
                      <Briefcase className="absolute top-4 right-4 h-24 w-24 opacity-10" />
                      <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                      <p className="text-primary-foreground/80 mb-8 text-lg">
                        Take the first step towards becoming a General Physician. Explore job markets and requirements.
                      </p>
                      <Button 
                        size="lg" 
                        variant="secondary" 
                        className="w-full font-bold h-14 text-lg rounded-xl shadow-lg"
                        onClick={() => window.open(`https://www.google.com/search?q=MD+General+Medicine+jobs+India`, '_blank')}
                      >
                        <Search className="mr-2 h-5 w-5" /> Search Available Jobs
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
