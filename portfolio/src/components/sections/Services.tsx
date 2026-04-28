import { motion, AnimatePresence } from "framer-motion";
import { 
  Layout, 
  Database, 
  Rocket, 
  Palette, 
  Zap, 
  Link as LinkIcon, 
  ShieldCheck, 
  BarChart3, 
  Bug, 
  Code2, 
  MessageSquare, 
  CheckCircle2,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const services = [
  {
    id: "landing",
    name: "Landing Page (Front-End)",
    description: "High-performance responsive web pages with modern UI, smooth animations, and best practices.",
    tech: ["HTML5", "CSS3", "JavaScript", "React"],
    price: 100,
    delivery: "1 – 2 weeks",
    type: "front-end",
    icon: Layout,
    isMostRequested: true
  },
  {
    id: "web-backend",
    name: "Web Page with Backend",
    description: "Full authentication, database integration (Supabase/Relational), CRUD operations, and business logic.",
    tech: [ "Node.js", "Supabase", "SQL Server", "Railway", "C#", "ASP.NET Framework", "ASP.NET WEB API", "ASP.NET Core"],
    price: 300,
    delivery: "2 – 4 weeks",
    type: "full-stack",
    icon: Database
  },
  {
    id: "full-app",
    name: "Full Web Application",
    description: "Complex structured systems with multiple modules, role-based access, and advanced business logic.",
    tech: ["Vite.js", "TypeScript", "Supabase", "Tailwind", "Capacitor","Railway", "C#", "ASP.NET Framework", "ASP.NET WEB API", "ASP.NET Core"],
    price: 800,
    delivery: "4 – 8 weeks",
    type: "full-stack",
    icon: Rocket
  },
  {
    id: "redesign",
    name: "Website Redesign",
    description: "Comprehensive UI/UX overhaul and performance optimization for a modern and professional appearance.",
    tech: ["UI/UX Design", "Modern CSS", "Framer Motion"],
    price: 50,
    delivery: "1 – 2 weeks",
    type: "front-end",
    icon: Palette
  },
  {
    id: "optimization",
    name: "Performance & SEO",
    description: "Speed optimization, Core Web Vitals, and basic SEO to improve search engine rankings.",
    tech: ["SEO", "Performance Tuning", "Web Vitals"],
    price: 40,
    delivery: "3 – 7 days",
    type: "front-end",
    icon: Zap
  },
  {
    id: "auth-system",
    name: "Authentication System",
    description: "Secure login/registration implementation, JWT management, and session handling.",
    tech: ["JWT", "OAuth", "Bcrypt"],
    price: 50,
    delivery: "5 – 10 days",
    type: "full-stack",
    icon: ShieldCheck
  },
  {
    id: "admin-dashboard",
    name: "Administrative Dashboard",
    description: "Professional control panels with advanced data management and visual analytics.",
    tech: ["Recharts", "TanStack Table", "Forms"],
    price: 120,
    delivery: "2 – 4 weeks",
    type: "full-stack",
    icon: BarChart3
  },
  {
    id: "debugging",
    name: "Debugging & Support",
    description: "Technical support and bug fixing for existing projects (Base cost).",
    tech: ["Debugging", "Testing", "Code Review"],
    price: 20,
    delivery: "1 – 5 days",
    type: "full-stack",
    icon: Bug
  }
];

export function Services() {
  const [filter, setFilter] = useState("all");

  const filteredServices = services.filter(s => filter === "all" || s.type === filter);

  const contactOnWhatsApp = (serviceName: string) => {
    const message = encodeURIComponent(`Hi Joel, I'm interested in your ${serviceName} service. Can we talk?`);
    window.open(`https://wa.me/18498817878?text=${message}`, "_blank");
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden" data-testid="section-services">
      {/* Background Decor - Optimized */}
      <div className="absolute top-0 right-0 -z-10 opacity-20 pointer-events-none">
        <div className="w-96 h-96 bg-primary/10 rounded-full blur-[80px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Services & Commissions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional digital solutions tailored to power your brand or business.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <Tabs defaultValue="all" className="w-full max-w-md" onValueChange={setFilter}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="front-end">Front-End</TabsTrigger>
              <TabsTrigger value="full-stack">Full Stack</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group h-full"
                >
                  <div className="h-full flex flex-col bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary),0.05)] transition-all duration-300 relative overflow-hidden">
                    {/* Badge "Most Popular" */}
                    {service.isMostRequested && (
                      <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground hover:bg-accent/90 border-none px-3">
                        Most Popular
                      </Badge>
                    )}

                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                      <Icon className="text-primary" size={28} />
                    </div>

                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
                    
                    <div className="flex items-center gap-1.5 text-xs font-medium text-accent mb-4">
                      <Clock size={14} />
                      <span>{service.delivery}</span>
                    </div>

                    <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">{service.description}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.tech.map(t => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-muted rounded-md text-muted-foreground border border-border/50">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold mb-1">Starting at</p>
                        <p className="text-3xl font-bold text-foreground">
                          ${service.price} <span className="text-sm font-normal text-muted-foreground uppercase">usd</span>
                        </p>
                      </div>
                      <Button 
                        size="icon" 
                        className="rounded-full w-12 h-12 hover:scale-110 transition-transform bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20" 
                        onClick={() => contactOnWhatsApp(service.name)}
                      >
                        <MessageSquare size={20} />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-muted-foreground/60 italic"
        >
          * Delivery times may vary depending on project complexity and the availability of information provided by the client.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-primary/10 via-background to-accent/5 border border-primary/20 text-center relative overflow-hidden"
        >
          {/* Subtle background pulse */}
          <div className="absolute inset-0 bg-primary/5 animate-pulse -z-10" />
          
          <CheckCircle2 className="mx-auto text-primary mb-6" size={48} />
          <h4 className="text-2xl md:text-3xl font-bold mb-4">Looking for something else?</h4>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            If your project doesn't fit these categories or you have very specific requirements, contact me for a custom quote with no commitment.
          </p>
          <Button asChild size="lg" className="rounded-full gap-3 h-14 px-8 text-lg shadow-xl shadow-primary/20">
            <a href="https://wa.me/18498817878?text=Hi%20Joel,%20I%20have%20a%20custom%20project%20and%20I'd%20like%20to%20get%20a%20quote." target="_blank" rel="noopener noreferrer">
              <MessageSquare size={20} /> Request a Quote
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
