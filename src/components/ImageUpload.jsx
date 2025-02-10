const ImageUpload = ({ onUpload }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 text-center">
      <input
        type="file"
        onChange={handleImageChange}
        className="hidden"
        id="upload"
      />
      <label
        htmlFor="upload"
        className="bg-blue-500 text-white px-4 py-2 cursor-pointer"
      >
        Upload Image
      </label>
    </div>
  );
};

export default ImageUpload;
