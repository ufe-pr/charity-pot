import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <div className="flex justify-center items-center gap-8 p-5 text-lg bg-white">
      <p>Made with much ❤️</p>
      <div className="flex gap-3 items-center">
        <a
          href="https://github.com/ufe-pr/charity-pot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubLogoIcon className="h-[1em] w-[1em]" />
        </a>
      </div>
    </div>
  );
}
