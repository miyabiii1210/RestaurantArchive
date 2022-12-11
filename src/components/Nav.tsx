import { MenuItems } from "./MenuItems";

export default function NavBar() {
  return (
    <div className="">
      <ul>
        <div className="flex justify-center items-stretch text-sm bg-gray-200">
          {MenuItems.map((item, index) => {
            return (
              <div className="px-2">
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.Title}
                  </a>
                </li>
              </div>
            )
          })}
        </div>
      </ul>
    </div>
  );
}