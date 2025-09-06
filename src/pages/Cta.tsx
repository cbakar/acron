import { motion } from 'framer-motion'

export default function Example() {
      return (
            <div className="bg-white dark:bg-gray-900">
                  <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                        <motion.div
                              className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 dark:bg-gray-800 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-0 dark:after:inset-ring dark:after:inset-ring-white/10 dark:after:sm:rounded-3xl"
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.7 }}
                              viewport={{ once: true, amount: 0.5 }}
                        >
                              <motion.h2
                                    className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl"
                                    initial={{ opacity: 0, y: -30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true, amount: 0.7 }}
                              >
                                    Connect Locally. Advertise Authentically.
                              </motion.h2>
                              <motion.p
                                    className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.7 }}
                              >
                                    Join a thriving local community where your voice matters and businesses grow through real experiences and trusted recommendations. Discover, connect, and share in a space built for you.
                              </motion.p>
                              <motion.div
                                    className="mt-10 flex items-center justify-center gap-x-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.4 }}
                                    viewport={{ once: true, amount: 0.7 }}
                              >
                                    <a href="#" className="text-sm/6 font-semibold text-white">
                                          Contact Us
                                          <span aria-hidden="true">→</span>
                                    </a>
                              </motion.div>
                              <svg
                                    viewBox="0 0 1024 1024"
                                    aria-hidden="true"
                                    className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
                              >
                                    <circle r={512} cx={512} cy={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
                                    <defs>
                                          <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                                <stop stopColor="#7775D6" />
                                                <stop offset={1} stopColor="#E935C1" />
                                          </radialGradient>
                                    </defs>
                              </svg>
                        </motion.div>
                  </div>
            </div>
      )
}
