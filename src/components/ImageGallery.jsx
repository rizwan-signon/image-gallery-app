const ImageGallery = ({ images, onDelete }) => {
  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative">
          <img
            src={image}
            alt="Uploaded"
            className="w-full h-40 object-cover rounded"
          />
          <button
            onClick={() => onDelete(index)}
            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
          >
            ✖
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
