"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () =>{
    const StoreModal= useStoreModal();

    return(
     <Modal title="Create Store" description="create a new store to add products with features in categories"
     isOpen={StoreModal.isOpen} onClose={StoreModal.onClose}>
Store Creation Form
     </Modal>
    )
}