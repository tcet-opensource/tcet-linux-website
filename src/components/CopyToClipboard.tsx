import React, { useRef, useEffect } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

const CopyToClipboard: React.FC<{
  text: string;
}> = ({ text }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    dialog.current?.show();
    dialog.current.style.display = "flex";

    const timer = setTimeout(() => {
      dialog.current.style.display = "none";
      dialog.current?.close();
    }, 2000);

    // clearTimeout(timer)
  };

  const dialog = useRef<HTMLDialogElement>(null);

  useOnClickOutside(dialog, () => {
    console.log("clickng outside");
    dialog.current.style.display = "none";
    dialog.current?.close();
  });

  return (
    <button
      className="p-1 border border-slate-400 cursor-pointer
    hover:bg-slate-200 hover:bg-opacity-20 active:bg-opacity-40 rounded-lg text-slate-100
    overflow-visible
    "
      onClick={copyToClipboard}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
        />
      </svg>
      <dialog
        ref={dialog}
        className="top-3 sm:left-56  w-max items-center rounded-lg h-4 bg-white bg-opacity-60 "
      >
        <p className="">Copied to clipboard</p>
      </dialog>
    </button>
  );
};

export default CopyToClipboard;
