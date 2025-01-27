import React from "react";
import Change_password_form from "./Change_password_form";

interface Props {}

function Change_Password(props: Props) {
  const {} = props;

  return (
    <>
      <div className=" border rounded-lg mt-6 ">
        <div className=" border-b ">
          <h2 className=" p-5 py-2 ">Change Password</h2>
        </div>

        <div className=" flex justify-between gap-6 p-5 w-full ">
          <Change_password_form></Change_password_form>
        </div>
      </div>
    </>
  );
}

export default Change_Password;
