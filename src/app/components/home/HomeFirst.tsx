export const HomeFirst = () => {
  return (
    // h-[392px] sm::h-[494px] md:h-[767px]
    <div className="w-full">
      <picture className="block w-full h-full object-cover">
        <source
          media="(min-width: 1921px)"
          srcSet="/images/home/home_1_2560.png"
        />

        <source
          media="(min-width: 1441px) and (max-width: 1920px)"
          srcSet="/images/home/home_1_1920.png"
        />

        <source
          media="(min-width: 1025px) and (max-width: 1440px)"
          srcSet="/images/home/home_1_1440.png"
        />

        <source
          media="(min-width: 769px) and (max-width: 1024px)"
          srcSet="/images/home/home_1_1024.png"
        />

        <source
          media="(min-width: 426px) and (max-width: 768px)"
          srcSet="/images/home/home_1_768.png"
        />
        <source
          media="(min-width: 321px) and (max-width: 425px)"
          srcSet="/images/home/home_1_425.png"
        />

        <img
          src="/images/home/home_1_320.png"
          alt="Home content"
        />
      </picture>
    </div>
  );
};

export default HomeFirst;
