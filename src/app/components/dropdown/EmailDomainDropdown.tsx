//
// interface Props {
//   onChange: (value: string) => void;
// }
//
// export const EmailDomainDropdown = ({ onChange }: Props) => {
//   const [selectedOption, setSelectedOption] = React.useState<DropDownOption<string>>();
//   const options: DropDownOption<string>[] = [
//     { value: 'naver.com', label: 'naver.com' },
//     { value: 'kakao.com', label: 'kakao.com' },
//     { value: 'google.com', label: 'google.com' },
//     { value: '직접입력', label: '직접입력' },
//   ];
//
//   const handleSelect = (option: DropDownOption<string>) => {
//     setSelectedOption(option);
//     onChange(option.value);
//   };
//   return (
//     <Dropdown<string>
//       options={options}
//       placeholder="선택"
//       selectedOption={selectedOption}
//       onSelect={handleSelect}
//     />
//   );
// };
//
// export default EmailDomainDropdown;
