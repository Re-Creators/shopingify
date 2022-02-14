import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <>
      <Link to={to} {...props}>
        {children}
      </Link>
      {match && (
        <div className="absolute w-2 left-0 -top-2 -bottom-2 bg-yellow-500 rounded-tr-md rounded-br-md"></div>
      )}
    </>
  );
}

export default CustomLink;
