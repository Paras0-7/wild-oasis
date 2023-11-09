import { Button } from "../../ui/Button/Button";
import { CreateCabinForm } from "./CreateCabinForm";
import { Modal } from "../../ui/Modal";

export const AddCabin = function () {
  // const [isOpenModal, setIsOpenModal] = useState(false);

  // return (
  //   <div style={{ overflow: "hidden" }}>
  //     <Button onClick={() => setIsOpenModal((val) => !val)}>Add new cabin</Button>
  //     {isOpenModal && (
  //       <Modal onClose={() => setIsOpenModal(false)}>
  //         <CreateCabinForm onClose={() => setIsOpenModal(false)} />
  //       </Modal>
  //     )}
  //   </div>
  // );

  return (
    <Modal>
      <Modal.Open opens="create-cabin">
        <Button>Add New Cabin</Button>
      </Modal.Open>
      <Modal.Window name="create-cabin">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
};
