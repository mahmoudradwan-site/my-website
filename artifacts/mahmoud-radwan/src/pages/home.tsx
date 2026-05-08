import React from "react";
import { ArrowUpRight, CheckCircle2, ChevronRight, Globe, Mail, MessageCircle, MessageSquare, Send, ShieldCheck, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import photoPath from "@/assets/photo.png";
import portfolioDefensePath from "@/assets/portfolio-defense.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
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
              <span className="text-primary font-semibold tracking-widest uppercase text-sm">Senior Translator</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] text-foreground mb-6">
              Mahmoud Radwan. <br />
              <span className="text-muted-foreground italic font-normal">Precision in Every Word.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
              14 years delivering expert Arabic–English translation across technical, legal, medical, and luxury brand domains. Trusted by global organizations for precision and cultural authenticity.
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
              { label: "Words Translated", value: "2.5M+" },
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI / MTPE SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-4 text-primary-foreground/70 font-semibold tracking-widest uppercase text-xs">
                Future-Ready
              </motion.div>
              <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-5xl font-medium mb-6">
                Your Bridge into the AI Translation Era
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                AI tools are fast, but fast isn't always right. With 14 years of expertise and deep Machine Translation Post-Editing (MTPE) experience, I help organizations make the leap into AI-assisted workflows without losing quality, tone, and cultural accuracy.
              </motion.p>
              
              <motion.div variants={fadeInUp}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-none border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary h-14 px-8"
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Discuss Your AI Workflow
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
                { title: "MTPE Workflows", desc: "Enterprise-scale Machine Translation Post-Editing for Arabic ↔ English." },
                { title: "Humanizing AI", desc: "Polishing AI-generated translations to sound natural, authoritative, and human." },
                { title: "Terminology Management", desc: "Integrating strict style guides and glossaries into automated pipelines." },
                { title: "Cultural Adaptation", desc: "Ensuring AI output aligns perfectly with the Arabic-speaking market's nuances." }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-start gap-4 p-6 bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors">
                  <Sparkles className="w-6 h-6 text-primary-foreground/60 shrink-0 mt-1" />
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
              { icon: ShieldCheck, title: "Technical Translation", desc: "Engineering documents, manuals, automotive and military materials. Precise terminology, zero ambiguity." },
              { icon: Globe, title: "Medical Translation", desc: "Clinical studies, pharmaceutical documents, and medical device manuals translated with rigorous accuracy." },
              { icon: MessageSquare, title: "Marketing & Localization", desc: "Brand voice adapted for Arabic-speaking markets. Campaigns, product descriptions, and brand narratives." },
              { icon: MessageSquare, title: "Consecutive Interpretation", desc: "Professional consecutive interpretation for training sessions, conferences, and military briefings." },
              { icon: Sparkles, title: "Post-Editing (MTPE)", desc: "Machine translation post-editing using advanced CAT tools. Fast turnaround without sacrificing quality." },
              { icon: CheckCircle2, title: "Translation Review & QA", desc: "Independent linguistic review and quality assurance of translated content produced by third parties." },
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

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                category: "Military / Defense",
                title: "Defense Training Documentation",
                desc: "Full documentation suite and live interpretation for a multinational defense training program.",
                image: portfolioDefensePath,
                imageAlt: "Mahmoud Radwan at a defense training site",
              },
              {
                category: "Academic Research",
                title: "Cross-Cultural Study on Loneliness",
                desc: "Contributing translator and cultural consultant for a peer-reviewed study published in the Journal of the International Association for Relationship Research.",
                image: "https://images.unsplash.com/photo-1758270704113-9fb2ac81788f?auto=format&fit=crop&w=1200&q=80",
                imageAlt: "Professor leading a university lecture with students taking notes",
              },
              {
                category: "Automotive / Technical",
                title: "Automotive Brand Localization",
                desc: "Long-term localization partnership covering owner's manuals, marketing materials, and digital content for a premium luxury automotive brand.",
                image: "https://images.unsplash.com/photo-1760550818631-8043b7850885?auto=format&fit=crop&w=1200&q=80",
                imageAlt: "Luxury car interior with red leather seats and dashboard",
              },
            ].map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] bg-secondary mb-6 relative overflow-hidden flex items-center justify-center border border-border">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-primary/5 transition-colors duration-500"></div>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/70 to-transparent"></div>
                  <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center bg-background transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-sm z-10">
                    <ArrowUpRight className="text-primary w-6 h-6" />
                  </div>
                </div>
                <div className="text-xs font-semibold tracking-wider text-primary mb-2 uppercase">{project.category}</div>
                <h3 className="font-serif text-xl font-medium mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
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
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground">Transparent Rates</h2>
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
                    <span className="text-3xl font-semibold">$0.06</span>
                    <span className="text-muted-foreground text-sm">/ source word</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-8 min-h-[60px]">General-purpose translation for standard documents, websites, and business content.</p>
                  <ul className="space-y-4 mb-8 text-sm">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> Arabic ↔ English</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> 3–5 day turnaround</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> One revision round</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> CAT tool consistency</li>
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
                    <span className="text-3xl font-semibold">$0.08</span>
                    <span className="text-primary-foreground/70 text-sm">/ source word</span>
                  </div>
                  <p className="text-sm text-primary-foreground/80 mb-8 min-h-[60px]">Technical, medical, legal, or automotive content requiring domain expertise and terminology management.</p>
                  <ul className="space-y-4 mb-8 text-sm">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4" /> All Standard features</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4" /> Domain-specific glossary</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4" /> Priority turnaround</li>
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
                  <p className="text-sm text-muted-foreground mb-8 min-h-[60px]">For ongoing partnerships, large-volume projects, or organizations needing a dedicated language partner.</p>
                  <ul className="space-y-4 mb-8 text-sm">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> All Specialist features</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> Volume discounts</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> Dedicated project lead</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> Style guide creation</li>
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
                  q: "What language pairs do you work with?", 
                  a: "Arabic ↔ English. Both Modern Standard Arabic and regional variants can be accommodated depending on your target market." 
                },
                { 
                  q: "How do you handle confidential documents?", 
                  a: "Confidentiality is paramount. I sign NDAs upon request and handle all materials with strict discretion. I have extensive experience working with sensitive military and corporate documentation." 
                },
                { 
                  q: "What is your typical turnaround time?", 
                  a: "Standard projects: 3–5 business days. For urgent requests, express delivery is available. I translate approximately 2,000–2,500 words per day, with quality assurance built in to every project." 
                },
                { 
                  q: "Do you work with CAT tools and translation memories?", 
                  a: "Yes — I'm proficient in SDL Trados Studio, MemoQ, TRANSIT NXT, XTM Cloud, Phrase, and Wordbee. I can work within your preferred platform or use my own TM and glossary infrastructure." 
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
              {/*
                TODO before launch: replace FORMSPREE_ID with your Formspree form id.
                Sign up at https://formspree.io (free tier covers 50 submissions/month).
                Or swap the action URL for your own backend endpoint.
              */}
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

              {/*
                TODO before launch: replace WHATSAPP_NUMBER with your number in international format,
                no spaces or symbols (e.g. 201234567890 for Egypt). The wa.me/ link works on
                desktop browsers and opens the WhatsApp app on mobile.
              */}
              <a
                href="https://wa.me/00201061758388?text=Hi%20Mahmoud%2C%20I%27d%20like%20to%20discuss%20a%20translation%20project."
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

              <div className="pt-4 border-t border-primary-foreground/10">
                <div className="text-xs uppercase tracking-widest font-semibold text-primary-foreground/60 mb-2">
                  Based in
                </div>
                <div className="text-lg font-medium">Cairo, Egypt</div>
                <div className="text-primary-foreground/60 text-sm mt-1">
                  Working hours: 09:00 – 19:00 EET (GMT+2)<br />
                  Available for projects worldwide.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-background border-t border-border text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Mahmoud Radwan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
