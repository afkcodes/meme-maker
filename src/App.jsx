import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [memes, setMemes] = useState([]);
  const [selectedImage, setSelectedImage] = useState({});
  const [addedTexts, setAddedTexts] = useState([]);

  const getMemes = async () => {
    try {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setMemes(data.data.memes);
    } catch (error) {
      setMemes([]);
    }
  };

  useEffect(() => {
    getMemes();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className=" flex flex-1 justify-center flex-row">
        <div className="flex flex-1 p-4 border-2">
          {selectedImage?.url ? (
            <div>
              <h2 className="text-center font-bold text-xl py-4">
                {selectedImage.name}
              </h2>
              <div className="h-[500px] w-[500px]">
                <img src={selectedImage.url} className="h-[500px] w-[500px]" />
              </div>
            </div>
          ) : (
            <h1>Please select an Image</h1>
          )}
        </div>
        <div className="flex flex-1 p-4 flex-col">
          <div className="flex flex-col justify-center items-center h-full">
            {[...Array(selectedImage.box_count).keys()].map((el, id) => (
              <div className="flex gap-2 my-2" key={id}>
                <input
                  type="text"
                  name=""
                  id={id}
                  className="border border-gray-400 rounded-sm p-2 focus:outline-none"
                  placeholder="Enter Meme Text"
                />
                <button className="bg-indigo-300 text-base p-2 font-bold rounded-sm  active:scale-90 transition duration-500">
                  Add Text
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-1 overflow-y-auto flex-col bg-gray-50 mt-4">
        <h2 className="text-center font-bold text-xl py-4">
          Choose a Template Below
        </h2>
        <div className="grid grid-cols-4 ">
          {memes.map((meme, idx) => (
            <div
              className="cursor-pointer p-4 h-96 w-auto border border-gray-100"
              key={idx}>
              <img
                src={meme.url}
                onClick={() => setSelectedImage(meme)}
                height="100%"
                width="100%"
                className="cursor-pointer p-4 h-96"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
