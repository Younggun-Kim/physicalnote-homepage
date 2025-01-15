'use client';

import React, { useEffect, useState } from 'react';
import { useTeamEditStore } from '@/store';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import Dropdown from '@/app/components/dropdown/Dropdown';
import useGetSigungu from '@/networks/query/common/useGetSigungu';
import useGetEmd from '@/networks/query/common/useGetEmd';
import { siDoDtoListToOptionList } from '@/networks/dto/common';
import useCoachInfoStore from '@/store/coachInfoStore';

export default function SiGunGuSelect() {
  const { siDo, siGunGu, siGunGuList, emd, emdList } = useTeamEditStore((store) => store.state);
  const {
    onChangeSiGunGu,
    onChangeEmd,
    onChangeSiGunGuList,
    onChangeEmdList,
    onChangeSiGunGuByLabel,
    onChangeEmdByLabel,
  } = useTeamEditStore((store) => store.actions);
  const { data: sggData = [] } = useGetSigungu(siDo?.value);
  const { data: emdData = [] } = useGetEmd(siGunGu?.value);
  const [isSggLoading, setIsSggLoading] = useState(true);
  const [isEmdLoading, setIsEmdLoading] = useState(true);
  const { coachInfo } = useCoachInfoStore((store) => store.state);

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

  useEffect(() => {
    if (isSggLoading && siGunGuList.length > 0 && coachInfo?.gu != undefined) {
      onChangeSiGunGuByLabel(coachInfo.gu);
      setIsSggLoading(false);
    }
  }, [siGunGuList, coachInfo]);

  useEffect(() => {
    if (isEmdLoading && emdList.length > 0 && coachInfo?.dong != undefined) {
      onChangeEmdByLabel(coachInfo.dong);
      setIsEmdLoading(false);
    }
  }, [emdList, coachInfo]);

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
