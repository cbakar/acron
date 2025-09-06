import { motion } from 'framer-motion'

const featuredTestimonial = {
      body: 'Acorn Media helped my small business connect with real people in my neighborhood. The community support and authentic recommendations made a huge difference for us!',
      author: {
            name: 'Sarah Kim',
            handle: 'sarahk',
            imageUrl:
                  'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            logoUrl: 'https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg',
      },
}
const testimonials = [
      [
            [
                  {
                        body: 'I found my favorite local café through Acorn Media. The recommendations are genuine and the community is so welcoming!',
                        author: {
                              name: 'Leslie Alexander',
                              handle: 'lesliealexander',
                              imageUrl:
                                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                        },
                  },
                  {
                        body: 'Advertising on Acorn Media feels personal and effective. My event had more local attendees than ever before.',
                        author: {
                              name: 'Michael Foster',
                              handle: 'michaelfoster',
                              imageUrl:
                                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                        },
                  },
                  {
                        body: 'It’s refreshing to be part of a platform where local voices are heard and valued. I’ve made real connections here.',
                        author: {
                              name: 'Dries Vincent',
                              handle: 'driesvincent',
                              imageUrl:
                                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                        },
                  },
            ],
            [
                  {
                        body: 'Acorn Media’s community events section keeps me in the loop with what’s happening around me. I love it!',
                        author: {
                              name: 'Lindsay Walton',
                              handle: 'lindsaywalton',
                              imageUrl:
                                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                        },
                  },
                  {
                        body: 'I trust the recommendations I see on Acorn Media because they come from real people in my area.',
                        author: {
                              name: 'Courtney Henry',
                              handle: 'courtneyhenry',
                              imageUrl:
                                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                        },
                  },
            ],
      ],
      [
            [
                  {
                        body: 'As a business owner, I appreciate how easy it is to reach my local audience with meaningful ads.',
                        author: {
                              name: 'Tom Cook',
                              handle: 'tomcook',
                              imageUrl:
                                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                        },
                  },
                  {
                        body: 'The platform is safe, friendly, and truly focused on building community. Highly recommended!',
                        author: {
                              name: 'Whitney Francis',
                              handle: 'whitneyfrancis',
                              imageUrl:
                                    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                        },
                  },
            ],
            [
                  {
                        body: 'I’ve discovered so many local gems thanks to Acorn Media’s trusted recommendations.',
                        author: {
                              name: 'Leonard Krasner',
                              handle: 'leonardkrasner',
                              imageUrl:
                                    'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                        },
                  },
                  {
                        body: 'Acorn Media makes it easy to share my experiences and connect with others who care about our community.',
                        author: {
                              name: 'Floyd Miles',
                              handle: 'floydmiles',
                              imageUrl:
                                    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                        },
                  },
                  {
                        body: 'There’s nothing else like Acorn Media for connecting with my neighbors and supporting local businesses.',
                        author: {
                              name: 'Emily Selman',
                              handle: 'emilyselman',
                              imageUrl:
                                    'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                        },
                  },
            ],
      ],
]

function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
}

export default function Testimonials() {
      return (
            <div className="relative isolate bg-white pt-24 pb-32 sm:pt-32 dark:bg-gray-900">
                  <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
                  >
                        <div
                              style={{
                                    clipPath:
                                          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                              }}
                              className="ml-[max(50%,38rem)] aspect-1313/771 w-328.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc]"
                        />
                  </div>
                  <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
                  >
                        <div
                              style={{
                                    clipPath:
                                          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                              }}
                              className="-ml-88 aspect-1313/771 w-328.25 flex-none origin-top-right rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] xl:mr-[calc(50%-12rem)] xl:ml-0"
                        />
                  </div>
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                              <motion.h2
                                    className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400"
                                    initial={{ opacity: 0, y: -30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true, amount: 0.6 }}
                              >
                                    Testimonials
                              </motion.h2>
                              <motion.p
                                    className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.6 }}
                              >
                                    Real stories from our local community
                              </motion.p>
                        </div>
                        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4 dark:text-gray-100">
                              <motion.figure
                                    className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1 dark:bg-gray-800/75 dark:shadow-none dark:ring-white/10"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.3 }}
                                    viewport={{ once: true, amount: 0.4 }}
                              >
                                    <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8 dark:text-white">
                                          <p>{`“${featuredTestimonial.body}”`}</p>
                                    </blockquote>
                                    <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap dark:border-white/10">
                                          <img
                                                alt=""
                                                src={featuredTestimonial.author.imageUrl}
                                                className="size-10 flex-none rounded-full bg-gray-50 dark:bg-gray-700"
                                          />
                                          <div className="flex-auto">
                                                <div className="font-semibold text-gray-900 dark:text-white">{featuredTestimonial.author.name}</div>
                                                <div className="text-gray-600 dark:text-gray-400">{`@${featuredTestimonial.author.handle}`}</div>
                                          </div>
                                          <img alt="" src={featuredTestimonial.author.logoUrl} className="h-10 w-auto flex-none dark:hidden" />
                                          <img
                                                alt=""
                                                src={featuredTestimonial.author.logoUrl.replace('-gray-900', '-gray-100')}
                                                className="h-10 w-auto flex-none not-dark:hidden"
                                          />
                                    </figcaption>
                              </motion.figure>
                              {testimonials.map((columnGroup, columnGroupIdx) => (
                                    <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                                          {columnGroup.map((column, columnIdx) => (
                                                <div
                                                      key={columnIdx}
                                                      className={classNames(
                                                            (columnGroupIdx === 0 && columnIdx === 0) ||
                                                                  (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                                                                  ? 'xl:row-span-2'
                                                                  : 'xl:row-start-1',
                                                            'space-y-8',
                                                      )}
                                                >
                                                      {column.map((testimonial, idx2) => (
                                                            <motion.figure
                                                                  key={testimonial.author.handle}
                                                                  className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800/75 dark:shadow-none dark:ring-white/10"
                                                                  initial={{ opacity: 0, y: 30 }}
                                                                  whileInView={{ opacity: 1, y: 0 }}
                                                                  transition={{ duration: 0.6, delay: 0.5 + idx2 * 0.1 }}
                                                                  viewport={{ once: true, amount: 0.3 }}
                                                            >
                                                                  <blockquote className="text-gray-900 dark:text-white">
                                                                        <p>{`“${testimonial.body}”`}</p>
                                                                  </blockquote>
                                                                  <figcaption className="mt-6 flex items-center gap-x-4">
                                                                        <img
                                                                              alt=""
                                                                              src={testimonial.author.imageUrl}
                                                                              className="size-10 rounded-full bg-gray-50 dark:bg-gray-700"
                                                                        />
                                                                        <div>
                                                                              <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author.name}</div>
                                                                              <div className="text-gray-600 dark:text-gray-400">{`@${testimonial.author.handle}`}</div>
                                                                        </div>
                                                                  </figcaption>
                                                            </motion.figure>
                                                      ))}
                                                </div>
                                          ))}
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      )
}
