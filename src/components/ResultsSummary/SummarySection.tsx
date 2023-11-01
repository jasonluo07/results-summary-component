function SummarySection() {
  return (
    <section className="px-[30px] pb-[30px] pt-[24px] desktop:w-1/2 desktop:px-[40px] desktop:pb-[46px] desktop:pt-[38px]">
      <h2 className="mb-[24px] text-[18px] font-bold text-[#303B59] desktop:mb-[28px] desktop:text-[24px]">Summary</h2>
      <ul className="mb-[24px] space-y-[16px]">
        <li
          className="flex justify-between rounded-[12px] px-[16px] py-[18px]"
          style={{
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), #F55',
          }}
        >
          <div className="flex space-x-[12px]">
            <img className="h-[20px]" src="/src/assets/images/icon-reaction.svg" alt="Reaction" />
            <h3 className="text-[16px] font-medium text-[#F55] desktop:text-[20px]">Reaction</h3>
          </div>
          <p className="text-[16px] font-bold text-[#303B59] desktop:text-[18px]">
            80 <span className="opacity-50">/ 100</span>
          </p>
        </li>
        <li
          className="flex justify-between rounded-[12px] px-[16px] py-[18px]"
          style={{
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), #FFB21E',
          }}
        >
          <div className="flex space-x-[12px]">
            <img className="h-[20px]" src="/src/assets/images/icon-memory.svg" alt="Memory" />
            <h3 className="text-[16px] font-medium text-[#FFB21E] desktop:text-[18px]">Memory</h3>
          </div>
          <div className="flex space-x-[8px]"></div>
          <p className="text-[16px] font-bold text-[#303B59] desktop:text-[18px]">
            92 <span className="opacity-50">/ 100</span>
          </p>
        </li>
        <li
          className="flex justify-between rounded-[12px] px-[16px] py-[18px]"
          style={{
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), #00BB8F',
          }}
        >
          <div className="flex space-x-[12px]">
            <img className="h-[20px]" src="/src/assets/images/icon-verbal.svg" alt="Verbal" />
            <h3 className="text-[16px] font-medium text-[#00BB8F] desktop:text-[18px]">Verbal</h3>
          </div>
          <div className="flex space-x-[8px]"></div>
          <p className="text-[16px] font-bold text-[#303B59] desktop:text-[18px]">
            61 <span className="opacity-50">/ 100</span>
          </p>
        </li>
        <li
          className="flex justify-between rounded-[12px] px-[16px] py-[18px]"
          style={{
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), #1125D6',
          }}
        >
          <div className="flex space-x-[12px]">
            <img className="h-[20px]" src="/src/assets/images/icon-visual.svg" alt="Visual" />
            <h3 className="text-[16px] font-medium text-[#1125D6] desktop:text-[18px]">Visual</h3>
          </div>
          <div className="flex space-x-[8px]"></div>
          <p className="text-[16px] font-bold text-[#303B59] desktop:text-[18px]">
            73 <span className="opacity-50">/ 100</span>
          </p>
        </li>
      </ul>
      <button
        className="block w-full rounded-[128px] bg-[#303B59] py-[16px] text-[18px] font-bold text-white hover:bg-gradient-to-b hover:from-[#75F] hover:to-[#2F2CE9]
      "
      >
        Continue
      </button>
    </section>
  );
}

export default SummarySection;
