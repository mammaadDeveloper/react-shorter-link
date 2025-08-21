export default function ShortenBox() {
  return (
    <section className="shorten-box flex justify-center mb-32">
      <input
        type="text"
        placeholder="Please a link to shorten it"
        className="shorten-box__input"
      />
      <button className="shorten-box__btn">Shorten</button>
    </section>
  );
}
