import { Key } from 'react';

import { Program } from '../../data/programs';
import { useWindowDimensions } from '../hooks/useWindowDimension';

const Desktop = ({ ...programData }: Program) => {
  return (
    <div className="min-w-[750px]">
      <div className="flex flex-row justify-around text-white bg-blue-800 text-center text-base rounded-t-xl whitespace-nowrap font-bold py-6 px-12 gap-28">
        <p>Kelas terdekat dimulai</p>
        <p className="min-w-[250px]">
          {programData.schedule.main.title}
          <br />
          {'title2' in programData.schedule.main
            ? programData.schedule.main.title2
            : ''}
        </p>
        {programData.schedule.secondary != null ? (
          <p>
            {programData.schedule.secondary.title}
            <br />
            {programData.schedule.secondary.title2}
          </p>
        ) : (
          ''
        )}
      </div>
      <div className="flex flex-row  justify-around text-center text-base whitespace-nowrap font-bold py-6 px-12 gap-28 shadow-md rounded-b-xl">
        <div className="text-center">
          <p>{programData.schedule.nearest}</p>
        </div>
        <div className="flex flex-col text-left">
          {programData.schedule.main.detail.map(
            (detail: { day: string; time: string }, index: Key) => (
              <p key={index}>
                {detail.day}: <span className="font-normal">{detail.time}</span>
              </p>
            )
          )}
        </div>
        {programData.schedule.secondary != null ? (
          <div className="flex flex-col text-center">
            {programData.schedule.secondary.detail.map(
              (
                detail: { day: string; time: string; option?: string },
                index: Key
              ) => (
                <p key={index}>
                  {detail.day}:{' '}
                  <span className="font-normal">
                    {detail.time} <br />
                    {detail.option}
                  </span>
                </p>
              )
            )}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

const Mobile = ({ ...programData }: Program) => {
  return (
    <div className="w-full">
      <div className="flex flex-col text-left text-xs rounded-xl whitespace-nowrap font-bold py-6 px-6 gap-5 shadow-md mb-10">
        <div className="">
          <p className="mb-1">Kelas terdekat dimulai</p>
          <p className="text-neutral-500">{programData.schedule.nearest}</p>
        </div>
        <div className="border border-neutral-100"></div>
        <div>
          <p className="mb-1">
            {programData.schedule.main.title}
            <br />
            {'title2' in programData.schedule.main
              ? programData.schedule.main.title2
              : ''}
          </p>
          {programData.schedule.main.detail.map(
            (detail: { day: string; time: string }, index: Key) => (
              <p key={index} className="text-neutral-500">
                {detail.day}: <span className="font-normal">{detail.time}</span>
              </p>
            )
          )}
        </div>
        {programData.schedule.secondary != null ? (
          <div>
            <p className="mb-1">
              {programData.schedule.secondary.title}
              <br />
              {programData.schedule.secondary.title2}
            </p>
            {programData.schedule.secondary.detail.map(
              (detail: { day: string; time: string }, index: Key) => (
                <p key={index} className="text-neutral-500">
                  {detail.day}:{' '}
                  <span className="font-normal">{detail.time}</span>
                </p>
              )
            )}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

function ProgramSchedule({ ...programData }: Program) {
  return (
    <>
      <div
        id="jadwalkelas"
        className="flex flex-col lg:pt-32 lg:-mt-16 pt-16 -mt-8  items-center lg:text-center px-3.5"
      >
        <h2 className="lg:text-2xl text-base font-bold lg:mb-10 mb-3.5 lg:text-center text-left lg:text-black text-blue-800 lg:self-center self-start">
          Jadwal Kelas
        </h2>
        {useWindowDimensions().width! > 640 ? (
          <Desktop {...programData} />
        ) : (
          <Mobile {...programData} />
        )}
      </div>
    </>
  );
}

export default ProgramSchedule;
