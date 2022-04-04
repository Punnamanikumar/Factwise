import React, { useEffect, useState } from "react";
import Celebrities from "./celebrities.json";
import "./Background.css";
import { EditTextarea } from "react-edit-text";

const AllComponents = () => {
  const [searchValue, setSearchValue] = useState("");
  const [newData, setNewData] = useState(Celebrities);
  const [newid, setNewId] = useState("");
  const [selected, setSelected] = useState(null);
  const [editSelected, setEditSelected] = useState(null);

  const hideButton = (i) => {
    if (editSelected === i) {
      console.log(i);
      return setEditSelected(null);
    }
  };
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const deleteButton = () => {
    var newFilterData = newData.filter((item) => item.id !== Number(newid));
    setNewData(newFilterData);
  };

  useEffect(() => {
    deleteButton();
    // console.log(newid);
  }, [newid, deleteButton]);

  return (
    <div>
      <center>
        <div className="all">
          <div className="search">
            <input
              type="search"
              value={searchValue}
              name="search"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
            />
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
          <br />
          {newData
            .filter((name) =>
              (name.first + name.last)
                .toLowerCase()
                .includes(searchValue.toLowerCase())
            )
            .map((val, i) => (
              <div className="box" key={val.id}>
                <div className="one" id={val.id}>
                  <div className="iconimg" onClick={hideButton}>
                    <img src={val.picture} alt="userimage" />
                  </div>
                  <div className="name" name="name">
                    {val.first}
                    {val.last}
                  </div>
                  <div className="icon1" onClick={() => toggle(i)}>
                    <span>
                      {selected === i ? (
                        <i className="fas fa-angle-up" />
                      ) : (
                        <i className="fas fa-angle-down" />
                      )}
                    </span>
                  </div>
                </div>
                <div className={selected === i ? "showcontent" : "hidecontent"}>
                  <div className="two">
                    <div className="flex">
                      <div className="age">Age</div>
                      <div className="gender">Gender</div>
                      <div className="country">Country</div>
                    </div>
                    <div className="inpts flex">
                      <div className="ainput">{val.dob}</div>
                      <div className="ginput"> {val.gender}</div>
                      <div className="cinput">{val.country}</div>
                    </div>
                  </div>
                  <div className="three" name="description">
                    <div className="desc">Description :</div>
                    <div className="descinput">
                      {/* {val.description} */}
                      <EditTextarea
                        className="editDEsz"
                        value={val.description}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="four">
                      <span onClick={deleteButton}>
                        <span
                          className="delete"
                          id={val.id}
                          onClick={() => setNewId(`${val.id}`)}
                        >
                          <i className="far fa-trash-alt" />
                        </span>
                      </span>
                      <span className="edit" onClick={() => hideButton(i)}>
                        <i className="far fa-edit"></i>
                      </span>
                      {/* <EditText showEditButton value={val.dob} /> */}
                      {/* <EditTextarea /> */}
                    </div>
                  </div>
                </div>
                <div className="hideedit">
                  <div className="five">
                    <span className="cancel">
                      <i className="fa-regular fa-circle-xmark"></i>
                    </span>
                    <span className="save">
                      <i className="fa-regular fa-circle-check" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </center>
    </div>
  );
};

export default AllComponents;
