import { useState } from "react";
import useCreateUser from "../../hooks/adminHooks/useCreateUser";

const CreateAccountForm = ({ onClose, onSuccess }) => {
  const { handleCreateUser, loading, error } = useCreateUser();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "learner",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleCreateUser(formData);
      onSuccess?.();
      onClose?.(); // close modal on success
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <p className="text-red-500 text-sm bg-red-50 p-2 rounded">{error}</p>
      )}
      <input
        id="name"
        placeholder="Full name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        id="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        id="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <select
        id="role"
        value={formData.role}
        onChange={handleChange}
        className="border p-2 w-full"
      >
        <option value="learner">Learner</option>
        <option value="instructor">Instructor</option>
      </select>
      <button
        disabled={loading}
        className="bg-[#630ED4] text-white w-full p-3 rounded cursor-pointer"
      >
        {loading ? "Creating..." : "Create User"}
      </button>
    </form>
  );
};

export default CreateAccountForm;
