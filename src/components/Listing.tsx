import { mainInfo } from "@/constants";
import Image from "next/image";

export const Listing = () => {
  return (
    <div className="mb-36">
      <ul>
        <li className="list-item">
          <div className="list-title">
            <Image className="md:w-[24px] h-auto" width={33} height={33} src="/images/svg/star.svg" alt="Иконка зведочки" />
            <p>Церемония венчания состоится:</p>
          </div>
          <span className="list-descritption">17 августа 2024</span>
        </li>

        <li className="list-item">
          <div className="list-title">
            <Image className="md:w-[24px] h-auto" width={33} height={33} src="/images/svg/star.svg" alt="Иконка зведочки" />
            <p>Адрес и время венчания:</p>
          </div>
          <div className="flex flex-col">
            <span className="list-descritption">ул. Красноармейская 57</span>
            <div className="flex flex-col items-end -mt-[31px] md:-mt-[0] md:items-start md:ml-[32px] list-children">
              <span className="list-children-item">Сбор гостей в 10:45</span>
              <span className="list-children-item">Начало в {mainInfo.startOfWedding}</span>
            </div>
          </div>
        </li>

        <li className="list-item">
          <div className="list-title">
            <Image className="md:w-[24px] h-auto" width={33} height={33} src="/images/svg/star.svg" alt="Иконка зведочки" />
            <p>Банкет по адресу:</p>
          </div>
          <span className="list-descritption">{mainInfo.addressOfBanket}</span>
          <div className="flex flex-col items-end list-children md:items-start ml-[32px]">
            <span className="list-children-item">Начало в {mainInfo.startOfBanket}</span>
          </div>
        </li>

      </ul>
    </div>
  )
}