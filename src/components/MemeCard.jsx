function MemeCard({ data }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow flex flex-col items-center text-center">
      <img
        src={data.url}
        alt={data.name}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />
      <h2 className="font-semibold text-lg">{data.name}</h2>
    </div>
  );
}

export default MemeCard;
