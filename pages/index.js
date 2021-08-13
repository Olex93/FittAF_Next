import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Fitt AF</title>
        <Navbar />
      </Head>

      <div class="container-fluid hero-bg  w-100 bg-dred">
        <div class="hero container-fluid ">
          <h1 class="hero-header light">
            Online Personal <br /> Training
          </h1>
          <h2 class="hero-h2 light">PT in your pocket</h2>
          <a href="/contact">
            <button type="button" name="button" class="btn hero-btn light grow">
              Contact Us
            </button>
          </a>
        </div>
      </div>

      <div class="flex-container">
        <div
          class="container-fluid bg-dred mobile-section curved-bottom "
          id="promise-section"
        >
          <div class="promise-wrapper">
            <div>
              <h3 class="light promise-heading">The Fitt AF Promise</h3>
              <p class="light">
                You are here because you want to see change and you want
                results. When you sign up with us you sign up for results.
              </p>
              <p class="light">That's the bottom line.</p>
              <p class="light">
                We make a commitment to you that we will do what it takes to get
                you the results you want.{" "}
              </p>
              <p class="light">
                This is not a Programme that leaves you to battle your fitness
                goals on your own. With results come daily motivation,
                accountability, training plans, nutrition advice, and personal
                support from both Alex and Frankie.
              </p>
            </div>
          </div>
        </div>

        <div id="proven-results">
          <div class="container-fluid mobile-section bg-light">
            <div>
              <h3 style={{display:'inline-block'}}>Get The Results You Deserve</h3>
            </div>
          </div>

          <div class="slider-section bg-light">
            <div
              id="carouselExampleControls"
              class="carousel slide carousel-fade pointer-event"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active carousel-item-left">
                  <img
                    class="d-block w-100"
                    src="/images/home/online-fitness-transformation4_JB.png"
                    alt="First slide"
                  />
                  <div class="carousel-caption">
                    <p class="caption-text">
                      “Your simple programme helped me lose 10 kilos building
                      confidence both at the gym and in life. I never expected
                      this to have such an impact on my life – you guys are the
                      best!”
                    </p>
                  </div>
                </div>
                <div class="carousel-item carousel-item-next carousel-item-left">
                  <img
                    class="d-block w-100"
                    src="/images/home/online-fitness-transformation6_j.png"
                    alt="Second slide"
                  />
                  <div class="carousel-caption ">
                    <p class="caption-text">
                      “fitness aside you boys have brought out a new confidence
                      in me and this journey has made me a much more rounded
                      person. Best decision I have made in a long time and I’ll
                      be annoyed if we don’t go for a beer soon!”
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="images/home/online-fitness-transformation7_e.png"
                    alt="Third slide"
                  />
                  <div class="carousel-caption ">
                    <p class="caption-text">
                      “3 months after my initial transformation, I have
                      continued to train weekly, I understand my nutrition and
                      still enjoy everything, I have taken on new challenges and
                      now more than ever feel stronger and fitter!”
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="/images/home/online-fitness-transformation3_A.png"
                    alt="Fourth slide"
                  />
                  <div class="carousel-caption">
                    <p class="caption-text">
                      “Frankie and Alex were great at checking in with me and
                      providing new weekly targets to keep me motivated! They
                      were as committed to my goals as I was giving me that
                      extra self-belief”
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="/images/home/online-fitness-transformation5_L.png"
                    alt="Fourth slide"
                  />
                  <div class="carousel-caption">
                    <p class="caption-text">
                      “The FITT AF community is super kind and helpful. The
                      lives are super motivational and have kept me going
                      through lockdown! Couldn’t recommend them enough❤️”
                    </p>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev "
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>

        <div class="bg-dred" id="are-you-in">
          <div
            class="container-fluid mobile-section curved-bottom bg-light w-100"
            id="are-you-in"
          >
            <div>
              <h3 class="ruin" style={{display:'inline-block'}}>
                Are You In?
              </h3>
              <p>
                We are ready if you are. Click I AM READY below and we can get
                started right away
              </p>
              <div class="btn-container">
                <a href="/start">
                  <button
                    class="btn grow light ruin-btn"
                    type="button"
                    name="button"
                  >
                    I AM READY
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="container-fluid bg-dred mobile-section curved-bottom "
          id="how-it-works"
        >
          <div class="hiw-wrapper">
            <div>
              <h3 class="light promise-heading">How It Works</h3>
              <p class="light">
                Get personalised training programmes designed for you by Alex
                &amp; Frankie.
              </p>
              <p class="light">
                Track progress, nutrition and programmes via The Fitt AF App.
              </p>
              <p class="light">
                Keep in touch via online chat for questions, guidance and
                motivation.
              </p>
              <p class="light">
                Join the thriving Fitt AF online community and members only
                Facebook group.
              </p>
            </div>
            <div class="btn-container">
              <a href="/membership-details">
                <button
                  class="btn grow light membership-btn"
                  type="button"
                  name="button"
                >
                  MEMBERSHIP DETAILS
                </button>
              </a>
            </div>
          </div>
        </div>

        <div class="bg-dred" id="your-new-pts">
          <div class="container-fluid mobile-section curved-bottom bg-light">
            <div>
              <h3 class="ruin" style={{display:'inline-block'}}>
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
              <div class="btn-container">
                <a href="/about-us">
                  <button
                    class="btn grow light membership-btn"
                    type="button"
                    name="button"
                  >
                    ABOUT US
                  </button>
                </a>
              </div>
            </div>

            <div class="container-fluid trainers ">
              <div class=" row">
                <div class="col">
                  <img
                    class="your-online-pt frank img-responsive"
                    src="/images/f-and-a/online-pt-frankie.png"
                    alt="Online Fitness Trainer Frankie in action."
                  />
                </div>
                <div class="col right-col">
                  <img
                    class="your-online-pt alex pull-right img-responsive"
                    src="/images/f-and-a/online-personal-trainer-alex.png"
                    alt="Online Personal Trainer Alex in action."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="container-fluid bg-dred mobile-section" id="got-a-question">
          <div>
            <h3 class="light promise-heading">Got A Question?</h3>
            <div class="form-container">
              <form class="contact-form" action="/" method="post">
                <label class=" light" for="name">
                  Name*
                </label>
                <input type="text" name="name" required />
                <label class="light" for="email">
                  Email*
                </label>
                <input type="email" name="email" required />
                <label class="light" for="contactNumber">
                  Contact Number*
                </label>
                <input type="tel" name="contactNumber" required />
                <label class="light" for="question">
                  Your Question
                </label>
                <textarea name="question" rows="4" cols="80"></textarea>
                <button type="submit" name="button" class="light grow btn">
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
