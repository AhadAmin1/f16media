import { motion } from 'framer-motion'

const premiumSpring = {
  type: 'spring',
  stiffness: 90,
  damping: 20,
  mass: 0.8,
}

export default function Services() {
  const SERVICES = [
    {
      code: 'SRV_01',
      title: 'Local Service Ads',
      desc: 'Boost local leads and visibility with expertly optimized Local Service Ads tailored specifically for your business needs.',
      size: 'large',
      stats: 'HIGH INTENT',
    },
    {
      code: 'SRV_02',
      title: 'Social Media Management',
      desc: 'At F16MEDIA LLC, we offer social media management services to help you maximize the potential of your social media presence.',
      size: 'small',
      stats: 'POTENTIAL',
    },
    {
      code: 'SRV_03',
      title: 'Lead Generation',
      desc: 'At F16MEDIA LLC, we generate high-quality leads to grow your home improvement business and boost sales effectively.',
      size: 'small',
      stats: 'QUALITY',
    },
    {
      code: 'SRV_04',
      title: 'Website Development',
      desc: 'We design user-friendly, highly effective websites that serve as the digital storefront for home improvement businesses.',
      size: 'wide',
      stats: 'STOREFRONT',
    },
    {
      code: 'SRV_05',
      title: 'SEO',
      desc: 'Improve your website’s search rankings and organic traffic through strategic keyword research and on-page SEO techniques.',
      size: 'small',
      stats: 'RANKINGS',
    },
    {
      code: 'SRV_06',
      title: 'Ecommerce Marketing',
      desc: 'Drive more online sales with targeted ecommerce campaigns, product promotions, and data-driven marketing strategies.',
      size: 'small',
      stats: 'SALES',
    },
    {
      code: 'SRV_07',
      title: 'Branding',
      desc: 'Your brand is the face of your business, and at F16MEDIA LLC, we are dedicated to helping you create a strong and memorable brand identity.',
      size: 'small',
      stats: 'IDENTITY',
    },
    {
      code: 'SRV_08',
      title: 'Content Marketing',
      desc: 'Build audience trust and engagement by consistently delivering valuable, relevant, and well-crafted content across platforms.',
      size: 'wide',
      stats: 'TRUST',
    },
    {
      code: 'SRV_09',
      title: 'PPC/GOOGLE ADS',
      desc: 'Maximize conversions quickly with budget-friendly, targeted Google Ads and expertly managed pay-per-click campaigns.',
      size: 'small',
      stats: 'CONVERSIONS',
    },
    {
      code: 'SRV_10',
      title: 'Dispatch (VA Services)',
      desc: 'Enhance business efficiency by outsourcing scheduling, communication, and logistics to skilled virtual assistant dispatch services.',
      size: 'small',
      stats: 'EFFICIENCY',
    }
  ]

  return (
    <section className="relative py-24 md:py-40 bg-[#050505] overflow-hidden" id="services">
      {/* HUD Elements */}
      <div className="absolute top-0 left-0 w-full h-full hud-grid opacity-[0.02] pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1px] h-40 bg-gradient-to-b from-cyan/20 to-transparent opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 md:mb-32 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-cyan/40">Technical Capabilities</span>
              <div className="h-[1px] w-12 bg-cyan/10" />
            </div>
            <h2 className="font-display text-4xl md:text-9xl text-white tracking-tighter leading-none mb-8">
              OUR <br/><span className="text-white/20">SERVICES</span><span className="text-cyan">.</span>
            </h2>
          </div>
          <div className="max-w-sm border-l border-white/5 pl-6 md:pl-8">
            <p className="text-white/20 font-light text-base md:text-lg leading-relaxed mb-6">
              Our systems are engineered for one outcome: **uncontested market leadership.**
            </p>
            <div className="text-[8px] font-mono text-cyan/30 tracking-[0.2em]">SYSTEM_MODE: AGGRESSIVE_GROWTH</div>
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px] md:auto-rows-[300px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              className={`group relative rounded-[2rem] border border-white/5 bg-white/[0.01] p-8 md:p-10 overflow-hidden transition-all duration-700 hover:bg-white/[0.02] hover:border-cyan/20 flex flex-col justify-between gpu-layer ${
                service.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                service.size === 'wide' ? 'md:col-span-2' : ''
              }`}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.98 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: premiumSpring 
                }
              }}
            >
              <div className="absolute top-8 md:top-10 right-8 md:right-10 text-[8px] font-mono text-white/5 group-hover:text-cyan/10 transition-colors">
                {service.code}
              </div>

              <div>
                <h3 className="font-display text-2xl md:text-3xl text-white group-hover:text-cyan transition-colors duration-500 max-w-[200px] leading-none mb-4 md:mb-6">
                  {service.title}
                </h3>
                <p className="text-white/20 font-light leading-relaxed group-hover:text-white/40 transition-colors duration-500 text-[13px] md:text-sm">
                  {service.desc}
                </p>
              </div>

              <div className="flex justify-between items-end">
                <div className="text-[9px] font-bold tracking-widest text-cyan/20 uppercase group-hover:text-cyan transition-colors">
                  {service.stats}
                </div>
                <motion.div 
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/5 flex items-center justify-center text-white/10 group-hover:border-cyan/40 group-hover:text-cyan transition-all"
                  whileHover={{ rotate: -45, scale: 1.1 }}
                >
                  <span className="text-base md:text-lg">→</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
