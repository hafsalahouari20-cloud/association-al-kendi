import { motion } from 'framer-motion';
import { Trophy, Users, Target, Eye, Calendar, Mail, MapPin, Phone } from 'lucide-react';
import { Header, Footer, ScrollToTop } from '@/components/Layout';
import { Chatbot } from '@/components/Chatbot';
import { members, activities, upcomingEvents } from '@/data/index';

const springIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const stagger = {
  initial: {},
  whileInView: {},
  viewport: { once: true },
};

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <ScrollToTop />
      <Chatbot />

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background: event photo */}
        <div className="absolute inset-0">
          <img
            src="/images/event1.jpeg"
            alt="AJK Event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/70 to-primary/95" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <img
              src="/images/logo.jpeg"
              alt="AJK Logo"
              className="h-32 w-32 rounded-full mx-auto border-4 border-accent shadow-2xl object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block bg-accent/20 text-accent border border-accent/30 text-sm font-semibold px-4 py-1 rounded-full mb-6 tracking-widest uppercase">
              AJK — 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-tight">
              Association des Jeunes
              <span className="block text-accent mt-1">Al Kendi</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              « Investir dans la jeunesse, c'est investir dans l'avenir. »
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent text-accent-foreground px-8 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-all hover:scale-105"
              >
                Découvrir l'association
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-primary-foreground/40 text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                Nous contacter
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 mt-16 max-w-lg mx-auto"
          >
            {[
              { value: '5', label: 'Membres du bureau' },
              { value: '6+', label: 'Activités' },
              { value: '2026', label: 'Année active' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-extrabold text-accent">{stat.value}</p>
                <p className="text-primary-foreground/60 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/40"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary-foreground/40 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════ ABOUT ══════════════════════════════════ */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...springIn} className="text-center mb-16">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">À propos</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
              Qui sommes-nous ?
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...springIn}>
              <h3 className="text-2xl font-bold text-primary mb-4">Notre Mission</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                L'Association des Jeunes Al Kendi (AJK) s'engage à accompagner les étudiants du centre BTS Al Kendi dans le développement de leurs compétences professionnelles, technologiques et humaines.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Elle œuvre à améliorer la qualité de la formation, renforcer la communication entre les étudiants et leur établissement, et encourager l'engagement associatif, l'esprit d'initiative et la solidarité.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Target size={20} />, text: 'Mission claire' },
                  { icon: <Eye size={20} />, text: 'Vision ambitieuse' },
                  { icon: <Users size={20} />, text: 'Équipe engagée' },
                  { icon: <Trophy size={20} />, text: 'Excellence' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-muted rounded-xl p-3">
                    <span className="text-accent">{item.icon}</span>
                    <span className="text-sm font-medium text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/20">
                <img
                  src="/images/event2.jpeg"
                  alt="AJK Activities"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-lg font-bold text-sm">
                🌟 Vision 2026
              </div>
            </motion.div>
          </div>

          {/* Vision */}
          <motion.div
            {...springIn}
            className="mt-16 bg-primary rounded-2xl p-8 text-center text-primary-foreground"
          >
            <h3 className="text-xl font-bold text-accent mb-3">Notre Vision</h3>
            <p className="text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              L'association aspire à former une génération de jeunes responsables, engagés et compétents, capables de contribuer activement au développement de la société. Elle ambitionne de devenir un acteur de référence dans la promotion de l'excellence académique, de l'innovation et des valeurs citoyennes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════ ACTIVITIES ══════════════════════════════ */}
      <section id="activities" className="py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...springIn} className="text-center mb-16">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">Ce que nous faisons</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
              Nos Activités & Initiatives
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4" />
          </motion.div>

          {/* Photo gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 mb-14"
          >
            <div className="rounded-2xl overflow-hidden h-56 shadow-lg">
              <img src="/images/event1.jpeg" alt="Événement AJK 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden h-56 shadow-lg">
              <img src="/images/event2.jpeg" alt="Événement AJK 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, i) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════ MEMBERS ═══════════════════════════════ */}
      <section id="members" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div {...springIn} className="text-center mb-16">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">L'équipe dirigeante</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
              Bureau Exécutif
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {members.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all w-48"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-primary-foreground font-extrabold text-xl shadow-lg">
                  {member.name.split(' ').slice(-1)[0][0]}
                </div>
                <p className="font-bold text-foreground text-sm leading-tight mb-1">{member.name}</p>
                <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mt-2">
                  {member.role}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ EVENTS ════════════════════════════════ */}
      <section id="events" className="py-24 bg-primary">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...springIn} className="text-center mb-16">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">À venir</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mt-2">
              Événements & Projets
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <span className="inline-block bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full mb-4">
                  <Calendar size={12} className="inline mr-1" />
                  {event.type}
                </span>
                <h3 className="text-primary-foreground font-bold text-lg mb-2">{event.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ CONTACT ════════════════════════════════ */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...springIn} className="text-center mb-16">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">Contactez-nous</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
              Restons en Contact
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Info */}
            <motion.div {...springIn} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-xl text-accent flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground text-sm">contact@ajkendi.ma</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-xl text-accent flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Téléphone</p>
                  <p className="text-muted-foreground text-sm">+212 6XX XXX XXX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-xl text-accent flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Adresse</p>
                  <p className="text-muted-foreground text-sm">Centre BTS Al Kendi, Maroc</p>
                </div>
              </div>
              <div className="bg-muted rounded-2xl p-5 mt-4">
                <p className="text-sm text-muted-foreground italic">
                  « En soutenant notre association, vous contribuez activement au développement des initiatives éducatives, culturelles et sociales destinées aux jeunes. »
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={(e) => e.preventDefault()}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Nom complet</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full bg-muted border border-border rounded-xl px-4 py-2.5 text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full bg-muted border border-border rounded-xl px-4 py-2.5 text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Votre message..."
                  className="w-full bg-muted border border-border rounded-xl px-4 py-2.5 text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground font-semibold py-3 rounded-xl hover:bg-accent/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Envoyer le message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
