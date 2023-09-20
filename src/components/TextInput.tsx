import { setText, useText } from "../state/state";

function TextInput() {
  const text = useText();

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      Echo: {text}
    </div>
  );
}

export default TextInput;
