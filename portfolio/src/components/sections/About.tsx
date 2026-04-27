import { motion } from "framer-motion";
import { GraduationCap, MapPin, BookOpen } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative" data-testid="section-about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Left Column */}
          <div className="w-full md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">About Me</h2>
              <div className="h-1 w-20 bg-primary rounded-full mb-8" />
              
              <div className="space-y-6">
                <div className="flex items-start gap-4" data-testid="about-location">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center shrink-0 border border-border">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-muted-foreground">Santo Domingo Este, Dominican Republic</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4" data-testid="about-education">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center shrink-0 border border-border">
                    <GraduationCap className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Education</h3>
                    <p className="text-muted-foreground">Tecnólogo en Desarrollo de Software</p>
                    <p className="text-sm text-muted-foreground mt-1">ITLA, Boca Chica, La Caleta</p>
                    <span className="inline-block mt-2 text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded">Graduated</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-invert max-w-none prose-p:text-lg prose-p:leading-relaxed prose-p:text-muted-foreground"
            >
              <p>
                I am a Front-End developer in training with solid skills in HTML, CSS, JavaScript, and C#. My passion lies in building clean, functional, and device-adaptive interfaces that prioritize user experience above all else.
              </p>
              <p>
                I view software development not just as writing code, but as solving complex problems through elegant architecture and thoughtful design. I thrive in dynamic environments where I can learn constantly and adapt to new challenges.
              </p>
              <p>
                <strong>My immediate goal:</strong> to join a team where I can contribute tangible value from day one while continuing to grow technically as a full-stack engineer.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 p-6 rounded-2xl bg-card border border-border flex items-start gap-4"
            >
              <BookOpen className="text-accent shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-lg mb-2">Constantly Learning</h4>
                <p className="text-muted-foreground">Beyond my formal education, I actively pursue new knowledge. I hold an English C1 level, opening doors for international collaboration, and I continually build side projects to refine my craft.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
