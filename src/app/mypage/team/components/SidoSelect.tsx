'use client';

import React, { useEffect } from 'react';
import { useTeamEditStore } from '@/store';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import Dropdown from '@/app/components/dropdown/Dropdown';
import useGetSido from '@/app/networks/query/common/useGetSido';
import { siDoDtoListToOptionList } from '@/app/networks/dto/common';

export default function SidoSelect() {
  const { siDo, siDoList } = useTeamEditStore((store) => store.state);
  const { onChangeSiDo, onChangeSiDoList } = useTeamEditStore((store) => store.actions);
  const { data: sidoData = [] } = useGetSido();

  useEffect(() => {
    onChangeSiDoList(siDoDtoListToOptionList(sidoData));
  }, []);

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
