
'use client'
import { motion } from 'framer-motion'

const features = [
      {
            name: 'Local Community Groups',
            description:
                  'Connect with neighbors, join interest-based groups, and participate in local events to strengthen your community ties.',
      },
      {
            name: 'Verified Local Businesses',
            description:
                  'Discover and interact with trusted local businesses, see real reviews, and support your neighborhood economy.',
      },
      {
            name: 'Experience-Based Advertising',
            description:
                  'See ads tailored to your interests and location, focused on real experiences and recommendations from your community.',
      },
      {
            name: 'Community Events & Promotions',
            description:
                  'Stay updated on local happenings, exclusive deals, and special events organized by businesses and community leaders.',
      },
      {
            name: 'Trusted Recommendations',
            description:
                  'Get advice and suggestions from people you know and trust, making every recommendation more meaningful and relevant.',
      },
      {
            name: 'Safe & Private Sharing',
            description:
                  'Share your experiences and stories with confidence, knowing your privacy and safety are always a top priority.',
      },
]

export default function Feature() {
      return (
            <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                              <motion.h2
                                    className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white great-vibes-regular"
                                    initial={{ opacity: 0, y: -40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true, amount: 0.6 }}
                              >
                                    A better way to connect
                              </motion.h2>
                              <motion.p
                                    className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.6 }}
                              >
                                    Acorn Media is more than just a social platform — it's a vibrant community where creativity thrives, connections flourish, and every voice matters. Join us in building a space that celebrates diversity, fosters meaningful interactions, and empowers individuals to share their stories with the world.
                              </motion.p>
                        </div>
                        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                              {features.map((feature, idx) => (
                                    <motion.div
                                          key={feature.name}
                                          initial={{ opacity: 0, y: 30 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                                          viewport={{ once: true, amount: 0.3 }}
                                    >
                                          <dt className="font-semibold text-gray-900 dark:text-white">{feature.name}</dt>
                                          <dd className="mt-1 text-gray-600 dark:text-gray-400">{feature.description}</dd>
                                    </motion.div>
                              ))}
                        </dl>
                  </div>
            </div>
      )
}
