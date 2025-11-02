import { useState, type FormEvent } from "react";
import AdminSidebar from "../../component/AdminSidebar";

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allNumbers = "1234567890";
const allSymbols = "!@#$%^&";

const Coupon = () => {
  const [size, setSize] = useState<number>(8);
  const [prefix, setPrefix] = useState<string>("");
  const [includeNum, setIncludeNum] = useState<boolean>(false);
  const [includeChar, setIncludeChar] = useState<boolean>(false);
  const [includeSymbol, setIncludeSymbol] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const [cupon, setCupon] = useState<string>("");

  const copyText = async (cupon: string) => {
    await window.navigator.clipboard.writeText(cupon);
    setIsCopied(true);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!includeChar && !includeNum && !includeSymbol) {
      return alert("Please select atleast 1 checkbox");
    }

    let result: string = prefix || "";

    const loopLength: number = size - result.length;

    for (let i = 0; i < loopLength; i++) {
      let entireString: string = "";

      if (includeChar) entireString += allLetters;

      if (includeNum) entireString += allNumbers;

      if (includeSymbol) entireString += allSymbols;

      console.log(entireString);

      const randomNum: number = Math.floor(Math.random() * entireString.length);

      result += entireString[randomNum];
    }

    setCupon(result);
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />

      <main className="dashboardAppContainer">
        <h1>Coupons</h1>
        <section>
          <form className="cuponForm" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Text to include"
              value={prefix}
              onChange={(e) => {
                setPrefix(e.target.value);
              }}
              maxLength={size}
            />

            <input
              type="number"
              placeholder="Cupon length"
              value={size}
              onChange={(e) => {
                setSize(Number(e.target.value));
              }}
              min={4}
              max={20}
            />

            <fieldset>
              <legend>Include</legend>
              <input
                type="checkbox"
                checked={includeNum}
                onChange={() => {
                  setIncludeNum((prev) => !prev);
                }}
              />
              <span>Numbers</span>
              <input
                type="checkbox"
                checked={includeChar}
                onChange={() => {
                  setIncludeChar((prev) => !prev);
                }}
              />
              <span>Characters</span>
              <input
                type="checkbox"
                checked={includeSymbol}
                onChange={() => {
                  setIncludeSymbol((prev) => !prev);
                }}
              />
              <span>Symbols</span>
            </fieldset>

            <button type="submit">Generate</button>
          </form>

          {cupon && (
            <code>
              {cupon}{" "}
              <span
                onClick={() => copyText(cupon)}
                style={
                  isCopied
                    ? { backgroundColor: "rgb(106, 200, 112)" }
                    : { backgroundColor: "rgb(15, 15, 15)" }
                }
              >
                {isCopied ? "Copied" : "Copy"}
              </span>{" "}
            </code>
          )}
        </section>
      </main>
    </div>
  );
};

export default Coupon;
