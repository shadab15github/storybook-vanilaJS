import "./storyButton.css";

export const createStoryButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  btn.addEventListener("click", onClick);

  const mode = primary ? "story-button--primary" : "story-button--secondary";
  btn.className = ["story-button", `story-button--${size}`, mode].join(" ");

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
