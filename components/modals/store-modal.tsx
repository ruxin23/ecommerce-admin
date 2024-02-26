"use client"
import Modal from "../ui/modal"
import { useStoreModal } from "@/hooks/use-store-modal";
const StoreModal = () => {
    const storeModal = useStoreModal();
    return (
        <Modal
            title="Create store"
            description="Add a new store to manage products and categories."
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            111
        </Modal>
    );
}

export default StoreModal;