import MenuItems from "./MenuItems";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const MenuCard = ({resDetailsData, itemCards, title}) => {

    const menuData = itemCards.map((x) => {
        return x.card.info;
      });

      const [isOpen, setIsOpen] = useState(false);
      const toggleCategory = () => {
        setIsOpen(!isOpen);
      };
      return (
        <div className="py-3 cursor-pointer font-fontall">
          <div
            className="flex justify-between items-center"
            onClick={toggleCategory}
          >
            <h3 className="font-bold text-xl">
              {title} ({itemCards.length})
            </h3>
            <div>
              {
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`${isOpen ? "rotate-180" : ""}`}
                />
              }
            </div>
          </div>
          <div>
            {isOpen &&
              menuData.map((item) => {
                return (
                  <MenuItems
                    {...item}
                    key={{ ...item }.id}
                    resDetailsData={resDetailsData}
                  />
                );
              })}
          </div>
          <div className="bg-[#eeeeee] py-2 mt-3"></div>
        </div>
      );
};

export default MenuCard;