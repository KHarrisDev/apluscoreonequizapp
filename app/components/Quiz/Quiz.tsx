export default function Quiz() {
  return (
    <div className="m-auto w-[640px] bg-white flex flex-col gap-5 rounded-lg px-10 py-12">
      <h1>COMPTIA A+ Core 1 Quiz App</h1>
      <hr className="h-1 border-none bg-slate-600" />
      <h2 className="text-2xl font-medium">
        Which device is required for Internet connection?
      </h2>
      <ul>
        <li className="flex items-center h-[70px] pl-4 border-2 border-gray-300 rounded-lg mb-5 text-xl cursor-pointer">
          Modem
        </li>
        <li className="flex items-center h-[70px] pl-4 border-2 border-gray-300 rounded-lg mb-5 text-xl cursor-pointer">
          Router
        </li>
        <li className="flex items-center h-[70px] pl-4 border-2 border-gray-300 rounded-lg mb-5 text-xl cursor-pointer">
          LAN Cable
        </li>
        <li className="flex items-center h-[70px] pl-4 border-2 border-gray-300 rounded-lg mb-5 text-xl cursor-pointer">
          Pen Drive
        </li>
      </ul>
      <button className="m-auto w-[250px] h-[65px] bg-blue-400 text-white text-2xl font-medium rounded-lg cursor-pointer">
        Next
      </button>
      <div className="m-auto text-lg">1 of 5</div>
    </div>
  );
}
