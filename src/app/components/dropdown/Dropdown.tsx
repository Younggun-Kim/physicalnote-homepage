// interface Props<T> {
//   className?: string;
//   placeholder: string;
//   options: DropDownOption<T>[];
//   selectedOption?: DropDownOption<T>;
//   onSelect?: (selected: DropDownOption<T>) => void;
//   hasRightBtn?: boolean;
//   rightBtnText?: string;
//   onRightClick?: () => void;
// }

export interface DropDownOption<T> {
  label: string;
  value: T;
}

// export const Dropdown = <T,>({
//   className = '',
//   placeholder,
//   options,
//   selectedOption,
//   onSelect,
//   hasRightBtn,
//   rightBtnText = '',
//   onRightClick,
// }: Props<T>) => {
//   const [isOpen, setIsOpen] = React.useState(false);
//
//   const hasSelected = () => {
//     return selectedOption != null;
//   };
//
//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };
//
//   const handleClose = () => {
//     setIsOpen(false);
//   };
//
//   const handleClick = (option: DropDownOption<T>) => {
//     handleClose();
//     onSelect && onSelect(option);
//   };
//
//   const icon = isOpen ? '/icons/chevron-up.svg' : '/icons/chevron-down.svg';
//
//   return (
//     <StyledContainer className={`relative rounded-full shadow-md  ${className}`}>
//       <div className="h-full flex justify-start items-center">
//         <div
//           className="flex-1 flex justify-start items-center"
//           onClick={handleToggle}
//         >
//           {!hasSelected() && <div className="name !text-gray1">{placeholder}</div>}
//           {hasSelected() && <div className="name">{selectedOption?.label}</div>}
//           <Image
//             src={icon}
//             alt=""
//             width={24}
//             height={24}
//             onClick={handleToggle}
//           />
//         </div>
//         {hasRightBtn && (
//           <Button
//             containerClassName="translate-x-[15px]"
//             className="py-[5] px-[8.5] bg-tertiary flex-shrink-0 !text-[0.75rem] !leading-[1.6]"
//             text={rightBtnText}
//             onClick={onRightClick}
//           />
//         )}
//       </div>
//       {isOpen && (
//         <div className="w-full max-h-60 overflow-y-scroll absolute left-0 top-16 rounded-[10px] shadow-md z-50 bg-white hover:cursor-pointer">
//           {options.map((option) => (
//             <DropdownItem<T>
//               key={option.label}
//               option={option}
//               isSelected={option.value == selectedOption?.value}
//               onClick={handleClick}
//             />
//           ))}
//         </div>
//       )}
//     </StyledContainer>
//   );
// };
// export default Dropdown;
//
// const StyledContainer = styled.div`
//   height: 40px;
//   padding: 0 20px;
//
//   & .name {
//     flex: 1;
//     color: black;
//     font-family: 'Noto Sans KR', sans-serif;
//     font-size: 12px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 160%; /* 19.2px */
//     letter-spacing: -0.6px;
//   }
//
//   @media (min-width: 769px) {
//     height: 48px;
//   }
//
//   @media (min-width: 426px) and (max-width: 768px) {
//   }
//
//   @media (min-width: 321px) and (max-width: 425px) {
//   }
// `;
