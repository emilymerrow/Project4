import React from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className={`ui main text container ${styles.container}`}>
      <h1 className={`ui header ${styles.header}`}>Privacy Policy</h1>
      <p>
        Welcome to ChoreBusters' Privacy Policy! We're all about helping you and your kids manage chores and allowances while having a blast. But we also care about your privacy, so let's dive into the serious stuff.
      </p>
      <h2 className={`ui header ${styles.subheader}`}>1. The Top-Secret Information We Collect</h2>
      <p className={styles.text}>
        We know you're a super secret agent, but we still need some basic info to make ChoreBusters work. This includes your name, email address, and a password to protect your ChoreBusters account from evil villains.
      </p>
      <h2 className="ui header">2. How We Use Your Classified Data</h2>
      <p>
        We use your top-secret information to personalize your experience and help you conquer those chores. Don't worry, we won't share your data with Dr. Evil or any other third parties without your permission.
      </p>
      <h2 className="ui header">3. Keeping Your Secrets Safe</h2>
      <p>
        We use high-tech gadgets and gizmos to keep your information locked up tight. Your data is guarded by state-of-the-art security measures, so you can focus on your mission to become the ultimate chore master.
      </p>
      <h2 className="ui header">4. Your Privacy Rights as a Superhero</h2>
      <p>
        As a ChoreBusters superhero, you have the right to access, update, or delete your personal information at any time. Just shoot us an email at support@chorebusters.com, and our trusty sidekicks will help you out.
      </p>
      <h2 className="ui header">5. Changes to This Top-Secret Document</h2>
      <p>
        Sometimes we update our Privacy Policy to keep up with the latest secret agent gadgets. We'll let you know when we make any changes, so you can always stay one step ahead of the game.
      </p>
      <p>
        Thanks for reading our Privacy Policy, super secret ChoreBusters agent! Now get back to busting those chores and earning some awesome allowances!
      </p>
    </div>
  );
}

export default PrivacyPolicy;
