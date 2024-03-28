import "./button.css";

export const createButton = ({ style = "filled", size = "small", label, onClick }) => {
  const button = document.createElement("button");
  button.type = "submit";
  button.role = "button";
  button.onclick = onClick;
  button.innerHTML = label;
  button.className = ["button", `button--${style}`, `button--${size}`].join(
    " "
  );
  return button;
};
