import { works } from '@/lib/workData';
import { useUiStore } from '@/modules/zustand/ui';
import { AnimatePresence, motion } from 'motion/react';
import React from 'react';
import { ScrollArea, ScrollBar } from './scroll-area';
import { Button } from './button';
import { cn } from '@/lib/utils';

type WorkModalProps = { idx: number; onClose: () => void };

export default function WorkModal({ idx, onClose }: WorkModalProps) {
  const { isMobile } = useUiStore();
  return (
    <div
      className="px-3 md:px-4 xl:px-0 top-0 left-0 right-0 fixed z-50 flex"
      data-lenis-prevent="true"
    >
      <AnimatePresence>
        <motion.div
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          className="absolute left-0 h-screen w-full bg-black/20 backdrop-grayscale-100"
        />
      </AnimatePresence>
      <motion.div
        layoutId={`content-${idx}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="relative z-[70] p-2 bg-white max-w-5xl self-end mt-[7.5dvh] md:mt-[5vh] w-full h-[91dvh] md:h-[90vh] mx-auto shadow-xl rounded-xl"
      >
        <ScrollArea className="w-full px-6 antialiased h-full">
          <div className="flex flex-col mt-40">
            <p className="text-center text-xl mb-4">2024</p>
            <h1
              className="leading-none text-center break-keep text-nowrap font-semibold md:font-medium uppercase"
              style={{
                fontSize: (isMobile ? 500 : 900) / Math.max(works[idx].title.length, 1),
              }}
            >
              <span>
                {works[idx].title.replaceAll('-', '-').replace(/\b\w/g, char => char.toUpperCase())}
              </span>
            </h1>
            <p className="text-lg text-foreground/75 leading-relaxed break-keep text-center font-medium pb-18 pt-12">
              금융 데이터 플랫폼의 데이터 수집, 스트리밍, 관리의 모든 과정을 개발하고
              <br /> 판매모델을 설계하였습니다.
            </p>
          </div>
          <div className="w-full h-px bg-foreground/85" />
          <div className="flex gap-12 mt-12 mb-12">
            <div className="bg-[#F7F8FA] rounded-xl overflow-hidden h-[500px] flex-1 flex justify-center items-center">
              <motion.img
                draggable={false}
                src={works[idx].image}
                alt="a"
                className="h-full transition-all object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="flex-1 text-xl text-foreground/85 leading-relaxed break-keep">
                Workmate의 CEO이자 창립자는 제품이 단지 그의 머릿속 아이디어에 불과했을 때 디자이너와
                협업할 필요가 있었습니다.
                <br />
                <br /> 우리는 초기 프로토타입을 함께 작업하여 1천만 달러의 시드 라운드를 확보하는 데
                도움을 주었고, 제품의 여러 버전을 반복적으로 개선했습니다.
                <br />
                <br /> 디자인을 사용하여 그의 사고를 가속화하고, 가정을 검증하며, 초기 단계에서 빠르게
                방향을 전환할 수 있었습니다.
              </p>
            </div>
          </div>
          <ul className="flex-1 space-y-3 mt-8">
            <li className="flex flex-col gap-0.5">
              <span className="text-[16.5px] font-semibold">타입:</span>{' '}
              <span className="text-base ml">기획 1 / 디자인 1 / 개발 1</span>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="text-[16.5px] font-semibold">역할:</span>{' '}
              <span className="text-base ml">기획</span>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="text-[16.5px] font-semibold">기간:</span>{' '}
              <span className="text-base ml">기획 1 / 디자인 1 / 개발 1</span>
            </li>{' '}
            <li className="flex flex-col gap-0.5">
              <span className="text-[16.5px] font-semibold">스택:</span>{' '}
              <span className="text-base ml">기획 1 / 디자인 1 / 개발 1</span>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="text-[16.5px] font-semibold">라이브 링크:</span>{' '}
              <span className="text-base ml">기획 1 / 디자인 1 / 개발 1</span>
            </li>
          </ul>
          <div className="flex gap-12 mt-12 mb-12">
            <div className="bg-[#F7F8FA] rounded-xl overflow-hidden h-[500px] flex-1 flex justify-center items-center">
              <motion.img
                draggable={false}
                src={works[idx].image}
                alt="a"
                className="h-full transition-all object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="flex-1 text-xl text-foreground/85 leading-relaxed break-keep">
                Workmate의 CEO이자 창립자는 제품이 단지 그의 머릿속 아이디어에 불과했을 때 디자이너와
                협업할 필요가 있었습니다.
                <br />
                <br /> 우리는 초기 프로토타입을 함께 작업하여 1천만 달러의 시드 라운드를 확보하는 데
                도움을 주었고, 제품의 여러 버전을 반복적으로 개선했습니다.
                <br />
                <br /> 디자인을 사용하여 그의 사고를 가속화하고, 가정을 검증하며, 초기 단계에서 빠르게
                방향을 전환할 수 있었습니다.
              </p>
            </div>
          </div>

          <div className="md:hidden h-12" />

          <ScrollBar />
        </ScrollArea>
        <Button
          onClick={onClose}
          size="lg"
          className={cn('rounded-lg text-center md:hidden absolute bottom-3 left-3 right-3')}
        >
          <p className="relative text-nowrap">닫기</p>
        </Button>
      </motion.div>
    </div>
  );
}
