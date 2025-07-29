import { useState } from 'react';
import './GalleryModal.css'; // We'll update this CSS file
import { motion } from 'framer-motion';


interface Image {
    id: number;
    src: string;
    alt: string;
}

interface ImageGalleryProps {
    images: Image[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isClosing, setIsClosing] = useState<boolean>(false);

    const openModal = (image: Image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
        setIsClosing(false);
    };

    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setSelectedImage(null);
        }, 300); // Match this with your CSS transition duration
    };

    const getGalleryItemClass = (index: number) => {
        const specialIndexes = [0, 3, 6, 9];
        return specialIndexes.includes(index) ? 'gallery-item item-2col' : 'gallery-item';
    };

    return (
        <div className="gallery-container">
            <h3>Image Gallery</h3>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <motion.div 
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    key={image.id} className={getGalleryItemClass(index)} onClick={() => openModal(image)}>
                        <img src={image.src} alt={image.alt} className="gallery-image" />
                    </motion.div>
                ))}                
            </div>

            {isModalOpen && selectedImage && (
                <div className={`modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`} onClick={closeModal}>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isClosing ? 0 : 1 }}
                        transition={{ duration: 0.5 }}
                        className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>
                            &times;
                        </button>
                        <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
                        <p className="image-caption">{selectedImage.alt}</p>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;