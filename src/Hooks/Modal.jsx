
import useModal from "./useModal";

const Modal = () => {
  const { modalOpen, setModalOpen, trigger, modal } = useModal();

  return (
    <>
      <div className="container mx-auto py-20">
        <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className={`rounded-full bg-primary px-6 py-3 text-base font-medium text-white`}
        >
          Open Modal
        </button>
       
      </div>
    </>
  );
};

export default Modal;
