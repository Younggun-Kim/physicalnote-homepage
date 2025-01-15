'use client';

import React, { useEffect, useState } from 'react';
import { useTeamEditStore } from '@/store';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import Dropdown from '@/app/components/dropdown/Dropdown';
import useGetSido from '@/networks/query/common/useGetSido';
import { siDoDtoListToOptionList } from '@/networks/dto/common';
import useCoachInfoStore from '@/store/coachInfoStore';

export default function SidoSelect() {
  const { siDo, siDoList } = useTeamEditStore((store) => store.state);
  const { onChangeSiDo, onChangeSiDoByLabel, onChangeSiDoList } = useTeamEditStore((store) => store.actions);
  const { data: sidoData = [] } = useGetSido();
  const [isLoading, setIsLoading] = useState(true);
  const { coachInfo } = useCoachInfoStore((store) => store.state);

  useEffect(() => {
    if (!sidoData) return;
    onChangeSiDoList(siDoDtoListToOptionList(sidoData));
  }, [sidoData]);

  useEffect(() => {
    if (isLoading && coachInfo?.si != undefined) {
      onChangeSiDoByLabel(coachInfo?.si ?? '');
      setIsLoading(false);
    }
  }, [siDoList, coachInfo]);

  return (
    <FieldWrapper>
      <FieldTitle text={'지역'} />
      <Dropdown
        className="w-full"
        placeholder="시도"
        options={siDoList}
        onSelect={onChangeSiDo}
        selectedOption={siDo}
      />
    </FieldWrapper>
  );
}
