interface Props {
  children: JSX.Element;
  content: String;
}

function Tooltip({ children, content }: Props) {
  return (
    <div className="relative group mx-auto">
      {children}
      <div className="tooltip opacity-0 group-hover:opacity-100 duration-300 absolute top-1/2 -translate-y-1/2 left-1/2 ml-6 rounded-md bg-black px-3 py-1 text-xs text-white">
        {content}
      </div>
    </div>
  );
}

export default Tooltip;
