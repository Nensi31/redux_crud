import "./App.css";
import { useState } from "react";
import { addData, DeleteData, updateData } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function App() {
  const [student, setStudent] = useState({
    fName: "",
    pass: "",
    gender: "",
    lang: [],
  });
  const [isEdit, setIsEdit] = useState(-1);
  const dispatch = useDispatch();
  const selector = useSelector((selector) => selector);
  console.log(
    "selector",
    useSelector((selector) => selector)
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };
  const handleChecked = (e) => {
    if (student.lang.includes(e.target.value)) {
      setStudent({
        ...student,
        lang: student.lang.filter((item) => item !== e.target.value),
      });
    } else setStudent({ ...student, lang: [...student.lang, e.target.value] });
  };
  console.log("student", student);
  const handleSubmit = () => {
    if (isEdit === -1) {
      dispatch(addData(student));
    } else {
      dispatch(updateData(student, isEdit));
    }
    setIsEdit(-1);
  };
  const handleDelete = (idx) => {
    dispatch(DeleteData(idx));
  };
  const handleUpdate = (valueIndex) => {
    setIsEdit(valueIndex);

    setStudent(
      selector.formReducers.find((item, index) => index === valueIndex)
    );
  };

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <Link to="/pages/home">
          <h2>Home</h2>
        </Link>
        <Link to="pages/dashboard">
          {" "}
          <h2>Dashboard</h2>
        </Link>
      </div>
      <div>
        <label>Enter name</label>
        <input
          type="text"
          value={student.fName}
          onChange={handleChange}
          name="fName"
        />
      </div>
      <div>
        <lable>Enter password</lable>
        <input
          type="password"
          value={student.pass}
          onChange={handleChange}
          name="pass"
        />
      </div>

      <div>
        <lable>Select gender:</lable>
        <lable htmlFor="m">male</lable>
        <input
          id="m"
          type="radio"
          value="male"
          onChange={handleChange}
          name="gender"
          checked={student.gender === "male"}
        />
        <lable htmlFor="f">female</lable>
        <input
          id="f"
          type="radio"
          value="female"
          onChange={handleChange}
          name="gender"
          checked={student.gender === "female"}
        />
      </div>

      <div>
        <lable>Select language:</lable>
        <lable>css</lable>
        <input
          type="checkbox"
          value="css"
          name="css"
          onChange={handleChecked}
          checked={student?.lang?.includes("css")}
        />
        <lable>javascript</lable>
        <input
          type="checkbox"
          value="javascript"
          name="javascript"
          onChange={handleChecked}
          checked={student?.lang?.includes("javascript")}
        />
        <lable>react</lable>
        <input
          type="checkbox"
          value="react"
          name="react"
          onChange={handleChecked}
          checked={student?.lang?.includes("react")}
        />
      </div>
      <div>
        <button className="button-85" onClick={handleSubmit}>
          submit
        </button>
      </div>
      <div>
        <table>
          <thead>
            <th>fname</th>
            <th>pass</th>
            <th>gender</th>
            <th>language</th>
            <th>Delete</th>
            <th>edit</th>
          </thead>
          <tbody>
            {(selector.formReducers || []).map((item, index) => (
              <tr>
                <td>{item.fName}</td>
                <td>{item.pass}</td>
                <td>{item.gender}</td>
                <td>{item.lang.join(",")}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => handleUpdate(index)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
