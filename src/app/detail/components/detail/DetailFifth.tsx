export default function DetailFifth() {
  return (
    <div className="w-full max-w-[2560px] mx-auto">
      <picture className="block w-full h-full object-cover">
        <source
          media="(min-width: 1921px)"
          srcSet="/images/detail/detail_5_2560.svg"
        />

        <source
          media="(min-width: 1441px) and (max-width: 1920px)"
          srcSet="/images/detail/detail_5_1920.svg"
        />

        <source
          media="(min-width: 1025px) and (max-width: 1440px)"
          srcSet="/images/detail/detail_5_1440.svg"
        />

        <source
          media="(min-width: 769px) and (max-width: 1024px)"
          srcSet="/images/detail/detail_5_1024.svg"
        />

        <source
          media="(min-width: 426px) and (max-width: 768px)"
          srcSet="/images/detail/detail_5_768.svg"
        />
        <source
          media="(min-width: 321px) and (max-width: 425px)"
          srcSet="/images/detail/detail_5_425.svg"
        />

        <img
          src="/images/detail/detail_5_320.svg"
          alt=""
        />
      </picture>
    </div>
  );
}
