import { useState } from "react";

const topics = [
  {
    name: "HTML",
    icon: "🌐",
    description: "Learn the structure of web pages.",
    fullForm: "HyperText Markup Language",
    definition: "HTML is the standard markup language used to create the structure of web pages.",
    uses: [
      "Create headings and paragraphs.",
      "Add images, links and tables.",
      "Create forms for user input."
    ],
    features: "HTML uses tags and elements to organize webpage content.",
    example: "<h1>Hello World</h1>\n<p>Welcome to my website.</p>",
    code: "<h1>Hello Shweta!</h1>\n<p>Welcome to my website.</p>"
  },
  {
    name: "CSS",
    icon: "🎨",
    description: "Learn website styling.",
    fullForm: "Cascading Style Sheets",
    definition: "CSS is a stylesheet language used to style HTML elements and make websites attractive.",
    uses: [
      "Change text colors and font sizes.",
      "Add backgrounds, borders and spacing.",
      "Create layouts and responsive websites."
    ],
    features: "CSS separates the design of a webpage from its HTML structure.",
    example: "h1 {\n  color: blue;\n  text-align: center;\n}",
    code: "h1 {\n  color: blue;\n  text-align: center;\n}"
  },
  {
    name: "JavaScript",
    icon: "⚡",
    description: "Learn programming basics.",
    fullForm: "JavaScript",
    definition: "JavaScript is a programming language used to add dynamic and interactive behavior to websites.",
    uses: [
      "Respond to button clicks.",
      "Validate form information.",
      "Update webpage content dynamically."
    ],
    features: "JavaScript supports variables, functions, conditions, loops and events.",
    example: 'console.log("Hello World");',
    code: 'console.log("Hello Shweta!");\nconsole.log(10 + 20);'
  },
  {
    name: "React",
    icon: "⚛️",
    description: "Build interactive user interfaces.",
    fullForm: "React JavaScript Library",
    definition: "React is an open-source JavaScript library used to build user interfaces with reusable components.",
    uses: [
      "Build interactive web applications.",
      "Create reusable UI components.",
      "Update the interface when data changes."
    ],
    features: "React uses components, props and state to organize user interfaces.",
    example: "function Welcome() {\n  return <h1>Hello!</h1>;\n}",
    code: 'function Welcome() {\n  return <h1>Hello Shweta!</h1>;\n}'
  },
  {
    name: "Python",
    icon: "🐍",
    description: "Start learning programming.",
    fullForm: "Python Programming Language",
    definition: "Python is a high-level programming language known for its readable syntax and ease of learning.",
    uses: [
      "Develop applications and backend systems.",
      "Work with data and automate tasks.",
      "Build AI and machine learning projects."
    ],
    features: "Python has simple syntax and provides many built-in functions and libraries.",
    example: 'print("Hello World")',
    code: 'print("Hello Shweta!")\nprint(10 + 20)'
  }
];

function Home() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [readTopic, setReadTopic] = useState(null);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [preview, setPreview] = useState("");

  function openPractice(topic) {
    setSelectedTopic(topic);
    setCode(topic.code);
    setOutput("");
    setPreview("");
    setReadTopic(null);
  }

  function openInformation(topic) {
    setReadTopic(topic);
    setSelectedTopic(null);
    setOutput("");
    setPreview("");
  }

  function runCode() {
    setOutput("");
    setPreview("");

    try {
      if (selectedTopic.name === "HTML") {
        setPreview(code);
        setOutput("HTML preview is displayed below.");
      } else if (selectedTopic.name === "CSS") {
        setPreview(
          "<h1>Welcome to My Website</h1><p>This is a CSS practice page.</p>" +
          "<style>" + code + "</style>"
        );
        setOutput("CSS preview is displayed below.");
      } else if (selectedTopic.name === "JavaScript") {
        const logs = [];
        const safeConsole = {
          log: (...values) =>
            logs.push(values.map(value => String(value)).join(" "))
        };
        new Function("console", code)(safeConsole);
        setOutput(logs.join("\n") || "Code executed successfully.");
      } else if (selectedTopic.name === "Python") {
        setOutput(
          "Python code needs a Python runtime to execute. " +
          "Python execution will be added in a future update."
        );
      } else {
        setOutput(
          "React JSX needs a compiler to execute editable code. " +
          "Here is a simple example preview."
        );
        setPreview("<h1>Hello Shweta!</h1><p>Welcome to React.</p>");
      }
    } catch (error) {
      setOutput("Error: " + error.message);
    }
  }

  return (
    <main className="home">
      <section className="welcome-section">
        <p className="eyebrow">YOUR LEARNING JOURNEY STARTS HERE</p>
        <h2>Learn. Practice. Grow.</h2>
        <p className="intro">
          Explore programming languages, understand the basics and
          practice with simple examples.
        </p>
      </section>

      <div className="section-heading">
        <h2>Explore Topics</h2>
        <p>Choose a topic to read about it or start practising.</p>
      </div>

      <div className="topic-list">
        {topics.map((topic) => (
          <article className="topic-card" key={topic.name}>
            <div className="topic-icon">{topic.icon}</div>
            <h3>{topic.name}</h3>
            <p>{topic.description}</p>

            <div className="card-actions">
              <button
                className="learn-button"
                onClick={() => openPractice(topic)}
              >
                Learn More
              </button>

              <button
                className="read-button"
                onClick={() => openInformation(topic)}
              >
                Read More
              </button>
            </div>
          </article>
        ))}
      </div>

      {readTopic && (
        <section className="information-box">
          <button
            className="close-button"
            onClick={() => setReadTopic(null)}
          >
            Close ✕
          </button>

          <div className="info-title">
            <span className="info-icon">{readTopic.icon}</span>
            <div>
              <p className="eyebrow">LEARNING NOTES</p>
              <h2>{readTopic.name}</h2>
            </div>
          </div>

          <div className="info-section">
            <h3>1. Full Form</h3>
            <p>{readTopic.fullForm}</p>
          </div>

          <div className="info-section">
            <h3>2. What is {readTopic.name}?</h3>
            <p>{readTopic.definition}</p>
          </div>

          <div className="info-section">
            <h3>3. Uses of {readTopic.name}</h3>
            <ul>
              {readTopic.uses.map((use, index) => (
                <li key={index}>{use}</li>
              ))}
            </ul>
          </div>

          <div className="info-section">
            <h3>4. Main Features</h3>
            <p>{readTopic.features}</p>
          </div>

          <div className="info-section">
            <h3>5. Simple Example</h3>
            <pre><code>{readTopic.example}</code></pre>
          </div>

          <button
            className="learn-button"
            onClick={() => openPractice(readTopic)}
          >
            Practice This Topic →
          </button>
        </section>
      )}

      {selectedTopic && (
        <section className="practice-box">
          <button
            className="close-button"
            onClick={() => setSelectedTopic(null)}
          >
            Close ✕
          </button>

          <p className="eyebrow">HANDS-ON PRACTICE</p>
          <h2>{selectedTopic.icon} {selectedTopic.name} Practice</h2>
          <p>{selectedTopic.definition}</p>

          <h3>Code Editor</h3>
          <textarea
            className="code-editor"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            spellCheck="false"
          />

          <button className="run-button" onClick={runCode}>
            ▶ Run Code
          </button>

          <h3>Output</h3>
          <pre className="output-box">
            {output || "Click Run Code to see the result."}
          </pre>

          {preview && (
            <div className="preview-area">
              <h3>Live Preview</h3>
              <iframe
                title={selectedTopic.name + " preview"}
                sandbox=""
                srcDoc={preview}
              />
            </div>
          )}
        </section>
      )}
    </main>
  );
}

export default Home;
