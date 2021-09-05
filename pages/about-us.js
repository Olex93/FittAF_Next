import React from "react";
import Head from "next/head";

export default function AboutUs() {
  const [frankieButton, setFrankieButton] = React.useState('active')
  const [alexButton, setAlexButton] = React.useState('grow')

  const changeActiveState = () => {
    if (frankieButton === 'active') {
      setFrankieButton('grow')
      setAlexButton('active')
    } else if (frankieButton === 'grow') {
      setFrankieButton('active')
      setAlexButton('grow')
    } 
  }

  return (
    <>
      <Head>
        <title>Fitt AF - About us</title>
        <meta name="description" content="Get to know the Fitt AF coaches" />
      </Head>
      <div className="signupBg">
        <h1 className="signupHeading">Your New PTs</h1>

        <ul className="nav nav-pills">
          <li onClick={changeActiveState} className={'btn ' + frankieButton} id="frankie-btn">
            <a data-toggle="pill" href="#frankie" className="meet">
              Meet Frankie
            </a>
          </li>
          <li onClick={changeActiveState} className={'btn ' + alexButton} id="alex-btn">
            <a data-toggle="pill" href="#alex" className="meet">
              Meet Alex
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div id="frankie" className="tab-pane active">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 ">
                  <img
                    className="curved-bottom bottom-shadow us"
                    src="/images/f-and-a/frankie-training-outdoors.jpg"
                    alt="Image of online personal trainer Frankie excersising outside."
                  />
                </div>
                <div className="col-lg-6 scrollable">
                  <div className="about-content">
                    <p> I’m Frankie and I am one half of the Fitt AF team</p>
                    <p>
                      I grew up in Cheltenham and met this crazy Cypriot guy in
                      the first year of primary school.
                    </p>
                    <p>
                      Alex was still learning English, the teacher introduced us
                      over a game of football and the rest is history… but more
                      about that later.
                    </p>
                    <p>
                      Growing up I put a lot of my time into playing sports and
                      spent the first part of my career playing rugby whilst
                      Alex got stuck straight into personal training. I played
                      with some great people and trained under some of the best
                      coaches and nutritionists. I think you’d be surprised by
                      the variety this involved. Let’s just say I was doing yoga
                      before it was cool.
                    </p>
                    <p>
                      I could tell you about ‘how I would have been pro if it
                      wasn’t for my injury’ but instead let’s move onto the
                      hours I spent managing and coaching in a family ran gym.
                    </p>
                    <p>
                      My focus shifted from being an athlete to bringing out the
                      best in others, more likely over a beer than a bleep test.
                      I learnt a lot about myself playing high level sport but
                      learnt twice as much about my clients through coaching.
                    </p>
                    <p>
                      As an ex rugby player, lover of sunshine, and someone
                      partial to a corona (the good kind) I am a normal guy like
                      you, just with an abnormal passion to help people take
                      control of their fitness and confidence. I have got pretty
                      damn good at bringing out the best in people.{" "}
                    </p>
                    <p>
                      So what about the crazy Cypriot guy? Well through years of
                      workouts, nights out together, and sharing ideas we now
                      form the FITT AF online coaching team.
                    </p>
                    <p>
                      When you become a client of ours you are not doing a
                      fitness plan, you are joining a lifetime of friendship,
                      education, and personal coaching that I am 100% confident
                      in.
                    </p>
                  </div>
                  <a href="/membership-details" className="inline-btn">
                    <button className="btn grow light" type="button">
                      MEMBERSHIP DETAILS
                    </button>
                  </a>
                  <a href="/contact" className="inline-btn">
                    <button type="button" className="btn light grow">
                      Contact Us
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="alex" className="tab-pane fade">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <img
                    className="bottom-shadow curved-bottom us"
                    src="/images/f-and-a/alex-coaching-in-gym.jpg"
                    alt="Image of online fitness coach Alex coaching in a gym."
                  />
                </div>
                <div className="col-lg-6 scrollable">
                  <div className="about-content">
                    <p>Half Cypriot, half English and entirely FITT AF.</p>
                    <p>
                      Hey, I’m Alex, an enthusiastic and caring coach who has a
                      passion for changing peoples lives. I’ve learned over
                      years of professional PT that the best way to help clients
                      achieve the results they deserve isn’t just about exercise
                      education. My focus is on working with people to help them
                      feel confident, motivated and ready to make real progress
                      - both in and out of the gym.
                    </p>
                    <p>Where did it begin? </p>
                    <p>
                      Living in Cyprus for 9 years with little English to my
                      name, my parents made a decision to move to England.
                      Scared, excited, going into the unknown, who knew what was
                      on the other side for me. On my first day at school, the
                      teacher dug deep and found out my interest. Football,
                      football and football. I know just the person you will get
                      on with, she said.
                    </p>
                    <p>
                      The first person I got introduced to was Frankie (the
                      other half of FITT AF). Mad keen on sports and very
                      competitive. We got on like a house on fire from day 1.
                    </p>
                    <p>
                      My relationship with fitness began from a very young age
                      too. Throughout school, I was swimming competitively 7x a
                      week and playing football twice a week for my local team.
                      Some people might think this is a lot for a kid, but the
                      truth is I loved it. During a period where learning a new
                      language was often frustrating, sports were the one area
                      where my hard work really paid off. Fitness helped me make
                      friendships, stay positive and believe in myself.
                    </p>
                    <p>
                      From there on out I just kept on going. Under 16’s gym
                      club at the age of 13, you couldn’t keep me away from any
                      form of exercise, even if it was sprinting at Frankie with
                      huge Swiss balls and being told to cool down for 5 mins
                      most sessions.
                    </p>
                    <p>
                      I started to train properly from the age of 16 and being
                      very passionate I picked up things very fast. On a
                      personal level, this led me to competing in bodybuilding.
                      This was an experience I learned a lot from. But the
                      biggest takeaway for me was a shift in focus.{" "}
                    </p>
                    <p>
                      I wasn’t interested in eating chicken and broccoli and
                      training for hours upon hours every day. Fitness had
                      already helped me achieve so much by this point, including
                      a happy and healthy life. Now I wanted to help other
                      people to do the same.{" "}
                    </p>
                    <p>
                      What started out with helping friends and family with
                      workout plans and nutrition advice developed into a
                      profession. After studying a course in personal training,
                      I picked up my first job as an instructor and learned so
                      much. Not about fitness, but about working with others.
                    </p>
                    <p>
                      I quickly realised that you can give someone the best plan
                      in the world, but if they can’t apply it then it’s
                      useless. Learning that every client is different and they
                      all require different things was so key.{" "}
                    </p>
                    <p>
                      Thriving in a small gym in Gloucester led me to land my
                      dream job at the time as a personal trainer at the best
                      gym in Gloucestershire. 19 years old fresh on the scene I
                      had some doubts but always believed in myself due the
                      great success I had seen with my clients. Within a few
                      weeks I was up there with the busiest trainers and making
                      a name for myself.
                    </p>
                    <p>
                      5 years later I’ve accomplished so much more than I ever
                      thought I could. I can proudly say I was a success, but I
                      take just as much pride and excitement from the successes
                      of my clients. I’ve changed hundreds of lives, made many
                      people happy and motivated them to train again.
                    </p>
                    <p>
                      Now me and Frank are moving onto online training and I’m
                      so thrilled and excited with how things are going.
                      Technology is helping us to help hundreds of people change
                      their lives for the better, but we still pride ourselves
                      on a personal approach.
                    </p>
                    <p>
                      My clients get results and keep them. How? I make health
                      and fitness part of their lifestyle as opposed to taking
                      over their life. I’m like you. I enjoy nice food and
                      alcohol but also want to look and feel good. This is why
                      so many clients chose us as their trainers, because they
                      can relate to us and we can relate to you.
                    </p>
                    <p>
                      We will get you results whilst still eating the foods you
                      enjoy. We make training fun as opposed to a chore.
                    </p>
                    <p>I always say to clients before they start..</p>
                    <p>I’m ready if you are?</p>
                    <p>So, are you ready? </p>
                    <p>
                      The best days of your life are ahead of you and I’m
                      excited to be apart of that.
                    </p>
                    <p>I’m ready if you are...</p>
                  </div>

                  <a href="/membership-details" className="inline-btn">
                    <button className="btn grow light" type="button">
                      MEMBERSHIP DETAILS
                    </button>
                  </a>
                  <a href="/contact" className="inline-btn">
                    <button type="button" className="btn light grow">
                      Contact Us
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
