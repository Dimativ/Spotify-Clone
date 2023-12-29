"use client";

import {useState, useEffect} from "react";

import AuthModal from "@/components/authModal";
import UploadModal from "@/components/uploadModal";
import SubscribeModal from "@/components/subscribeModal";

import {ProductsWithPrice} from "@/types";

interface ModalProviderProps {
    products: ProductsWithPrice[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({products}) => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AuthModal />
            <UploadModal />
            <SubscribeModal products={products} />
        </>
    );
}

export default ModalProvider;