import { FiClipboard } from "react-icons/fi";

export default function RecentLinks() {
  const links = [
    {
      short: "sha256",
      full: "http://google.com",
    },
  ];
  return (
    <section className="recent-links mb-7">
      <h2 className="recent-links__title text-center mb-5">Recent Links</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="p-2 flex">
            <div className="w-3/4 flex flex-col">
              <a href="#" className="text-white">{link.short}</a>
            <span className="text-gray-400">{link.full}</span>
            </div>
            <div className="w-1/4 pr-2 flex justify-end items-center">
              <FiClipboard className="text-gray-300"/>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
