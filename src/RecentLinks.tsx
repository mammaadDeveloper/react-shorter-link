export default function RecentLinks() {
  const links = [
    {
      short: "",
      full: "",
    },
  ];
  return (
    <section className="recent-links">
      <h2 className="recent-links__title">Recent Links</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href="#">{link.short}</a>
            <span>{link.full}</span>
            <i className=""></i>
          </li>
        ))}
      </ul>
    </section>
  );
}
