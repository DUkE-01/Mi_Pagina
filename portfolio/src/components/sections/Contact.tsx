import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Download, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const CV_PATH = "/assets/CV-Joel_Aristides_Gil_Jackson.pdf";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      formData.append("_subject", `Portfolio contact from ${data.name}`);
      formData.append("_captcha", "false");
      formData.append("_template", "table");

      const response = await fetch("https://formsubmit.co/ajax/Joel.Gil2025@hotmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error("Server responded with an error.");
      }
    } catch {
      toast({
        title: "Something went wrong.",
        description: "Please try emailing me directly at Joel.Gil2025@hotmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-card/30 border-t border-border/50 relative" data-testid="section-contact">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-10">
              <a href="mailto:Joel.Gil2025@hotmail.com" className="flex items-center gap-4 group" data-testid="contact-email">
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:text-primary transition-colors shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Email</p>
                  <p className="text-lg font-medium group-hover:text-primary transition-colors">Joel.Gil2025@hotmail.com</p>
                </div>
              </a>
              
              <a href="tel:+18498817878" className="flex items-center gap-4 group" data-testid="contact-phone">
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:text-primary transition-colors shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Phone</p>
                  <p className="text-lg font-medium group-hover:text-primary transition-colors">849-881-7878</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 group" data-testid="contact-location">
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:text-primary transition-colors shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Location</p>
                  <p className="text-lg font-medium group-hover:text-primary transition-colors">Santo Domingo Este, DR</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-background border border-border shadow-sm">
              <h4 className="text-xl font-bold mb-4">Download Resume</h4>
              <p className="text-muted-foreground mb-6">Get a copy of my detailed professional resume.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="gap-2" data-testid="contact-btn-cv-es">
                  <a href={CV_PATH} download="CV-Joel_Aristides_Gil_Jackson.pdf">
                    <Download size={18} />
                    CV en Español
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2" data-testid="contact-btn-cv-en">
                  <a href="/assets/CV-Joel_Aristides_Gil_Jackson_EN.pdf" download="CV-Joel_Aristides_Gil_Jackson_EN.pdf">
                    <Download size={18} />
                    CV in English
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background rounded-3xl border border-border p-8 shadow-sm relative overflow-hidden"
          >
            {/* Subtle glow inside form */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
            
            <h3 className="text-2xl font-bold mb-8 relative z-10">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10" data-testid="contact-form">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-card" data-testid="input-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" type="email" {...field} className="bg-card" data-testid="input-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we work together?" 
                          className="min-h-[150px] resize-none bg-card" 
                          {...field} 
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting} data-testid="btn-submit-contact">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">Sending...</span>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
