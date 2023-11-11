/* eslint-disable react/prop-types */
import { HiTrash } from "react-icons/hi2";
import { Modal } from "../../ui/Modal";
import { Menus } from "../../ui/Menus";

export const DeleteCabin = function () {
  return (
    <>
      <Modal.Open opens="delete-cabin">
        <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
      </Modal.Open>
    </>
  );
};
