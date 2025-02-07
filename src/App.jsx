import { useState, useEffect } from "react";
import ImageUpload from "./components/ImageUpload";
import ImageGallery from "./components/ImageGallery";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Load images from local storage
  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem("images")) || [];
    setImages(savedImages);
  }, []);

  // Save images to local storage
  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
  }, [images]);

  const handleUpload = (image) => {
    setImages([...images, image]);
  };

  const handleDelete = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const filteredImages = images.filter((image) =>
    image.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold">Image Gallery</h1>
      <SearchBar onSearch={setSearchQuery} />
      <ImageUpload onUpload={handleUpload} />
      <ImageGallery images={filteredImages} onDelete={handleDelete} />
    </div>
  );
};

export default App;
