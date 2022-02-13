import Tippy from "@tippyjs/react/headless";

interface Props {
  children: JSX.Element;
  content: String;
}

function TippyInfo(props: Props) {
  const { children, content } = props;

  return (
    <Tippy
      render={(attrs) => (
        <div
          className="rounded-md bg-black px-3 py-1 text-xs text-white"
          tabIndex={-1}
          {...attrs}
          id="tooltip"
        >
          {content}
          <div id="arrow" data-popper-arrow></div>
        </div>
      )}
      placement="right"
      arrow={true}
    >
      {children}
    </Tippy>
  );
}

export default TippyInfo;
