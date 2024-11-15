export default function ({image,title,toLink}) {
  return (
    <div>
      <div className="rounded-full flex justify-center items-center pb-5">
        <img src={image} alt="" width={50} />
      </div>
      <a
        href={toLink}
        className="flex justify-center w-10/12 m-auto bg-gradient-to-r from-sky-600 to-sky-900 py-2 shadow-md hover:bg-gradient-to-bl rounded-lg"
      >
        {title}
      </a>
    </div>
  );
}
