import { Link } from "@solidjs/router";

export const LinkBtn = (props) => {
  return (
    <Link
      href={props.link}
      class="w-64 py-3  text-center text-white font-semibold bg-gradient-to-r from-greenbg-100 to-greenbg-200 rounded-lg hover:from-greenbg-300 hover:to-greenbg-400"
    >
      {props.text}
    </Link>
  );
};
