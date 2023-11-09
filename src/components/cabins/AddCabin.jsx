import { Button } from "../../ui/Button/Button";
import { CreateCabinForm } from "./CreateCabinForm";
import { Modal } from "../../ui/Modal";

export const AddCabin = function () {
  return (
    <div>
      <Modal>
        <Modal.Open opens="create-cabin">
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="create-cabin">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
};
