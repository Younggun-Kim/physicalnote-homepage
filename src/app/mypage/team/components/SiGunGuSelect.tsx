'use client';

import React, { useEffect } from 'react';
import { useTeamEditStore } from '@/store';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import Dropdown from '@/app/components/dropdown/Dropdown';
import useGetSigungu from '@/app/utils/query/common/useGetSigungu';
import { siDoDtoListToOptionList } from '@/api/dto';
import useGetEmd from '@/app/utils/query/common/useGetEmd';

export default function SiGunGuSelect() {
  const { siDo, siGunGu, siGunGuList, emd, emdList } = useTeamEditStore((store) => store.state);
  const { onChangeSiGunGu, onChangeEmd, onChangeSiGunGuList, onChangeEmdList } = useTeamEditStore(
    (store) => store.actions,
  );
  const { data: sggData = [] } = useGetSigungu(siDo?.value);
  const { data: emdData = [] } = useGetEmd(siGunGu?.value);

  useEffect(() => {
    if (!siDo?.value) return;
    if (!sggData || sggData.length == 0) return;

    onChangeSiGunGuList(siDoDtoListToOptionList(sggData));
  }, [siDo, sggData]);

  useEffect(() => {
    if (!siGunGu?.value) return;
    if (!emdData || emdData.length == 0) return;

    onChangeEmdList(siDoDtoListToOptionList(emdData));
  }, [siGunGu, emdData]);

  return (
    <FieldWrapper>
      <FieldTitle text={''} />
      <div className="w-full flex items-center gap-4">
        <Dropdown
          className="flex-1"
          placeholder="시군구"
          options={siGunGuList}
          selectedOption={siGunGu}
          onSelect={onChangeSiGunGu}
        />
        <Dropdown
          className="flex-1"
          placeholder="읍면동"
          options={emdList}
          selectedOption={emd}
          onSelect={onChangeEmd}
        />
      </div>
    </FieldWrapper>
  );
}
