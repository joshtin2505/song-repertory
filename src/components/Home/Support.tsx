import { FaPhone, FaRegEnvelope } from 'react-icons/fa6'
import './Support.css'

function Support() {
  return (
    <section
      id="support"
      className="dark:bg-neutral-950 border-t dark:border-t-white/50"
    >
      <div className="bg-[url(/images/laptop-human.jpg)] bg-no-repeat bg-cover bg-center bg-neutral-900 bg-opacity-70 bg-blend-multiply">
        <div className="lg:pb-80 lg:pt-24 lg:px-6 text-center pb-72 pt-8 px-4 max-w-screen-sm mx-auto">
          <h2 className="tracking-tight font-bold text-4xl mb-4">Contact Us</h2>
          <p className="text-xl font-light text-neutral-100/80 mb-16">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
      </div>
      <div className="lg:px-6 sm:py-24 py-16 px-4 max-w-7xl -mt-96 mx-auto">
        <form
          action="#"
          className="bg-white dark:bg-neutral-800 lg:mb-28 grid sm:grid-cols-2 shadow p-6 border border-neutral-100 dark:border-neutral-600 rounded-lg gap-8 max-w-3xl mb-16 mx-auto"
        >
          <div>
            <label htmlFor="first-name" className="support-label">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="support-top-input"
              placeholder="Bonnie"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="support-label">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="support-top-input"
              placeholder="Green"
            />
          </div>
          <div>
            <label htmlFor="email" className="support-label">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="support-top-input"
              placeholder="name@flowbite.com"
            />
          </div>
          <div>
            <label htmlFor="phone-number" className="support-label">
              Phone Number
            </label>
            <input
              min={1000000000}
              max={9999999999}
              type="number"
              id="phone-number"
              className="support-top-input"
              placeholder="+12 345 6789"
            />
          </div>
          <div className=" sm:col-span-2">
            <label htmlFor="message" className="support-label">
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-[.625rem] w-full text-sm text-neutral-900 bg-neutral-300 rounded-lg shadow border border-neutral-100 focus:ring-neutral-500 focus:border-neutral-500 dark:bg-neutral-600 dark:border-neutral-500 dark:text-neutral-200 dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
              placeholder="Leave a comment..."
            ></textarea>
            <p className="mt-4 text-sm text-neutral-500 font-normal">
              By submitting this form you agree to our{' '}
              <a
                href="#"
                className="text-neutral-600 underline transition-colors hover:dark:text-white dark:text-neutral-500"
              >
                terms and conditions
              </a>{' '}
              and our{' '}
              <a
                href="#"
                className="text-neutral-600 underline transition-colors hover:dark:text-white dark:text-neutral-500"
              >
                privacy policy
              </a>{' '}
              which explains how we may collect, use and disclose your personal
              information including to third parties.
            </p>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-neutral-500 sm:w-fit hover:bg-neutral-800  outline-none focus:ring-neutral-300 dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800"
          >
            Send message
          </button>
        </form>
        <div className="max-md:space-y-8 text-center grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 space-y0">
          <div>
            <div className="support-icon-footer-container">
              <FaRegEnvelope className="w-5 h-5 fill-neutral-900 lg:w-8 lg:h-8 dark:fill-neutral-500" />
            </div>
            <p className="mb-2 text-xl font-bold">Email us:</p>
            <p className="mb-3 text-neutral-600 dark:text-neutral-400">
              Email us for general queries, including marketing and partnership
              opportunities.
            </p>
            <a
              href="mailto:abc@example.com"
              className="font-semibold text-neutral-600 dark:text-neutral-500 underline transition-colors hover:dark:text-white"
            >
              hello@songrepertory.com
            </a>
          </div>
          <div>
            <div className="support-icon-footer-container">
              <FaPhone className="w-5 h-5 fill-neutral-900 lg:w-8 lg:h-8 dark:fill-neutral-500" />
            </div>
            <p className="mb-2 text-xl font-bold">Call us:</p>
            <p className="mb-3 text-neutral-600 dark:text-neutral-400">
              Call us to speak to a member of our team. We are always happy to
              help.
            </p>
            <span className="font-semibold text-neutral-600 dark:text-neutral-500">
              +1 (234) 567-8910
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Support
