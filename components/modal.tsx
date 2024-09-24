'use client';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface TechnicalDetails {
  modalTitle: string;
  modalData: string;
  modalImage: StaticImageData; // Assuming `CryptoFleet` is an imported image or a static asset
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  technicalDetails: TechnicalDetails;
}

const Modal = ({ isOpen, onClose, title, technicalDetails }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      id="popup-modal"
      className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full h-full max-w-[95vw] md:max-w-[80vw] max-h-[80vh] md:max-h-[80vh]">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-900 w-full h-full md:h-auto overflow-y-auto">
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l6 6m0 0l6 6M7 7L1 13M7 7l6-6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>

          {/* Modal Content */}
          <div className="p-4 md:p-5 text-center overflow-y-auto max-h-screen">
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {technicalDetails.modalTitle}
            </h3>

            {/* Technical Details */}
            <p className="text-gray-500 dark:text-gray-300 mb-4">
              {technicalDetails.modalData}
            </p>

            {/* Image */}
            <div className="w-full flex justify-center">
              <Image
                src={technicalDetails.modalImage}
                alt={technicalDetails.modalTitle}
                height={300} // Adjusted for mobile responsiveness
                width={300}  // Adjusted for mobile responsiveness
                className="object-cover max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
