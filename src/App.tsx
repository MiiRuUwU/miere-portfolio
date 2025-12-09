import React, { useState, useEffect } from "react";
import "./App.css";
import MiereImg from "./assets/miere.jpg";

interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`dropdown ${open ? "open" : ""}`}>
      <div className="dropdown-header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <span className="arrow">{open ? "▲" : "▼"}</span>
      </div>
      <div className="dropdown-content">{open && children}</div>
    </div>
  );
};

const App: React.FC = () => {
  const [page, setPage] = useState<"home" | "about" | "more" | "404">("home");
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("");
  const [slideOut, setSlideOut] = useState(false);

  const loadingLines = [
    "Hold on! Miere is eating his Crossini 🥐",
    "Loading... Miere is debugging his life choices 😭",
    "Please wait… Miere’s cat is walking on the keyboard 😼",
    "Almost there! Miere is taking Amphetamine 🧠",
    "Miere is doing this on Purpose 👀",
    "Fun Fact: This is not a real loading screen! 🤯",
    "Patience... Miere is looking for DPWH Contractors! 🤑🤑",
    "This doesn't even load anything...",
    "wo men jin sheng zhu ding shi cang sang.. ku zhe lai yao xiao zhe zou guo ya 😭",
    "GRAH! INTERLOPER",
    "what do you mean \"telamon-NOT-telamon\" 🤨",
    "Mojang pls update sniffer 😞",
    "Only the real black cat likes hersheys 🐈‍⬛",
    "Pls don't call my full name and add a period 😨",
    "LEAVE THAT GRAVITINO BALL ALONE 😡",
    "Miere is hungry..."
  ];

  useEffect(() => {
    setLoadingText(loadingLines[Math.floor(Math.random() * loadingLines.length)]);
    const timer = setTimeout(() => {
      setSlideOut(true);
      setTimeout(() => setLoading(false), 1000);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const reloadPage = () => window.location.reload();

  return (
    <div className={`app ${page}`}>
      {/* LOADING SCREEN */}
      {loading && (
        <div className={`loading-screen ${slideOut ? "slide-out" : ""}`}>
          <div className="spinner"></div>
          <p className="loading-text floating">{loadingText}</p>
        </div>
      )}

      {!loading && (
        <>
          {/* HOME PAGE */}
          {page === "home" && (
            <section className="home">
              <h1 className="title floating">🚧 SIT TIGHT, this is still being built! 🚧</h1>
              <p className="signature">- Miere</p>
              <button className="learn-btn" onClick={() => setPage("about")}>
                💡 Learn More 💡
              </button>
              <button className="learn-btn" style={{ marginLeft: "1rem" }} onClick={reloadPage}>
                🔄 Reload
              </button>
            </section>
          )}

          {/* ABOUT ME PAGE */}
          {page === "about" && (
            <section className="about">
              <div className="card">
                <h1 className="title centered floating">👷‍♂️ About This Project 👷‍♂️</h1>
                <p className="intro">
                  Hey there! You’ve stumbled upon my little <b>digital construction zone</b> 🏗️ — 
                  so please mind the scaffolding while I’m making magic happen!
                </p>

                <Dropdown title="🏗️ What is this? 🏗️">
                  <p>
                    This is my <b>first ever React web project!</b> I've built this in my past time, 
                    and honestly, there are times that I haven't touched it at all, but I am tweaking 
                    things here and there! I plan to eventually turn this into my <b>professional portfolio</b>, 
                    so through time, I'm gonna put a lot of stuff here! Maybe even add <b>webGL</b> to it in the future! 👀👀
                  </p>
                </Dropdown>

                <Dropdown title="✨ Hello! ✨">
                  <p>
                    My name is <b>Lumiere Toledo</b>! "Lumiere" for short... "Miere" for shortest 😌  
                    I'm currently in college, taking <b>Bachelor of Science in Information Technology</b> at <b>Polytechnic University of the Philippines!</b>
                  </p>
                </Dropdown>

                <Dropdown title="📦 My Story 📦">
                  <p>
                    I'm THAT kinda guy.. <b>ADHD-er</b>, loses focus easily, all that jazz. But ironically, 
                    when I find something that genuinely clicks, I get hyper-focused and nothing else matters.  
                    I started out being super into the deep, back-end coding stuff—you know, the classic IT path.  
                    I was obsessed with programming logic, solving algorithms, and even getting down with some 
                    serious math just to make a circle draw on a console.
                  </p>
                  <p>
                    I got into networking and even had a brief, terrifying stint where I (accidentally) took down a sketchy phishing site with some SQL injection I learned (I was sooo scared, but it worked! LOL!).
                  </p>
                  <p>
                    But here's the plot twist: all that was fun, but it never gave me the full-body 
                    "this is it" feeling. My real obsession has always been that <b>buried creative side</b>.  
                    I used to lose hours editing videos, taking photos, and making janky little pieces of pixel art.  
                    I even wanted to take a different, more art-focused course before diving into IT.
                  </p>
                  <p>
                    So, this whole web project? It's my <b>Eureka Moment</b> realized.  
                    It's the perfect sweet spot where my weird, logical, code-breaking brain finally 
                    gets to play with my <b>art-loving, visual-obsessed heart</b>.  
                    I'm basically a programmer who finally gave his inner artist the steering wheel. Buckle up! 🚀
                  </p>
                </Dropdown>

                <Dropdown title="❗P.S.❗">
                  <p>
                    Let's be real... while coding this, I was pretty much glued to Google, Stack Overflow, and ChatGPT... Sprinkling in some "✨<b>ctrl+c ctrl+v</b>✨" here and there until the magic worked. That's just part of the process, AND I'M LEARNING, okay?! :3
                  </p>
                </Dropdown>

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
                  <button className="learn-btn" onClick={() => setPage("home")}>
                    🔙 Back
                  </button>
                  <button className="learn-btn" onClick={() => setPage("more")}>
                     Next 🔜
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* MORE ABOUT MIERE PAGE */}
          {page === "more" && (
            <section className="about">
              <div className="card">
                <h1 className="title centered floating">❗ More About Miere??? ❗</h1>
                
                <div className="image-container">
                  {/* Replace src with your image */}
                  <img src={MiereImg} alt="Miere" />
                </div>

                {/* Placeholder content section */}
                <div className="content-section">
                  <h2>Who am I?</h2>
                  <p>
                    My name is Lumiere but of course i prefer <b>Miere</b>. I'm studying BSIT at Polytechnic University of the Philippines, and I studied Senior High School at PUP-SHS under the TVL-ICT Strand! 
                  </p>
                </div>

                <div className="content-section">
                  <h2>My Powers!</h2>
                  <p>
                    I'm at least adept at programming languages like C, C++, Java, Decent at HTML, CSS, JavaScript, and! I'm new to React based web applications! To be honest, I wasn't able to start in the freshman year, but now, Here I am! 
                  </p>
                </div>
                <div className="content-section">
                  <h2>What I Love!</h2>
                  <p>
                    I really really love programming, and doing fun creative projects, (at my own pace due to my ADHD). I love gaming, making Minecraft modpacks, and right now, I'm obsessed with this game called "No Man's Sky"!
                  </p>
                </div>
                <div className="content-section">
                  <h2>What are my Future Plans?</h2>
                  <p>
                    I plan to eventually learn more about web based applications, Improve my design capabilities with the most well known tools. And of course, try out a hybrid career in both UI/UX and Front End Development!
                  </p>
                </div>
                <div className="content-section">
                  <h2>Where can you contact me?</h2>
                  <p>
                  <ul>
                    <li><a href="https://www.instagram.com/mierebear" target="_blank" rel="noopener noreferrer"><b>Instagram</b></a></li>
                    <li><a href="https://www.facebook.com/mimimimimiere" target="_blank" rel="noopener noreferrer"><b>Facebook</b></a></li>
                    <li><a href="https://github.com/MiiRuUwU" target="_blank" rel="noopener noreferrer"><b>Github</b></a></li>
                    <li><a href="https://x.com/MiereBear" target="_blank" rel="noopener noreferrer"><b>Twitter / X</b></a></li>
                  </ul>
                  </p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
                  <button className="learn-btn" onClick={() => setPage("about")}>
                    🔙 Back
                  </button>
                  <button className="learn-btn" onClick={() => setPage("404")}>
                     Next 🔜
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* 404 PAGE */}
          {page === "404" && (
            <section className="home">
              <h1 className="title centered">ERROR 404 - PAGE NOT FOUND </h1>
              <p className="signature">Miere got tired of building 😭</p>
              <button className="learn-btn" onClick={() => setPage("more")}>
                🔙 Back
              </button>
            </section>
          )}
        </>
      )}
    </div>
  );
};

export default App;
