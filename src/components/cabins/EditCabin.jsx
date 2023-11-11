/* eslint-disable react/prop-types */
import { HiPencil } from "react-icons/hi2";
import { Modal } from "../../ui/Modal";
import { Menus } from "../../ui/Menus";

export const EditCabin = function () {
  return (
    <>
      <Modal.Open opens="edit-cabin">
        <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
      </Modal.Open>
    </>
  );
};
