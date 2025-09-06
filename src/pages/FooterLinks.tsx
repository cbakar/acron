'use client'



export default function FooterLinks() {
      return (
            <footer className="bg-white dark:bg-gray-900">
                  <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">

                        <div className="mt-16 flex justify-center gap-x-10">
                              {navigation.social.map((item) => (
                                    <a
                                          key={item.name}
                                          href={item.href}
                                          className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                                    >
                                          <span className="sr-only">{item.name}</span>
                                          <item.icon aria-hidden="true" className="size-6" />
                                    </a>
                              ))}
                        </div>
                        <p className="mt-10 text-center text-sm/6 text-gray-600 dark:text-gray-400">
                              &copy; 2025 Acorn Media, Inc. All rights reserved.
                        </p>
                  </div>
            </footer>
      )
}
