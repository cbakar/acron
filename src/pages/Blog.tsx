import { motion } from 'framer-motion'

const posts = [
      {
            id: 1,
            title: 'How Local Communities Thrive Online',
            href: '#',
            description:
                  'Discover how digital platforms like Acorn Media are helping neighbors connect, share stories, and support each other in meaningful ways.',
            imageUrl:
                  'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&auto=format&fit=crop&w=3603&q=80',
            date: 'Sep 1, 2025',
            datetime: '2025-09-01',
            category: { title: 'Community', href: '#' },
            author: {
                  name: 'Michael Foster',
                  role: 'Community Writer',
                  href: '#',
                  imageUrl:
                        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
      },
      {
            id: 2,
            title: 'The Power of Experience-Based Advertising',
            href: '#',
            description: 'Learn why authentic, experience-driven ads resonate more with local audiences and how businesses can benefit.',
            imageUrl:
                  'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&auto=format&fit=crop&w=3270&q=80',
            date: 'Aug 24, 2025',
            datetime: '2025-08-24',
            category: { title: 'Advertising', href: '#' },
            author: {
                  name: 'Lindsay Walton',
                  role: 'Marketing Specialist',
                  href: '#',
                  imageUrl:
                        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
      },
      {
            id: 3,
            title: 'Building Trust Through Local Recommendations',
            href: '#',
            description:
                  'Explore how trusted recommendations from real people are changing the way we discover businesses and events in our area.',
            imageUrl:
                  'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&auto=format&fit=crop&w=3270&q=80',
            date: 'Aug 10, 2025',
            datetime: '2025-08-10',
            category: { title: 'Trust', href: '#' },
            author: {
                  name: 'Tom Cook',
                  role: 'Local Contributor',
                  href: '#',
                  imageUrl:
                        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
      },
]

export default function Blog() {
      return (
            <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                              <motion.h2
                                    className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white"
                                    initial={{ opacity: 0, y: -40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true, amount: 0.6 }}
                              >
                                    Insights from our local community
                              </motion.h2>
                              <motion.p
                                    className="mt-2 text-lg/8 text-gray-600 dark:text-gray-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.6 }}
                              >
                                    Stories, tips, and inspiration for connecting, advertising, and thriving together.
                              </motion.p>
                        </div>
                        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                              {posts.map((post, idx) => (
                                    <motion.article
                                          key={post.id}
                                          className="flex flex-col items-start justify-between"
                                          initial={{ opacity: 0, y: 30 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.6, delay: 0.3 + idx * 0.15 }}
                                          viewport={{ once: true, amount: 0.3 }}
                                    >
                                          <div className="relative w-full">
                                                <img
                                                      alt=""
                                                      src={post.imageUrl}
                                                      className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2 dark:bg-gray-800"
                                                />
                                                <div className="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10 dark:inset-ring-white/10" />
                                          </div>
                                          <div className="flex max-w-xl grow flex-col justify-between">
                                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                                      <time dateTime={post.datetime} className="text-gray-500 dark:text-gray-400">
                                                            {post.date}
                                                      </time>
                                                      <a
                                                            href={post.category.href}
                                                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800"
                                                      >
                                                            {post.category.title}
                                                      </a>
                                                </div>
                                                <div className="group relative grow">
                                                      <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
                                                            <a href={post.href}>
                                                                  <span className="absolute inset-0" />
                                                                  {post.title}
                                                            </a>
                                                      </h3>
                                                      <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-400">{post.description}</p>
                                                </div>
                                                <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                                                      <img
                                                            alt=""
                                                            src={post.author.imageUrl}
                                                            className="size-10 rounded-full bg-gray-100 dark:bg-gray-800"
                                                      />
                                                      <div className="text-sm/6">
                                                            <p className="font-semibold text-gray-900 dark:text-white">
                                                                  <a href={post.author.href}>
                                                                        <span className="absolute inset-0" />
                                                                        {post.author.name}
                                                                  </a>
                                                            </p>
                                                            <p className="text-gray-600 dark:text-gray-400">{post.author.role}</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </motion.article>
                              ))}
                        </div>
                  </div>
            </div>
      )
}
