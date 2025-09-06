

import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
      const [form, setForm] = useState({
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            country: 'US',
            phone: '',
            message: '',
      });
      const [loading, setLoading] = useState(false);
      const [success, setSuccess] = useState(false);
      const [error, setError] = useState('');

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            const { name, value, type } = e.target;
            if (type === 'checkbox') {
                  setForm((prev) => ({
                        ...prev,
                        [name]: (e.target as HTMLInputElement).checked,
                  }));
            } else {
                  setForm((prev) => ({
                        ...prev,
                        [name]: value,
                  }));
            }
      };

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setLoading(true);
            setError('');
            setSuccess(false);
            try {
                  const res = await fetch('/api/sendEmail', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                              firstName: form.firstName,
                              lastName: form.lastName,
                              company: form.company,
                              email: form.email,
                              phone: form.phone,
                              message: form.message,
                        }),
                  });
                  let data = null;
                  const text = await res.text();
                  try {
                        data = text ? JSON.parse(text) : null;
                  } catch (e) {
                        // ignore JSON parse error
                  }
                  if (!res.ok) {
                        throw new Error((data && data.error) || 'Failed to send message');
                  }
                  setSuccess(true);
                  setForm({
                        firstName: '',
                        lastName: '',
                        company: '',
                        email: '',
                        country: 'US',
                        phone: '',
                        message: '',
                  });
            } catch (err: any) {
                  setError(err.message || 'Something went wrong');
            } finally {
                  setLoading(false);
            }
      };

      return (
            <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
                  <div
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                  >
                        <div
                              style={{
                                    clipPath:
                                          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                              }}
                              className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75 dark:opacity-20"
                        />
                  </div>
                  <div className="mx-auto max-w-2xl text-center">
                        <motion.h2
                              className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white"
                              initial={{ opacity: 0, y: -30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.7 }}
                              viewport={{ once: true, amount: 0.7 }}
                        >
                              Get in Touch with Acorn Media
                        </motion.h2>
                        <motion.p
                              className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.7, delay: 0.2 }}
                              viewport={{ once: true, amount: 0.7 }}
                        >
                              Have questions about joining our local community or advertising your business? Reach out and we’ll be happy to help!
                        </motion.p>
                  </div>
                  <motion.form
                        onSubmit={handleSubmit}
                        className="mx-auto mt-16 max-w-xl sm:mt-20"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.4 }}
                  >
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                              <div>
                                    <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                                          First name
                                    </label>
                                    <div className="mt-2.5">
                                          <input
                                                id="first-name"
                                                name="firstName"
                                                type="text"
                                                autoComplete="given-name"
                                                value={form.firstName}
                                                onChange={handleChange}
                                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                          />
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                                          Last name
                                    </label>
                                    <div className="mt-2.5">
                                          <input
                                                id="last-name"
                                                name="lastName"
                                                type="text"
                                                autoComplete="family-name"
                                                value={form.lastName}
                                                onChange={handleChange}
                                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                          />
                                    </div>
                              </div>
                              <div className="sm:col-span-2">
                                    <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                                          Company
                                    </label>
                                    <div className="mt-2.5">
                                          <input
                                                id="company"
                                                name="company"
                                                type="text"
                                                autoComplete="organization"
                                                value={form.company}
                                                onChange={handleChange}
                                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                          />
                                    </div>
                              </div>
                              <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                                          Email
                                    </label>
                                    <div className="mt-2.5">
                                          <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                          />
                                    </div>
                              </div>
                              <div className="sm:col-span-2">
                                    <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                                          Phone number
                                    </label>
                                    <div className="mt-2.5">
                                          <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 dark:bg-white/5 dark:outline-white/10 dark:has-[input:focus-within]:outline-indigo-500">
                                                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                                      <select
                                                            id="country"
                                                            name="country"
                                                            autoComplete="country"
                                                            aria-label="Country"
                                                            value={form.country}
                                                            onChange={handleChange}
                                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-transparent dark:text-gray-400 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                                      >
                                                            <option value="US">US</option>
                                                            <option value="CA">CA</option>
                                                            <option value="EU">EU</option>
                                                      </select>
                                                      <ChevronDownIcon
                                                            aria-hidden="true"
                                                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400"
                                                      />
                                                </div>
                                                <input
                                                      id="phone-number"
                                                      name="phone"
                                                      type="text"
                                                      placeholder="123-456-7890"
                                                      value={form.phone}
                                                      onChange={handleChange}
                                                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
                                                />
                                          </div>
                                    </div>
                              </div>
                              <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                                          Message
                                    </label>
                                    <div className="mt-2.5">
                                          <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                value={form.message}
                                                onChange={handleChange}
                                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                          />
                                    </div>
                              </div>
                        </div>
                        <div className="mt-10">
                              <button
                                    type="submit"
                                    disabled={loading}
                                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 disabled:opacity-60"
                              >
                                    {loading ? 'Sending...' : 'Send Message'}
                              </button>
                              {success && (
                                    <p className="mt-4 text-green-600 dark:text-green-400 text-center">Message sent successfully!</p>
                              )}
                              {error && (
                                    <p className="mt-4 text-red-600 dark:text-red-400 text-center">{error}</p>
                              )}
                        </div>
                  </motion.form>
            </div>
      )
}
