import { useEffect, useState } from "react";
import { getStudent, updateStudent } from "../api";
import { useParams, useNavigate } from "react-router-dom";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: ""
  });

  useEffect(() => {
    getStudent(id).then((res) => {
      setStudent(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(id, student).then(() => {
      navigate("/");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={student.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={student.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditStudent;
