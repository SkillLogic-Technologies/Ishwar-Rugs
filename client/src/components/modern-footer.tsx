import { Link } from "wouter";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ModernFooter() {
  return (
    <footer className="relative w-full overflow-hidden">

 
  <div className="absolute inset-0 z-0">
    <img
      src="https://res.cloudinary.com/dzufohihn/image/upload/v1767769114/Chat-GPT-Image-Jul-1-2025-01-07-00-AM_i0zmos.png"
      alt="Heritage background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-white/70 dark:bg-[#1b150e]/85 backdrop-blur-sm" />
  </div>

  
  <div className="relative z-10">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">

      
      <div className="flex flex-col items-center text-center mb-14 sm:mb-20">

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-premium-gold mb-5 sm:mb-6">
          Stay Connected
        </h2>

        <p className="text-neutral-800 dark:text-white/90 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl">
          Be the first to discover our latest collections and exclusive designs
        </p>

        <div className="w-full max-w-md flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 bg-white/40 dark:bg-white/10 border border-white/50 text-black dark:text-white"
          />

          <Button className="w-full sm:w-auto bg-premium-gold text-primary-brown hover:bg-warm-gold font-semibold px-8">
            Subscribe
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">

        
        <div className="text-center sm:text-left">
          <img
            src="https://res.cloudinary.com/dzufohihn/image/upload/v1767769166/Chat-GPT-Image-Jul-10-2025-02-12-10-PM_hzqpxx.png"
            alt="Ishwar Rugs Logo"
            className="h-16 sm:h-20 w-auto mx-auto sm:mx-0 mb-5"
          />

          <p className="text-neutral-800 dark:text-white/90 leading-relaxed text-sm sm:text-base">
            Fine handcrafted carpets since 1925. Creating timeless pieces that
            transform spaces with elegance and sophistication.
          </p>

          <div className="flex justify-center sm:justify-start space-x-4 mt-6">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-neutral-600 dark:text-white/70 hover:text-premium-gold transition p-2 rounded-lg hover:bg-white/10"
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            ))}
          </div>
        </div>

       
        <div className="text-center sm:text-left">
          <h4 className="font-serif text-lg sm:text-xl font-bold text-neutral-800 dark:text-white mb-5">
            Collections
          </h4>

          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
            {["contemporary", "modern", "traditional"].map((cat) => (
              <li key={cat}>
                <Link
                  href={`/collections?category=${cat}`}
                  className="text-neutral-700 dark:text-white/90 hover:text-premium-gold transition group inline-flex items-center"
                >
                  <span className="capitalize">{cat}</span>
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/collections"
                className="text-premium-gold font-semibold hover:text-warm-gold transition group inline-flex items-center"
              >
                <span>View All Collections</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
            </li>
          </ul>
        </div>

    
        <div className="text-center sm:text-left">
          <h4 className="font-serif text-lg sm:text-xl font-bold text-neutral-800 dark:text-white mb-5">
            Company
          </h4>

          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
            {["Our Heritage", "Craftsmanship", "Bespoke Design", "Sustainability", "Careers"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-neutral-700 dark:text-white/90 hover:text-premium-gold transition group inline-flex items-center"
                >
                  <span>{item}</span>
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="text-center sm:text-left">
          <h4 className="font-serif text-lg sm:text-xl font-bold text-neutral-800 dark:text-white mb-5">
            Get in Touch
          </h4>

          <div className="space-y-4 text-neutral-700 dark:text-white/90 text-sm">
            <div className="flex items-start justify-center sm:justify-start space-x-3">
              <MapPin className="h-5 w-5 text-premium-gold mt-1 flex-shrink-0" />
              <div>
                Civil Lines, Power House Road<br />
                Bhadohi – 221401 (U.P), India
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <Phone className="h-5 w-5 text-premium-gold" />
              <a href="tel:+915414224518" className="hover:text-premium-gold transition">
                05414 224518
              </a>
            </div>

            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <Mail className="h-5 w-5 text-premium-gold" />
              <a href="mailto:info@ishwarrugs.com" className="hover:text-premium-gold transition">
                info@ishwarrugs.com
              </a>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/contact">
              <Button
                variant="outline"
                className="w-full border-premium-gold text-premium-gold hover:bg-premium-gold hover:text-primary-brown"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>

  
    <div className="bg-white/80 dark:bg-[#1b150e] border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-center md:text-left">

        <p className="text-neutral-700 dark:text-white/80 text-sm">
          © 2024 Ishwar Rugs. All rights reserved. • Crafted with passion since 1925.
        </p>

        <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-sm">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((text) => (
            <a
              href="#"
              key={text}
              className="text-neutral-700 dark:text-white/80 hover:text-premium-gold transition"
            >
              {text}
            </a>
          ))}
        </div>

      </div>
    </div>

  </div>
</footer>
  );
}