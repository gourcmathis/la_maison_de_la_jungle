import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img style={{ height: "27px" }} src={Sun} alt="sun-icon" />
    ) : (
      <img style={{ height: "22px" }} src={Water} alt="water-icon" />
    );

  return (
    <>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <td key={rangeElem.toString()}>{scaleType}</td>
        ) : null
      )}
    </>
  );
}

export default CareScale;
