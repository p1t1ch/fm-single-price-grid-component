import React from 'react'

function Grid() {
  return (
    <article className="grid grid-cols-2 max-w-lg bg-neutral shadow-grid rounded-lg overflow-hidden">
      <section className="col-span-full p-6 sm:p-10">
        <h1 className="text-2xl font-bold text-primary mb-4">Join our community</h1>
        <div className="text-lg font-bold text-primary-light mb-3">30-day, hassle-free money back guarantee</div>
        <p>
          Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who
          are serious about honing their skills.
        </p>
      </section>
      <section className="p-6 sm:p-10 bg-primary text-neutral">
        <h2 className="font-bold text-lg mb-4">Monthly Subscription</h2>
        <div className="mb-1">
          <span className="font-bold text-3xl align-middle mr-2">$29</span>&nbsp;
          <span className="text-neutral text-opacity-50">per month</span>
        </div>
        <div className="mb-6">Full access for less than $1 a day</div>
        <button className="h-12 w-full bg-primary-light hover:bg-primary-hover transition-colors shadow-button rounded-button">
          Sign Up
        </button>
      </section>
      <section className="p-6 sm:p-10 bg-primary text-neutral opacity-85">
        <h2 className="font-bold text-lg mb-4">Why Us</h2>
        <ul className="text-sm text-neutral text-opacity-75">
          <li>Tutorials by industry experts</li>
          <li>Peer & expert code review</li>
          <li>Coding exercises</li>
          <li>Access to our GitHub repos</li>
          <li>Community forum</li>
          <li>Flashcard decks</li>
          <li>New videos every week</li>
        </ul>
      </section>
    </article>
  )
}

export default Grid
