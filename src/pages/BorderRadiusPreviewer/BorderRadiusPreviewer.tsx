import "./style.css";

const Previewer = () => {
  return <div id="previewer"></div>;
};

export const BorderRadiusPreviwer = () => {
  return (
    <div id="container-previewer">
      <div className="previewer-input">
        <input type="text" />
        <span>*valor padrão para as bordas: 1px</span>
      </div>
      <Previewer />
    </div>
  );
};
