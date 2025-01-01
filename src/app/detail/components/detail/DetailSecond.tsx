export default function DetailSecond() {
  return (
    <div className="flex max-w-[2560px] mx-auto">
      <picture className="w-full mx-auto block">
        {/* 1921px 이상 - 2560px */}
        <source
          media="(min-width: 1921px)"
          srcSet="/images/detail/detail_2_2560.svg"
        />

        {/* 1441px - 1920px */}
        <source
          media="(min-width: 1441px)"
          srcSet="/images/detail/detail_2_1920.svg"
        />

        {/* 1025px - 1440px */}
        <source
          media="(min-width: 1025px)"
          srcSet="/images/detail/detail_2_1440.svg"
        />

        {/* 769px - 1024px */}
        <source
          media="(min-width: 769px)"
          srcSet="/images/detail/detail_2_1024.svg"
        />

        {/* 426px - 768px */}
        <source
          media="(min-width: 426px)"
          srcSet="/images/detail/detail_2_768.svg"
        />

        {/* 321px - 425px */}
        <source
          media="(min-width: 321px)"
          srcSet="/images/detail/detail_2_425.svg"
        />

        {/* Fallback image (320px and below) */}
        <img
          src="/images/detail/detail_2_320.svg"
          alt="Detail image"
          className="w-full mx-auto"
        />
      </picture>
    </div>
  );
}
