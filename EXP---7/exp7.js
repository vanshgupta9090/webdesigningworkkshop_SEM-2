function Student({ name, course, marks }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p><b>Course:</b> {course}</p>
      <p><b>Marks:</b> {marks}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h2>STUDENT INFORMATION..</h2>

      <Student name="Vansh Gupta" course="COMPUTER SCIENCE" marks={89} />
      <Student name="Yash Gupta" course="ELECTRONICS" marks={96} />
      <Student name="Ramit Gupta" course="DATA SCIENCE" marks={78} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);