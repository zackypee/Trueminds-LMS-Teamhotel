import { useState } from "react";

function AssignmentForm() {
  const [formData, setFormData] = useState({
    title: "",
    instructions: "",
    dueDate: "",
    file: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  return (
    <div>
      <p>← Back to Dashboard</p>
      <h1>Upload Assignment</h1>
      <p>
        Craft a clear and engaging challenge for your students. Provide detailed
        guidelines and set clear deadlines to ensure successful learning
        outcomes.
      </p>

      <div>
        <label>Assignment Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. Advanced UX Research Methodologies"
        />
      </div>

      <div>
        <label>Detailed Instructions</label>
        <textarea
          placeholder="Provide step-by-step instructions, learning objectives, and grading criteria..."
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Due Date Selector</label>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />
      </div>

      <div>
        <p>Drag and drop your PDF here</p>
        <p>
          Support for assignment briefs, reading materials, or rubrics (Max
          25MB)
        </p>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          id="fileInput"
          style={{ display: "none" }}
        />
        <button onClick={() => document.getElementById("fileInput").click()}>
          Select File
        </button>
      </div>

      <div>
        <button>Save Draft</button>
        <button>Publish Assignment</button>
      </div>
    </div>
  );
}

export default AssignmentForm;
