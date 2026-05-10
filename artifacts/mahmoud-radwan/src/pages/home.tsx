import React from "react";
import { ArrowUpRight, Award, BookOpen, CheckCircle2, ChevronRight, Crown, Download, FileText, Globe, Heart, Lock, Mail, MessageCircle, MessageSquare, Mic, Search, Send, ShieldCheck, Sparkles, Stethoscope, Truck, Users, Zap } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion, type Variants } from "framer-motion";
import photoPath from "@/assets/photo.webp";
import portfolioDefensePath from "@/assets/portfolio-defense.webp";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white" id="top">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 md:pt-56 md:pb-32 px-6 md:px-12 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-primary"></div>
              <span className="text-primary font-semibold tracking-widest uppercase text-sm">Senior Interpreter & Translator</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] text-foreground mb-6">
              Mahmoud Radwan. <br />
              <span className="text-muted-foreground italic font-normal">On the floor. On the page.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
              Senior consecutive interpreter, deployed on-site with engineers and trainers — most recently with <span className="text-foreground font-medium">CEER's electric-vehicle program in Saudi Arabia</span> and <span className="text-foreground font-medium">General Dynamics' Pandur 6×6 program in Vienna</span>.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
              For written work: <span className="text-foreground font-medium">100% human translation, NDA-default.</span> No AI, no machine translation. Your IP doesn't leave my desk.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base tracking-wide"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-none border-primary/20 text-foreground hover:bg-primary/5 h-14 px-8 text-base tracking-wide"
                onClick={() => document.querySelector("#rates")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Rates
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-secondary/50 -z-10 transform skew-x-12 translate-x-32 hidden lg:block opacity-50"></div>
      </section>

      {/* STATS BAR */}
      <section className="py-12 border-y border-border bg-card">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-border">
            {[
              { label: "Experience", value: "14+ Years" },
              { label: "Client Satisfaction", value: "99%" },
              { label: "CAT Tool Platforms", value: "6+" },
              { label: "Words Translated", value: "7M+" },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-secondary">
                <img 
                  src={photoPath} 
                  alt="Mahmoud Radwan" 
                  className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 border border-primary/20 m-4 z-10 pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/5 -z-10 rounded-full blur-3xl"></div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-7"
            >
              <motion.div variants={fadeInUp} className="mb-4 text-primary font-semibold tracking-widest uppercase text-xs">
                About Me
              </motion.div>
              <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-8">
                A Trusted Voice Between Languages
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I'm Mahmoud Radwan — a Senior Translator and Language Solutions Specialist based in Cairo, Egypt, with over 14 years of experience bridging Arabic and English across some of the world's most demanding industries.
                </p>
                <p>
                  My career has taken me from leading large-scale military translation initiatives at General Dynamics Land Systems in Austria, to serving as a senior specialist at STAR Middle East — where I manage complex projects for global brands while mentoring the next generation of translators.
                </p>
                <p>
                  I hold a Bachelor's Degree in Languages & Translation from Al-Azhar University and have contributed to peer-reviewed research published by the University of Groningen. My work is guided by a simple belief: that exceptional translation is not just about words — it's about trust.
                </p>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Mastery & Infrastructure</h3>
                <div className="flex flex-wrap gap-2">
                  {["SDL Trados Studio", "MemoQ", "TRANSIT NXT", "XTM Cloud", "Phrase", "Wordbee"].map((tool) => (
                    <Badge key={tool} variant="secondary" className="rounded-none font-normal text-sm px-3 py-1.5 border-border bg-card hover:bg-secondary">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              {/* Career timeline */}
              <motion.div variants={fadeInUp} className="mt-12 pt-10 border-t border-border">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-8">Career Milestones</h3>
                <div className="space-y-6">
                  {[
                    { year: "2010 — 2013", role: "Translator", org: "STAR Middle East, Cairo", detail: "Pioneered translation memory adoption; established quality control protocols still in use." },
                    { year: "2013 — 2014", role: "Interpreter & Translator", org: "General Dynamics Land Systems, Vienna", detail: "Pandur 6×6 armored vehicle training. Built standardized military terminology databases. Multiple awards for outstanding interpretation." },
                    { year: "2014 — Present", role: "Senior Translator & Reviewer", org: "STAR Middle East, Cairo", detail: "Lead specialist for premium global brands. Spearheaded a multi-million-word military translation initiative. Mentor to junior translators." },
                    { year: "2021", role: "Research Translator & Cultural Consultant", org: "University of Groningen, Netherlands", detail: "Cross-cultural study on loneliness, peer-reviewed publication in the Journal of the IARR." },
                    { year: "2026", role: "Lead Interpreter & Translator", org: "CEER Electric Vehicles, KAEC, Saudi Arabia", detail: "On-site consecutive interpretation plus full written translation of presentations and training materials. Modern Standard Arabic." },
                  ].map((milestone, i) => (
                    <div key={i} className="grid grid-cols-[auto,1fr] gap-6 relative">
                      <div className="text-xs font-semibold text-primary tracking-widest uppercase pt-1 whitespace-nowrap">{milestone.year}</div>
                      <div className="border-l-2 border-primary/20 pl-6 pb-1">
                        <div className="font-medium text-foreground">{milestone.role}</div>
                        <div className="text-sm text-primary mb-1">{milestone.org}</div>
                        <div className="text-sm text-muted-foreground leading-relaxed">{milestone.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONFIDENTIALITY / 100% HUMAN SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-4 text-primary-foreground/70 font-semibold tracking-widest uppercase text-xs flex items-center gap-2">
                <Lock className="w-3 h-3" /> Confidentiality-First
              </motion.div>
              <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-5xl font-medium mb-6">
                Your IP Stays Human.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
                Press releases, patents, internal strategy, unreleased product documentation — sensitive content shouldn't be uploaded to AI systems whose training pipelines you can't audit. Mine isn't.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                Every word I translate is translated by me, directly. No machine translation engines. No AI tools. No third-party platforms ingesting your text. Just decades of human expertise, a custom glossary, and an NDA that's signed before I open the file.
              </motion.p>
              
              <motion.div variants={fadeInUp}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-none border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary h-14 px-8"
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Discuss a Confidential Project
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              {[
                { icon: Users, title: "100% Human Translation", desc: "Every word translated by me directly. No AI assist, no MT, no third-party platforms." },
                { icon: Lock, title: "NDA-Default", desc: "Standard in every engagement. Nothing leaves my control without written permission." },
                { icon: Search, title: "Glossary-Driven", desc: "Custom terminology researched and built before translation begins, refined throughout delivery." },
                { icon: Sparkles, title: "MTPE Available — Separately", desc: "Already used AI on your text? STAR Deutschland-certified Machine Translation Post-Editing offered as a distinct review service. Different scope, different pricing." }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-start gap-4 p-6 bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors">
                  <item.icon className="w-6 h-6 text-primary-foreground/60 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-primary-foreground/70">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        <div className="absolute -bottom-1/2 -left-1/4 w-[100vw] h-[100vw] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="mb-4 text-primary font-semibold tracking-widest uppercase text-xs">Expertise</div>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground">Language Solutions Built for Every Industry</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Mic, 
                title: "Consecutive Interpretation", 
                desc: "On-site at training programs, engineering bays, and military exercises. Recently with CEER electric vehicles in Saudi Arabia (2026) and General Dynamics' Pandur 6×6 program in Vienna." 
              },
              { 
                icon: ShieldCheck, 
                title: "Technical & Military", 
                desc: "Engineering manuals, automotive owner's documentation, military training materials. Multimillion-word defense translation initiative led at STAR Middle East. Standardized terminology databases." 
              },
              { 
                icon: Crown, 
                title: "Luxury & Marketing Localization", 
                desc: "Brand voice for Tier-1 European luxury portfolios — German automotive, Swiss watchmaking, Austrian crystal. Custom style guides tuned for Arabic-speaking markets." 
              },
              { 
                icon: Stethoscope, 
                title: "Medical Translation", 
                desc: "Clinical materials, pharmaceutical documents, and medical device documentation translated with rigorous accuracy and regulatory awareness." 
              },
              { 
                icon: CheckCircle2, 
                title: "Translation Review & QA", 
                desc: "Independent linguistic review of translations produced by other vendors. Engineered a 20% accuracy improvement at STAR Middle East through QC innovations." 
              },
              { 
                icon: Sparkles, 
                title: "MTPE — Separate Review Service", 
                desc: "Machine Translation Post-Editing for clients who've already engaged AI systems. STAR Deutschland-certified, Oct 2022. Distinct from human translation — different scope, different pricing." 
              },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="rounded-none border-border bg-card hover:border-primary/30 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <service.icon className="w-10 h-10 text-primary mb-6 stroke-[1.5]" />
                    <h3 className="font-serif text-xl font-medium mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 md:py-32 px-6 md:px-12 bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          >
            <div className="max-w-2xl">
              <div className="mb-4 text-primary font-semibold tracking-widest uppercase text-xs">Selected Works</div>
              <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-4">A Portfolio of Precision</h2>
              <p className="text-muted-foreground">A selection of translation projects across industries. Client confidentiality is maintained; details available upon request.</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Featured · 2026",
                title: "CEER Electric Vehicle Program",
                desc: "On-site consecutive interpretation at KAEC (King Abdullah Economic City, near Jeddah) plus full written translation of presentations and training materials for Saudi Arabia's flagship EV manufacturer. Modern Standard Arabic throughout.",
                icon: Zap,
                tone: "from-primary/15 to-primary/5",
                iconTone: "text-primary",
                image: null,
              },
              {
                category: "Military · 2013–2014",
                title: "Pandur 6×6 Training, General Dynamics",
                desc: "On-site interpretation at General Dynamics Land Systems in Vienna for armored vehicle training. Built standardized military terminology databases adopted across cross-functional teams.",
                icon: null,
                image: portfolioDefensePath,
                imageAlt: "Mahmoud Radwan at a defense training site",
              },
              {
                category: "Luxury · Multi-Year",
                title: "Tier-1 Luxury Brand Localization",
                desc: "Long-running localization across owner manuals, brand campaigns, and digital content for premium European portfolios — German automotive, Swiss watchmaking, Austrian crystal. Custom glossaries and style guides developed and maintained.",
                icon: Crown,
                tone: "from-amber-100 to-amber-50",
                iconTone: "text-amber-700",
                image: null,
              },
              {
                category: "Strategic Partnership · 2010–Present",
                title: "STAR Middle East — Senior Translation Lead",
                desc: "14-year partnership; senior role since 2014. Spearheaded a multimillion-word military translation initiative. Engineered a 20% accuracy improvement through QC and terminology innovations. Mentor and trainer for junior translators.",
                icon: Award,
                tone: "from-slate-200 to-slate-100",
                iconTone: "text-slate-700",
                image: null,
              },
              {
                category: "Academic Research · 2021",
                title: "Cross-Cultural Loneliness Study",
                desc: "Contributing translator and cultural consultant for a peer-reviewed cross-cultural study published in the Journal of the International Association for Relationship Research. University of Groningen, Netherlands.",
                icon: BookOpen,
                tone: "from-emerald-100 to-emerald-50",
                iconTone: "text-emerald-800",
                image: null,
              },
              {
                category: "Volunteer · Social Impact",
                title: "Think Twice — Child Rights Advocacy",
                desc: "Led child rights advocacy campaigns across seven Egyptian governorates with NCCM (National Council for Childhood and Motherhood) and UNDP. Integrated art and media for maximum social impact.",
                icon: Heart,
                tone: "from-rose-100 to-rose-50",
                iconTone: "text-rose-700",
                image: null,
              },
            ].map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="aspect-[4/3] bg-secondary mb-6 relative overflow-hidden flex items-center justify-center border border-border">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-primary/5 transition-colors duration-500"></div>
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/70 to-transparent"></div>
                    </>
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.tone} transition-all duration-500 group-hover:scale-105`}>
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        {project.icon && <project.icon className={`w-20 h-20 ${project.iconTone} stroke-[1.2] opacity-80`} />}
                        <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-foreground/40 mt-2 px-4 text-center">
                          NDA-Protected · Details on Request
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="text-xs font-semibold tracking-wider text-primary mb-2 uppercase">{project.category}</div>
                <h3 className="font-serif text-xl font-medium mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I WORK — PROCESS */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-secondary/30 border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-3xl mb-16"
          >
            <div className="mb-4 text-primary font-semibold tracking-widest uppercase text-xs">How I Work</div>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-4">A Repeatable Process, Refined Over 14 Years.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Especially for confidential and technically dense work, the process is what protects your IP and your timeline. Here's exactly what happens between the brief and the delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
            {[
              { 
                num: "01", 
                title: "Brief & NDA", 
                desc: "You send the document, language pair, deadline, and any context. NDA signed before I open the file." 
              },
              { 
                num: "02", 
                title: "Glossary Build", 
                desc: "I research your industry's terminology and your existing translated assets. Custom glossary built before a single sentence is translated." 
              },
              { 
                num: "03", 
                title: "Human Translation", 
                desc: "Every word translated by me directly. No AI tools, no machine translation, no third-party platforms. CAT-tool consistency without AI exposure." 
              },
              { 
                num: "04", 
                title: "Quality Assurance", 
                desc: "Internal QA pass against the glossary and your style guide. Stylistic refinement. Sentence-level review for cultural fit." 
              },
              { 
                num: "05", 
                title: "Delivery & Iteration", 
                desc: "Final delivery on schedule. One revision round included. Glossary preserved for future engagements — your terminology, owned by you." 
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-background p-8 hover:bg-card transition-colors"
              >
                <div className="font-serif text-3xl text-primary/30 mb-4">{step.num}</div>
                <h3 className="font-medium text-base mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS & TESTIMONIALS */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-secondary/50 border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20">
            
            {/* Certifications */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="font-serif text-3xl font-medium text-foreground mb-10">Certifications & Accolades</motion.h2>
              <div className="space-y-6">
                {[
                  { title: "MTPE & Machine Translation Specialist", issuer: "STAR Deutschland GmbH", date: "Oct 2022", type: "Certificate of Attendance" },
                  { title: "Google Cybersecurity Foundations", issuer: "Google / Coursera", date: "Aug 2023", type: "Certification" },
                  { title: "Letter of Recommendation", issuer: "Andovar Pte Ltd", date: "Feb 2024", type: "64,153 words reviewed" },
                  { title: "Letter of Recommendation", issuer: "Blarlo Global Solutions", date: "Ongoing", type: "188,000+ words translated" },
                ].map((cert, i) => (
                  <motion.div key={i} variants={fadeInUp} className="border-l-2 border-primary/20 pl-6 pb-2">
                    <h3 className="font-medium text-lg text-foreground">{cert.title}</h3>
                    <div className="text-sm text-muted-foreground mt-1 flex flex-wrap gap-2 items-center">
                      <span className="text-primary font-medium">{cert.issuer}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span>
                      <span>{cert.type}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span>
                      <span>{cert.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="font-serif text-3xl font-medium text-foreground mb-10">Client Trust</motion.h2>
              <div className="space-y-8">
                {[
                  { 
                    text: "Attentive, responsive and dependable. Mahmoud is a great professional and he continues to deliver excellent work, so I am always happy to work with him.", 
                    author: "Anna Teixidor", role: "Andovar Pte Ltd", detail: "MT post-editing · 25,000 words" 
                  },
                  { 
                    text: "Mahmoud made invaluable contributions to our dialogue collection project. He is committed and consistently delivers data of outstanding quality. His collaborative approach makes him a pleasure to work with.", 
                    author: "Songbo Hu", role: "University of Cambridge", detail: "Academic Research" 
                  },
                  { 
                    text: "Mahmoud is a very reliable and cooperative translator. He always provides excellent quality while maintaining the deadline. I highly recommend working with him!", 
                    author: "Abdelwahab Elesawy", role: "Project Manager", detail: "Localization" 
                  }
                ].map((review, i) => (
                  <motion.div key={i} variants={fadeInUp} className="bg-card border border-border p-6 rounded-none">
                    <div className="text-primary mb-3">★★★★★</div>
                    <p className="italic text-foreground/80 mb-4 leading-relaxed">"{review.text}"</p>
                    <div className="text-sm">
                      <span className="font-semibold">{review.author}</span>
                      <span className="text-muted-foreground"> · {review.role}</span>
                      <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{review.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* RATES */}
      <section id="rates" className="py-24 md:py-32 px-6 md:px-12 bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="mb-4 text-primary font-semibold tracking-widest uppercase text-xs">Pricing</div>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-4">Transparent Rates</h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Rates below apply to <span className="font-medium text-foreground">100% human written translation</span>. Consecutive interpretation and MTPE (review of AI-generated text) are scoped and quoted separately.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Standard */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="rounded-none border-border bg-card">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-medium mb-2">Standard</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-semibold">$0.10</span>
                    <span className="text-muted-foreground text-sm">/ source word</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-8 min-h-[60px]">General-purpose human translation for standard documents, websites, and business content.</p>
                  <ul className="space-y-4 mb-8 text-sm">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> Arabic ↔ English</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> 3–5 day turnaround</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> One revision round</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> NDA on request</li>
                  </ul>
                  <Button variant="outline" className="w-full rounded-none border-border" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>Request Quote</Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Specialist */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Card className="rounded-none border-primary bg-primary text-primary-foreground relative shadow-lg transform lg:-translate-y-4">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-primary text-xs font-bold uppercase tracking-widest px-4 py-1">Most Popular</div>
                <CardContent className="p-8 pt-10">
                  <h3 className="font-serif text-2xl font-medium mb-2">Specialist</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-semibold">$0.14</span>
                    <span className="text-primary-foreground/70 text-sm">/ source word</span>
                  </div>
                  <p className="text-sm text-primary-foreground/80 mb-8 min-h-[60px]">Technical, medical, legal, military, or luxury content requiring domain expertise, custom glossary, and confidentiality protocols.</p>
                  <ul className="space-y-4 mb-8 text-sm">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4" /> All Standard features</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4" /> Custom glossary build</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4" /> NDA-default</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4" /> QA report included</li>
                  </ul>
                  <Button className="w-full rounded-none bg-white text-primary hover:bg-gray-100" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>Request Quote</Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Enterprise */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="rounded-none border-border bg-card">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-medium mb-2">Enterprise</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-semibold">Custom</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-8 min-h-[60px]">For ongoing partnerships, large-volume projects, on-site interpretation engagements, or organizations needing a dedicated language partner.</p>
                  <ul className="space-y-4 mb-8 text-sm">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> All Specialist features</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> Volume discounts</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> Style guide creation</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> Dedicated availability</li>
                  </ul>
                  <Button variant="outline" className="w-full rounded-none border-border" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>Let's Talk</Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Accordion type="single" collapsible className="w-full space-y-4 border-none">
              {[
                { 
                  q: "Do you use AI or machine translation on my content?", 
                  a: "No — not by default. Standard and Specialist tiers are 100% human translation. Your text never enters an AI system, an MT engine, or a third-party platform. If you've already used AI on your text and want it cleaned up, that's a separate review service (MTPE), quoted differently." 
                },
                { 
                  q: "Do you offer on-site interpretation?", 
                  a: "Yes — consecutive interpretation at training facilities, engineering sites, and military exercises is one of my primary services. Recent on-site engagements include CEER's electric-vehicle program in KAEC (Saudi Arabia, 2026) and General Dynamics' Pandur 6×6 program in Vienna. Travel and per-diem quoted per engagement." 
                },
                { 
                  q: "What language pairs do you work with?", 
                  a: "Arabic ↔ English. Both Modern Standard Arabic and regional variants can be accommodated depending on your target market." 
                },
                { 
                  q: "How do you handle confidential documents?", 
                  a: "Confidentiality is the default. I sign NDAs before opening files. I have extensive experience with sensitive military, defense, and corporate documentation, including a multimillion-word defense translation initiative at STAR Middle East and on-site interpretation for armored-vehicle training at General Dynamics." 
                },
                { 
                  q: "What is your typical turnaround time?", 
                  a: "Standard projects: 3–5 business days. For urgent requests, express delivery is available. I translate approximately 2,000–2,500 words per day, with quality assurance built into every project." 
                },
                { 
                  q: "Do you work with CAT tools and translation memories?", 
                  a: "Yes — I'm proficient in SDL Trados Studio, MemoQ, TRANSIT NXT, XTM Cloud, Phrase, and Wordbee. I can work within your preferred platform or use my own TM and glossary infrastructure. CAT tools provide consistency without exposing your content to AI." 
                },
                { 
                  q: "Do you offer certified translation?", 
                  a: "Please contact me directly to discuss your certification requirements. I can advise on the appropriate process based on your jurisdiction and document type." 
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border px-6">
                  <AccordionTrigger className="text-left font-medium text-lg hover:no-underline hover:text-primary py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-6xl font-medium mb-6">
              Let's Talk About Your Project.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/80 text-xl max-w-2xl mx-auto">
              Send a brief — language pair, document type, word count, deadline — and you'll have a quote in 4 business hours.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* CONTACT FORM */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-3"
            >
              <form
                action="https://formspree.io/f/maqvdlgq"
                method="POST"
                className="space-y-5 bg-primary-foreground/5 border border-primary-foreground/10 p-8"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name" className="text-primary-foreground/90 text-xs uppercase tracking-widest font-semibold mb-2 block">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="rounded-none bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30 h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-primary-foreground/90 text-xs uppercase tracking-widest font-semibold mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="rounded-none bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30 h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="company" className="text-primary-foreground/90 text-xs uppercase tracking-widest font-semibold mb-2 block">
                      Company / Organization
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Optional"
                      className="rounded-none bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30 h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="word_count" className="text-primary-foreground/90 text-xs uppercase tracking-widest font-semibold mb-2 block">
                      Approx. word count
                    </Label>
                    <Input
                      id="word_count"
                      name="word_count"
                      placeholder="e.g. 5,000"
                      className="rounded-none bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30 h-12"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-primary-foreground/90 text-xs uppercase tracking-widest font-semibold mb-2 block">
                    Project Brief
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Language pair, document type (legal, medical, technical, marketing…), industry, deadline, and any specific requirements."
                    className="rounded-none bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30 resize-none"
                  />
                </div>

                {/* Honeypot field for spam — hidden from real users */}
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-none bg-white text-primary hover:bg-gray-100 h-14 text-base tracking-wide group"
                >
                  Send Project Brief
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-primary-foreground/60 text-center pt-2">
                  NDA available on request. Replies within 4 business hours.
                </p>
              </form>
            </motion.div>

            {/* DIRECT CONTACT METHODS */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-2 space-y-6"
            >
              <div className="text-xs uppercase tracking-widest font-semibold text-primary-foreground/60 mb-2">
                Or reach out directly
              </div>

              <a
                href="https://wa.me/201061758388?text=Hi%20Mahmoud%2C%20I%27d%20like%20to%20discuss%20a%20translation%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors group"
              >
                <MessageCircle className="w-6 h-6 text-primary-foreground/80 shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-base mb-1">WhatsApp</div>
                  <div className="text-primary-foreground/70 text-sm">
                    Fastest channel for urgent quotes. Replies usually within 1 hour during business days.
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-primary-foreground/50 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="mailto:mahmoud@mahmoudradwan.me"
                className="flex items-start gap-4 p-6 bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors group"
              >
                <Mail className="w-6 h-6 text-primary-foreground/80 shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-base mb-1">Email</div>
                  <div className="text-primary-foreground/70 text-sm break-all">
                    mahmoud@mahmoudradwan.me
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-primary-foreground/50 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://www.linkedin.com/in/mahmoud-radwan-68730b409/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors group"
              >
                <Users className="w-6 h-6 text-primary-foreground/80 shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-base mb-1">LinkedIn</div>
                  <div className="text-primary-foreground/70 text-sm">
                    Verify experience, see endorsements, and connect.
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-primary-foreground/50 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://www.proz.com/profile/3517852"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors group"
              >
                <Award className="w-6 h-6 text-primary-foreground/80 shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-base mb-1">ProZ Profile</div>
                  <div className="text-primary-foreground/70 text-sm">
                    Industry-verified profile with project history.
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-primary-foreground/50 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="/cv-mahmoud-radwan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-primary-foreground/10 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors group"
              >
                <Download className="w-6 h-6 text-primary-foreground shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-base mb-1">Download CV (PDF)</div>
                  <div className="text-primary-foreground/70 text-sm">
                    Full résumé with detailed work history, accolades, and references.
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-primary-foreground/50 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <div className="pt-4 border-t border-primary-foreground/10">
                <div className="text-xs uppercase tracking-widest font-semibold text-primary-foreground/60 mb-2">
                  Based in
                </div>
                <div className="text-lg font-medium">Cairo, Egypt</div>
                <div className="text-primary-foreground/60 text-sm mt-1">
                  Working hours: 09:00 – 19:00 EET (GMT+2)<br />
                  Available for projects and on-site engagements worldwide.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="font-serif text-2xl font-bold text-primary mb-4">M·R</div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Senior consecutive interpreter and 100% human Arabic–English translator. Cairo, Egypt — serving global clients.
              </p>
              <p className="text-xs text-muted-foreground/70 leading-relaxed">
                Volunteer collaborator with NCCM &amp; UNDP on the Think Twice initiative for child rights advocacy across seven Egyptian governorates.
              </p>
            </div>

            {/* Quick nav */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-foreground mb-4">Site</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "#services", label: "Services" },
                  { href: "#about", label: "About" },
                  { href: "#portfolio", label: "Portfolio" },
                  { href: "#rates", label: "Rates" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-foreground mb-4">Direct</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="mailto:mahmoud@mahmoudradwan.me" className="text-muted-foreground hover:text-primary transition-colors break-all">
                    mahmoud@mahmoudradwan.me
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mahmoud-radwan-68730b409/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    LinkedIn <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.proz.com/profile/3517852"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    ProZ Profile <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/201061758388"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    WhatsApp <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="/cv-mahmoud-radwan.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    Download CV <Download className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Mahmoud Radwan. All rights reserved.</p>
            <p className="text-muted-foreground/70">NDA-default · Confidentiality-first · 100% human translation</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
