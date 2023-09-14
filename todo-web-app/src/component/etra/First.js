import React from "react";
import "../../css/extraCss/First.css";

const First = (props) => {
  const { data, indx, updateStatus, removeTask } = props;

  if (!data) {
    return null; // Don't render if data prop is not provided
  }
  const { title, status } = data;
  return (
    <>
      {/* updateStatus && checks if the updateStatus prop is truthy (not null or undefined).If updateStatus is truthy, the code within the parentheses is executed.This technique prevents errors if the updateStatus prop is not provided or if it's not a valid function */}
      <div className="container">
        <div className="">
          <div className="card_container">
            <div className="card_list">
              <div className="card_item">
                <div className="card">
                  <div className="card_index_title">
                    <div className="card_index">
                      <p className="index">{indx}.</p>
                    </div>
                    <div className="card_title">
                      <p className="title">{title}</p>
                    </div>
                  </div>
                  <div className="card_status">
                    <div className="status">
                      Status: <span>{status}</span>
                    </div>
                  </div>
                  <div className="button_container">
                    <div className="button_update_remove">
                      <div className="update_item update_remove">
                        {updateStatus && (
                          <button
                            className="btn updt"
                            onClick={() => updateStatus(indx)}
                          >
                            Update Status
                          </button>
                        )}
                      </div>

                      <div className="remove_list update_remove">
                        {removeTask && (
                          <button
                            className="btn remv"
                            onClick={() => {
                              removeTask(indx);
                            }}
                          >
                            Remove taks
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;
