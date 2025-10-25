import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  Mic,
  Video,
  Heart,
  Search,
  CheckCircle,
  ChevronDown,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  BarChart3,
  Briefcase,
  Award,
  ArrowRight,
  Play,
  Users,
  Globe,
  Activity,
} from "lucide-react";
import Header from "@/components/Head";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "expertise",
        "experience",
        "podcast",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = new Map();

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [index]: true }));
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(el);
      observers.set(index, observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const expertise = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Analysis & Forex Trading",
      description:
        "8 years of data-driven trading with disciplined risk management and proven strategies",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "AutoTips Podcast",
      description:
        "Global reach sharing trading insights and investment strategies with diverse audiences",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Content Creation",
      description:
        "Motivational and educational content blending finance with personal development",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare Leadership",
      description:
        "3+ years as field care supervisor ensuring quality patient-centered care",
      gradient: "from-red-500 to-orange-600",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description:
        "2+ years optimizing web presence and boosting engagement through strategic SEO",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Assurance",
      description:
        "Ensuring seamless user experiences across websites and applications",
      gradient: "from-amber-500 to-yellow-600",
    },
  ];

  const experience = [
    {
      title: "Market Analyst & Forex Trader",
      period: "2017 - Present",
      description:
        "Specializing in derivatives trading, technical analysis, and risk management with consistent profitability",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "AutoTips Podcast Host",
      period: "2020 - Present",
      description:
        "Creating engaging financial education content reaching thousands of traders worldwide",
      icon: <Mic className="w-6 h-6" />,
    },
    {
      title: "Field Care Supervisor",
      period: "2021 - Present",
      description:
        "Leading healthcare teams to deliver exceptional patient care and support services",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "SEO Specialist & QA Expert",
      period: "2022 - Present",
      description:
        "Optimizing digital presence and ensuring quality across web platforms",
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  const stats = [
    {
      number: "8+",
      label: "Years Trading",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      number: "1000+",
      label: "Podcast Episodes",
      icon: <Mic className="w-6 h-6" />,
    },
    {
      number: "50K+",
      label: "Global Audience",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "100+",
      label: "Projects Completed",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Navigation */}
        <nav
          className={`fixed w-full z-50 transition-all duration-500 ${
            scrolled
              ? "bg-slate-900/95 backdrop-blur-lg shadow-2xl"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Christian Onyeka
              </div>
              <div className="hidden md:flex space-x-8">
                {[
                  "Home",
                  "About",
                  "Expertise",
                  "Experience",
                  "Podcast",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`transition-all duration-300 hover:text-emerald-400 ${
                      activeSection === item.toLowerCase()
                        ? "text-emerald-400 font-semibold"
                        : "text-gray-300"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full opacity-10"
                style={{
                  width: Math.random() * 3 + 1 + "px",
                  height: Math.random() * 3 + 1 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  animation: `float ${
                    Math.random() * 10 + 10
                  }s linear infinite`,
                  animationDelay: Math.random() * 5 + "s",
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <div className="fade-in mb-6">
              <div className="inline-block px-6 py-2 bg-emerald-500/20 rounded-full text-emerald-400 text-sm font-semibold mb-8 border border-emerald-500/30">
                Market Analyst • Podcast Host • Healthcare Leader
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 fade-in">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Christian Onyeka
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto fade-in leading-relaxed">
              Transforming markets into opportunities through expert analysis,
              strategic trading, and educational content that empowers global
              audiences
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in">
              <button
                onClick={() => scrollToSection("expertise")}
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Explore My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-emerald-500/50 rounded-full font-semibold text-lg hover:bg-emerald-500/10 transition-all duration-300 hover:border-emerald-500"
              >
                Get In Touch
              </button>
            </div>

            <div className="mt-16 animate-bounce">
              <ChevronDown className="w-8 h-8 mx-auto text-emerald-400" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="fade-in">
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  About Me
                </h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    I'm a seasoned market analyst and Forex trader with nearly
                    eight years of experience transforming complex market data
                    into profitable trading strategies. My approach combines
                    rigorous technical analysis with disciplined risk
                    management.
                  </p>
                  <p>
                    Beyond trading, I'm passionate about financial education.
                    Through my AutoTips Podcast, I've built a global community
                    of traders and investors, sharing insights that bridge the
                    gap between theory and practical application.
                  </p>
                  <p>
                    My diverse background spans multiple industries—from
                    healthcare leadership to digital optimization—giving me a
                    unique perspective on problem-solving and strategic thinking
                    that enhances every project I undertake.
                  </p>
                </div>
              </div>

              <div className="fade-in relative">
                <div className="relative bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 p-8 rounded-3xl border border-emerald-500/30 backdrop-blur-sm">
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full blur-3xl opacity-30" />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30" />

                  <div className="relative space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl">
                      <Briefcase className="w-8 h-8 text-emerald-400" />
                      <div>
                        <div className="font-semibold text-emerald-400">
                          Multi-Industry Expert
                        </div>
                        <div className="text-sm text-gray-400">
                          Finance • Healthcare • Digital
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl">
                      <Award className="w-8 h-8 text-cyan-400" />
                      <div>
                        <div className="font-semibold text-cyan-400">
                          Proven Track Record
                        </div>
                        <div className="text-sm text-gray-400">
                          8+ Years Success
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl">
                      <Globe className="w-8 h-8 text-purple-400" />
                      <div>
                        <div className="font-semibold text-purple-400">
                          Global Impact
                        </div>
                        <div className="text-sm text-gray-400">
                          Worldwide Audience
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section
          id="expertise"
          className="py-32 bg-gradient-to-br from-slate-900 to-slate-950 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Areas of Expertise
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A diverse skill set spanning finance, media, healthcare, and
                digital optimization
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="fade-in group relative bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 backdrop-blur-sm"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                  />
                  <div
                    className={`inline-flex p-4 bg-gradient-to-br ${item.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-32">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Professional Journey
              </h2>
              <p className="text-xl text-gray-400">
                A timeline of growth, achievement, and impact
              </p>
            </div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={index} className="fade-in flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                      {exp.icon}
                    </div>
                    {index !== experience.length - 1 && (
                      <div className="w-1 h-full bg-gradient-to-b from-emerald-500 to-cyan-500 mt-4" />
                    )}
                  </div>

                  <div className="flex-1 pb-12">
                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 backdrop-blur-sm">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-emerald-400">
                          {exp.title}
                        </h3>
                        <span className="text-cyan-400 font-semibold">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Podcast Section */}
        <section
          id="podcast"
          className="py-32 bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="fade-in">
                <div className="relative bg-slate-800/50 p-12 rounded-3xl border border-emerald-500/30 backdrop-blur-sm">
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full blur-3xl opacity-40" />
                  <div className="relative">
                    <div className="flex items-center justify-center w-32 h-32 mx-auto bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full mb-8">
                      <Play className="w-16 h-16" />
                    </div>
                    <div className="text-center">
                      <div className="text-6xl font-bold text-emerald-400 mb-2">
                        1000+
                      </div>
                      <div className="text-gray-400 text-lg">
                        Episodes Published
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fade-in">
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  AutoTips Podcast
                </h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    The AutoTips Podcast is where trading expertise meets
                    accessible education. With over 1000 episodes, I've created
                    a comprehensive resource for traders at every level.
                  </p>
                  <p>
                    From market analysis and trading strategies to investment
                    psychology and risk management, each episode delivers
                    actionable insights designed to elevate your trading game.
                  </p>
                  <p>
                    Join thousands of listeners worldwide who trust AutoTips for
                    their financial education and market insights.
                  </p>
                </div>
                <div className="mt-8 flex gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Listen Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-xl text-gray-400">
                Ready to collaborate or discuss opportunities? Reach out today.
              </p>
            </div>

            <div className="fade-in bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-12 rounded-3xl border border-emerald-500/30 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                  <Mail className="w-8 h-8 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-400">contact@christianonyeka.com</p>
                </div>

                <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                  <Globe className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-gray-400">Available Worldwide</p>
                </div>
              </div>

              <div className="flex justify-center gap-6">
                <a
                  href="#"
                  className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-full hover:bg-gradient-to-br hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/50"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-full hover:bg-gradient-to-br hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/50"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-full hover:bg-gradient-to-br hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/50"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Christian Onyeka
              </div>
              <div className="text-gray-400">
                © 2025 Christian Onyeka. All rights reserved.
              </div>
            </div>
          </div>
        </footer>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0) translateX(0);
            }
            25% {
              transform: translateY(-20px) translateX(10px);
            }
            50% {
              transform: translateY(-10px) translateX(-10px);
            }
            75% {
              transform: translateY(-30px) translateX(5px);
            }
          }

          .fade-in {
            opacity: 0;
            animation: fadeIn 0.8s ease-out forwards;
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </>
  );
}
