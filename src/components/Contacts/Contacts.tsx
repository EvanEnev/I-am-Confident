'use client';

export default function Contacts() {
  const address = 'Староватутинский пр., 14, Москва';
  const phoneNumber = '+7 (968) 940-69-48';
  return (
    <div
      className="flex flex-col sm:flex-row w-full sm:w-[70%] justify-between gap-y-[20px]"
      id="contacts">
      <div className="flex flex-col items-center gap-y-[20px]">
        <div className="w-full">
          <span className="typeface">Мы находимся по адресу: </span>
          <span
            className="border-b-[3px] border-accent typeface text-accent hover:opacity-50 transition-opacity cursor-pointer"
            aria-label="Нажмите, чтобы скопировать"
            onClick={() => navigator.clipboard.writeText(address)}>
            {address}
          </span>
        </div>
        <div className="w-full">
          <span className="typeface">Телефон: </span>
          <a
            href={`tel:${phoneNumber}`}
            className="border-b-[3px] border-accent typeface text-accent hover:opacity-50 transition-opacity cursor-pointer">
            {phoneNumber}
          </a>
        </div>
      </div>
      <div className="w-full flex flex-col items-center pb-[20px]">
        <iframe
          src="https://yandex.com/map-widget/v1/?um=constructor%3Ae76435d29ec47f05e51723f8942d856d05121c74015093cb40e0afd9dc8ba0c5&amp;source=constructor"
          width="100%"
          height="400"
          className="rounded-[10px] border-2 border-accent"
        />
      </div>
    </div>
  );
}
