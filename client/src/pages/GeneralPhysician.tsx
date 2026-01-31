import { Layout } from "@/components/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Search,
  Stethoscope,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { Link } from "wouter";

const TOTAL_FRAMES = 176;

export default function GeneralPhysician() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFrame, setCurrentFrame] = useState(1);

  /* ================= SCROLL-DRIVEN ANIMATION ================= */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);

  useEffect(() => {
    return frameIndex.onChange((latest) => {
      const frame = Math.min(TOTAL_FRAMES, Math.max(1, Math.round(latest)));
      setCurrentFrame(frame);
    });
  }, [frameIndex]);

  useEffect(() => {
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/animation/general-physician/frame-${i}.jpg`;
    }
  }, []);

  return (
    <Layout>
      {/* ================= ANIMATION SECTION ================= */}
      <div ref={containerRef} className="relative h-[350vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <img
            src={`/animation/general-physician/frame-${currentFrame}.jpg`}
            alt="MD General Medicine Animation"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-background" />

          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-4xl"
            >
              <Link href="/career-path">
                <Button
                  variant="ghost"
                  className="mb-8 text-white hover:bg-white/10"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Careers
                </Button>
              </Link>

              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                MD General Medicine
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-10 font-medium">
                General Physician / Internal Medicine
              </p>

              <div className="flex items-center justify-center gap-4 text-sm uppercase tracking-widest text-white/70">
                <span>Scroll to Explore</span>
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="w-1 h-8 bg-white/30 rounded-full flex justify-center p-0.5"
                >
                  <div className="w-full h-2 bg-white rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div className="relative bg-background pt-32 pb-40">
        <div className="max-w-6xl mx-auto px-4 space-y-28">

          {/* HERO SUMMARY */}
          <section className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-3xl rounded-3xl" />
            <div className="relative bg-card border rounded-3xl p-10 shadow-xl">
              <h2 className="text-4xl font-bold mb-4">
                MD General Medicine (Internal Medicine)
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
                MD General Medicine is a <strong>3-year postgraduate course after MBBS</strong>
                that trains doctors to diagnose, treat, and manage adult diseases,
                long-term conditions, and complex multi-system illnesses with a
                holistic and evidence-based approach.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Badge variant="secondary" className="px-4 py-2 text-base">
                  3-Year Residency
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-base">
                  After MBBS
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-base">
                  Internal Medicine
                </Badge>
              </div>
            </div>
          </section>

          {/* INFO GRID */}
          <section className="grid md:grid-cols-2 gap-10">
            <div className="bg-card rounded-3xl border p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Stethoscope className="h-6 w-6 text-primary" />
                What is MD General Medicine?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Broad clinical specialty focusing on adult medicine.</li>
                <li>• Covers cardiology, pulmonology, gastroenterology, nephrology,
                    endocrinology, neurology, infectious diseases, rheumatology and more.</li>
                <li>• Residency includes wards, ICU, OPD, emergency and specialty clinics.</li>
                <li>• Strong academic training with seminars, journal clubs and research.</li>
              </ul>
            </div>

            <div className="bg-card rounded-3xl border p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                Eligibility & Entrance (India)
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• MBBS from NMC/MCI-recognized college.</li>
                <li>• 1-year compulsory internship completed.</li>
                <li>• State Medical Council registration.</li>
                <li>• Admission via <strong>NEET-PG</strong> or <strong>INI-CET</strong>.</li>
              </ul>
            </div>
          </section>

          {/* TRAINING + SYLLABUS */}
          <section className="grid md:grid-cols-2 gap-10">
            <div className="bg-card rounded-3xl border p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Course Structure & Training
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• 3 years full-time residency with graded responsibility.</li>
                <li>• Ward, ICU, emergency and specialty postings.</li>
                <li>• Case presentations, seminars, journal clubs.</li>
                <li>• Mandatory thesis/dissertation and logbook.</li>
              </ul>
            </div>

            <div className="bg-card rounded-3xl border p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Typical Syllabus Highlights
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Diabetes, hypertension, heart disease, asthma, COPD, TB.</li>
                <li>• Renal, liver, neurological, autoimmune diseases.</li>
                <li>• Sepsis, tropical infections, HIV.</li>
                <li>• ICU skills: ventilators, fluids, shock, ACLS/BLS.</li>
              </ul>
            </div>
          </section>

          {/* CAREER */}
          <section className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 border">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Briefcase className="h-7 w-7 text-primary" />
              Career After MD General Medicine
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground">
              <ul className="space-y-3">
                <li>• Consultant physician in hospitals</li>
                <li>• Senior resident / Assistant Professor</li>
                <li>• ICU & emergency medicine roles</li>
                <li>• Telemedicine physician</li>
              </ul>
              <ul className="space-y-3">
                <li>• Private practice / clinics</li>
                <li>• Clinical research</li>
                <li>• Hospital administration</li>
                <li>• DM / FNB super-specialization</li>
              </ul>
            </div>
          </section>

          {/* SNAPSHOT TABLE */}
          <section>
            <h3 className="text-3xl font-bold mb-6">
              Snapshot Table – Quick Revision
            </h3>
            <div className="overflow-hidden rounded-2xl border shadow-sm">
              <table className="w-full">
                <tbody className="divide-y">
                  {[
                    ["Course name", "MD General Medicine / MD (Medicine)"],
                    ["Level", "Postgraduate (after MBBS)"],
                    ["Duration", "3 years full-time residency"],
                    ["Eligibility", "MBBS + Internship + SMC registration"],
                    ["Entrance", "NEET-PG, INI-CET"],
                    ["Main focus", "Adult medicine & non-surgical management"],
                    ["Training", "Ward / OPD / ICU, emergency, thesis"],
                    ["Core skills", "Clinical diagnosis, ICU & emergency care"],
                    ["After MD", "Consultant, teaching, research, telemedicine"],
                    ["Higher studies", "DM / FNB super-specialties"],
                  ].map(([a, b]) => (
                    <tr key={a}>
                      <td className="px-6 py-4 font-medium bg-muted/30 w-1/3">
                        {a}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {b}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center pt-10">
            <Button
              size="lg"
              className="px-12 py-6 text-lg rounded-2xl shadow-xl"
              onClick={() =>
                window.open(
                  "https://www.google.com/search?q=MD+General+Medicine+jobs+India",
                  "_blank"
                )
              }
            >
              <Search className="mr-2 h-5 w-5" />
              Explore Job Opportunities
            </Button>
          </section>

        </div>
      </div>
    </Layout>
  );
}