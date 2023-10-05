import Navbar from '@/src/components/Navbar/Navbar';
import News from '@/src/components/News/News';
import Steam from '@/src/components/Steam/Steam';
import Menu from '@/src/components/Menu/Menu';
import Contacts from '@/src/components/Contacts/Contacts';

export default function Home() {
  return (
    <main className="scroll-smooth bg min-w-screen w-full h-screen p-[20px] overflow-x-hidden">
      <div className="scroll-smooth z-[1] relative flex gap-y-[40px] flex-col w-full h-full backdrop-blur-[8px] bg-[#fff] bg-opacity-[70%] rounded-[10px] overflow-x-hidden">
        <Navbar />
        <div className="scroll-smooth flex gap-y-[40px] p-[20px] flex-col w-full h-full items-center">
          <News />
          <Menu />
          <Contacts />
        </div>
      </div>
      <Steam />
    </main>
  );
}
