import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function MembershipDetails() {
  return (
    <>
      <Head>
        <title>Fitt AF - Membership Details</title>
        <meta
          name="description"
          content="Find out more about a Fitt AF membership"
        />
      </Head>
      <div className="signupBg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 ">
              <h1 className="signupHeading">Membership Details</h1>
              <p>
                Purchase a membership with Fitt AF to receive an online personal
                training service that includes:
              </p>
              <ul>
                <li>
                  Initial phone consultation with Frankie or Alex to understand
                  your goals.
                </li>
                <li>
                  Personal training & nutrition plans created uniquely for you.
                </li>
                <li>Regular check-ins with your personal trainer.</li>
                <li>
                  Access to the Fitt AF app, which allows you to track workouts,
                  nutrition, programs and more.
                </li>
                <li>
                  Live workout advice and motivation through our app&apos;s chat
                  function.
                </li>
                <li>
                  Access to online video content including excersise
                  demonstrations and other fitness related content.
                </li>
                <li>
                  Become a part of the private members Fit AF facebook community
                  to find likeminded people.
                </li>
              </ul>
              <Link href="/start">
                <a>
                  <button
                    className="btn grow light"
                    type="button"
                    name="button"
                  >
                    Buy Membership
                  </button>
                </a>
              </Link>
            </div>

            <div className="col-md-6 my-auto imgDiv">
              <Image
                src="/images/home/app-icons.png"
                className="graphic"
                alt="Graphic showing the online personal traininers as well as some features of the fitness app."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
