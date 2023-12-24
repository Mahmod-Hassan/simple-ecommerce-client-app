import React from "react";

const ColorSelect = ({ colors, selectedColor, setSelectedColor }) => {
  return (
    <>
      <div className="flex gap-5">
        <span>Selected Color -</span>
        {selectedColor ? (
          <div
            className={`w-6 h-6 rounded-full border border-gray-300`}
            style={{ backgroundColor: `${selectedColor}` }}
          ></div>
        ) : (
          "choose a color"
        )}
      </div>
      <div className="flex items-center gap-3">
        <p>Colors :</p>
        <div className="flex gap-5 items-center">
          {colors?.map((color) => (
            <button
              style={{ backgroundColor: color }}
              className="w-5 h-5 rounded-full ring"
              type="button"
              key={color}
              onClick={() => setSelectedColor(color)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ColorSelect;
