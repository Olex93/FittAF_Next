import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import axios from "axios";


export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("");
  const [email, setEmail] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const resetFields = () => {
    setName("");
    setPhone("");
    setGoal("");
    setEmail("");
  };

  const formSubmission = {
    name: name,
    phone: phone,
    goal: goal,
    email: email,
  };

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://fittaf.herokuapp.com/contact",
        formSubmission,
        axiosConfig
      );
      if (response.data === "success") {
        resetFields();
        setMessageSent(true);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(true);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Fitt AF</title>
        <meta name="description" content="Online personal training delivered by professional fitness coaches." />
      </Head>

      <div className="container-fluid hero-bg  w-100 bg-dred">
        <div className="hero container-fluid ">
          <h1 className="hero-header light">
            Online Personal <br /> Training
          </h1>
          <h2 className="hero-h2 light">PT in your pocket</h2>
          <Link href="/contact">
            <a>
              <button
                type="button"
                name="button"
                className="btn hero-btn light grow"
              >
                Contact Us
              </button>
            </a>
          </Link>
        </div>
      </div>

      <div className="flex-container">
        <div
          className="container-fluid bg-dred mobile-section curved-bottom "
          id="promise-section"
        >
          <div className="promise-wrapper">
            <div>
              <h3 className="light promise-heading">The Fitt AF Promise</h3>
              <p className="light">
                You are here because you want to see change and you want
                results. When you sign up with us you sign up for results.
              </p>
              <p className="light">That&apos;s the bottom line.</p>
              <p className="light">
                We make a commitment to you that we will do what it takes to get
                you the results you want.{" "}
              </p>
              <p className="light">
                This is not a Programme that leaves you to battle your fitness
                goals on your own. With results come daily motivation,
                accountability, training plans, nutrition advice, and personal
                support from both Alex and Frankie.
              </p>
            </div>
          </div>
        </div>

        <div id="proven-results">
          <div className="container-fluid mobile-section bg-light">
            <div>
              <h3 style={{ display: "inline-block" }}>
                Get The Results You Deserve
              </h3>
            </div>
          </div>

          <div className="slider-section bg-light">
            <div
              id="carouselExampleControls"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image
                    className="d-block w-100"
                    src="/images/home/online-fitness-transformation4_JB.png"
                    alt="First slide"
                  />
                  <div className="carousel-caption">
                    <p className="caption-text">
                      “Your simple programme helped me lose 10 kilos building
                      confidence both at the gym and in life. I never expected
                      this to have such an impact on my life – you guys are the
                      best!”
                    </p>
                  </div>
                </div>
                <div className="carousel-item ">
                  <Image
                    className="d-block w-100"
                    src="/images/home/online-fitness-transformation6_j.png"
                    alt="Second slide"
                  />
                  <div className="carousel-caption ">
                    <p className="caption-text">
                      “fitness aside you boys have brought out a new confidence
                      in me and this journey has made me a much more rounded
                      person. Best decision I have made in a long time and I’ll
                      be annoyed if we don’t go for a beer soon!”
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <Image
                    className="d-block w-100"
                    src="images/home/online-fitness-transformation7_e.png"
                    alt="Third slide"
                  />
                  <div className="carousel-caption ">
                    <p className="caption-text">
                      “3 months after my initial transformation, I have
                      continued to train weekly, I understand my nutrition and
                      still enjoy everything, I have taken on new challenges and
                      now more than ever feel stronger and fitter!”
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <Image
                    className="d-block w-100"
                    src="/images/home/online-fitness-transformation3_A.png"
                    alt="Fourth slide"
                  />
                  <div className="carousel-caption">
                    <p className="caption-text">
                      “Frankie and Alex were great at checking in with me and
                      providing new weekly targets to keep me motivated! They
                      were as committed to my goals as I was giving me that
                      extra self-belief”
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <Image
                    className="d-block w-100"
                    src="/images/home/online-fitness-transformation5_L.png"
                    alt="Fourth slide"
                  />
                  <div className="carousel-caption">
                    <p className="caption-text">
                      “The FITT AF community is super kind and helpful. The
                      lives are super motivational and have kept me going
                      through lockdown! Couldn’t recommend them enough❤️”
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev "
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-dred" id="are-you-in">
          <div
            className="container-fluid mobile-section curved-bottom bg-light w-100"
            id="are-you-in"
          >
            <div>
              <h3 className="ruin" style={{ display: "inline-block" }}>
                Are You In?
              </h3>
              <p>
                We are ready if you are. Click I AM READY below and we can get
                started right away
              </p>
              <div className="btn-container">
                <Link href="/start">
                  <a>
                    <button
                      className="btn grow light ruin-btn"
                      type="button"
                      name="button"
                    >
                      I AM READY
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-fluid bg-dred mobile-section curved-bottom "
          id="how-it-works"
        >
          <div className="hiw-wrapper">
            <div>
              <h3 className="light promise-heading">How It Works</h3>
              <p className="light">
                Get personalised training programmes designed for you by Alex
                &amp; Frankie.
              </p>
              <p className="light">
                Track progress, nutrition and programmes via The Fitt AF App.
              </p>
              <p className="light">
                Keep in touch via online chat for questions, guidance and
                motivation.
              </p>
              <p className="light">
                Join the thriving Fitt AF online community and members only
                Facebook group.
              </p>
            </div>
            <div className="btn-container">
              <Link href="/membership-details">
                <a>
                  <button
                    className="btn grow light membership-btn"
                    type="button"
                    name="button"
                  >
                    MEMBERSHIP DETAILS
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-dred" id="your-new-pts">
          <div className="container-fluid mobile-section curved-bottom bg-light">
            <div>
              <h3 className="ruin" style={{ display: "inline-block" }}>
                Your New PTs
              </h3>
              <p>This is more than just a platform to access online content.</p>
              <p>
                Get genuine coaching and personalised training programmes from
                Alex &amp; Frankie.
              </p>
              <p>
                To find out more about your new coaches, click the button below.
              </p>
              <div className="btn-container">
                <Link href="/about-us">
                  <a>
                    <button
                      className="btn grow light membership-btn"
                      type="button"
                      name="button"
                    >
                      ABOUT US
                    </button>
                  </a>
                </Link>
              </div>
            </div>

            <div className="container-fluid trainers ">
              <div className=" row">
                <div className="col">
                  <Image
                    className="your-online-pt frank img-responsive"
                    src="/images/f-and-a/online-pt-frankie.png"
                    alt="Online Fitness Trainer Frankie in action."
                  />
                </div>
                <div className="col right-col">
                  <Image
                    className="your-online-pt alex pull-right img-responsive"
                    src="/images/f-and-a/online-personal-trainer-alex.png"
                    alt="Online Personal Trainer Alex in action."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-dred mobile-section" id="got-a-question">
          <div>
            {messageSent && (
              <>
                <h3 className="light promise-heading">
                  Your message has been sent
                </h3>
                <p className="light">
                  Thanks for reaching out, we can&apos;t wait to find out how we can
                  help. We&apos;ll be in touch soon!
                </p>
              </>
            )}
            {errorMessage && (
              <>
                <h3 className="light promise-heading">Uh oh</h3>
                <p className="light">
                  We&apos;ve had a bit of a technical issue. Please contact us
                  directly on{" "}
                  <a href="mailto:Fittafmail@gmail.com">Fittafmail@gmail.com</a>
                  .
                </p>
              </>
            )}
            {!messageSent && !errorMessage && (
              <>
                <h3 className="light promise-heading">Got A Question?</h3>
                <div className="form-container">
                  <form className="contact-form">
                    <label className=" light" htmlFor="name">
                      Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label className="light" htmlFor="email">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="light" htmlFor="contactNumber">
                      Contact Number*
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <label className="light" htmlFor="question">
                      Your Question
                    </label>
                    <textarea
                      name="question"
                      rows="4"
                      cols="80"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                    ></textarea>
                    <button
                      type="submit"
                      name="button"
                      className="light grow btn"
                      onClick={(e) => sendMessage(e)}
                    >
                      SEND
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
