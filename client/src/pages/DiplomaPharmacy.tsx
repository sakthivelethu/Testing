import { Layout } from "@/components/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TOTAL_FRAMES = 160; // adjust if your frame count differs

export default function DiplomaPharmacy() {
  const animationRef = useRef<HTMLDivElement>(null);
  const [currentFrame, setCurrentFrame] = useState(1);

  /* ================= SCROLL → FRAME MAPPING ================= */
  const { scrollYProgress } = useScroll({
    target: animationRef,
    offset: ["start start", "end start"],
  });

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [1, TOTAL_FRAMES]
  );

  useEffect(() => {
    return frameIndex.onChange((latest) => {
      const frame = Math.min(
        TOTAL_FRAMES,
        Math.max(1, Math.round(latest))
      );
      setCurrentFrame(frame);
    });
  }, [frameIndex]);

  /* Preload frames (important for smooth animation) */
  useEffect(() => {
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/animation/diploma-pharmacy/frame-${i}.jpg`;
    }
  }, []);

  return (
    <Layout>
      {/* ===================================================== */}
      {/* =============== ANIMATION SCROLL ZONE =============== */}
      {/* ===================================================== */}
      <div ref={animationRef} className="relative h-[320vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <img
            src={`/animation/diploma-pharmacy/frame-${currentFrame}.jpg`}
            alt="D.Pharm Animation"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />

          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-4xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Diploma in Pharmacy
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 font-medium">
                Entry-level pharmacy program for retail and medical careers
              </p>
              <p className="mt-6 text-sm uppercase tracking-widest text-white/70">
                Scroll to explore
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* ================= CONTENT AFTER ANIMATION =========== */}
      {/* ===================================================== */}
      <div className="relative bg-background pt-24 pb-32">
        <div className="max-w-6xl mx-auto px-4 space-y-20">

          {/* INTRO */}
          <section>
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                D.Pharm (Diploma in Pharmacy)
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                D.Pharm is a <strong>2-year entry-level program after 10+2</strong>
                that equips students for retail pharmacy, medical representative
                roles, and pharmacist registration under
                <strong> Pharmacy Council of India (PCI)</strong> regulations.
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <Badge variant="secondary">2 Years</Badge>
                <Badge variant="outline">After 10+2</Badge>
                <Badge variant="outline">PCI Approved</Badge>
              </div>
            </Card>
          </section>

          {/* COURSE OVERVIEW */}
          <section className="grid md:grid-cols-2 gap-10">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Course Overview
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Foundational pharmaceutical sciences and drug dispensing</li>
                <li>• Retail, hospital and pharmacy operations</li>
                <li>• 4 semesters with theory, practicals and training</li>
                <li>• Approved by PCI for pharmacist licensing</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Eligibility & Admission
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• 10+2 Science (PCB/PCM), minimum 50%</li>
                <li>• Merit-based or state-level entrance exams</li>
                <li>• No national entrance test</li>
                <li>• Includes 500 hours of practical training</li>
              </ul>
            </Card>
          </section>

          {/* SYLLABUS */}
          <section className="grid md:grid-cols-2 gap-10">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Year 1 Subjects
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Pharmaceutics-I</li>
                <li>• Pharmaceutical Chemistry-I</li>
                <li>• Pharmacognosy</li>
                <li>• Biochemistry & Clinical Pathology</li>
                <li>• Human Anatomy & Physiology</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Year 2 Subjects
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Pharmaceutics-II</li>
                <li>• Pharmaceutical Chemistry-II</li>
                <li>• Pharmacology & Toxicology</li>
                <li>• Pharmaceutical Jurisprudence</li>
                <li>• Hospital & Clinical Pharmacy</li>
              </ul>
            </Card>
          </section>

          {/* SKILLS */}
          <section>
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Skills & Training
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Prescription reading and dispensing</li>
                <li>• Compounding dosage forms</li>
                <li>• Drug storage, labeling and inventory</li>
                <li>• Industrial training in retail, hospital or MR roles</li>
              </ul>
            </Card>
          </section>

          {/* CAREERS */}
          <section>
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Career Paths
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Retail Pharmacist</li>
                <li>• Hospital Pharmacy Assistant</li>
                <li>• Medical Representative (MR)</li>
                <li>• Sales Executive / Quality Control Assistant</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                <strong>Starting salary:</strong> ₹2.5–4 LPA (higher in metros)
              </p>
            </Card>
          </section>

          {/* QUICK TABLE */}
          <section>
            <h3 className="text-3xl font-bold mb-6">
              Quick Reference Table
            </h3>
            <div className="overflow-hidden rounded-xl border">
              <table className="w-full">
                <tbody className="divide-y">
                  {[
                    ["Full Name", "Diploma in Pharmacy (D.Pharm)"],
                    ["Duration", "2 years (4 semesters + training)"],
                    ["Eligibility", "10+2 Science (PCB/PCM, 50%)"],
                    ["Approving Body", "Pharmacy Council of India (PCI)"],
                    ["Key Skills", "Dispensing, compounding, drug laws"],
                    ["Careers", "Retail pharmacist, MR, hospital assistant"],
                    ["Next Steps", "B.Pharm lateral, QC, drug inspector"],
                  ].map(([a, b]) => (
                    <tr key={a}>
                      <td className="px-6 py-4 font-medium bg-muted/30">
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

        </div>
      </div>
    </Layout>
  );
}