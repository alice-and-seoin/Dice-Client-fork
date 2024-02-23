"use client";
import {
  Flex,
  TextField,
  Button,
  Box,
  Callout,
  Heading,
  Select,
} from "@radix-ui/themes";
import { MagnifyingGlassIcon, InfoCircledIcon } from "@radix-ui/react-icons";
export default function Home() {
  return (
    //TODO: 정렬 별점순 이메일 순
    <>
      <Flex direction={"column"} gap={"8"}>
        <Heading as="h1" className="text-center">
          보드게임 종합 검색
        </Heading>
        <Callout.Root>
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            현재 검색 가능한 필터들은 아래와 같습니다. 뭔가를 바라시겠지만,
            {"\n"}
            이것이 우리의 한계! 국비 끝나면 업데이트 할수도? 안할수도.. 헿
          </Callout.Text>
        </Callout.Root>
        <Flex gap="1" className="flex-col sm:flex-row">
          <TextField.Root>
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            <TextField.Input size="3" placeholder="검색" />
          </TextField.Root>
          <Select.Root defaultValue="game" size="3">
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="game">보드게임</Select.Item>
              <Select.Item value="cafe">보드게임 카페</Select.Item>
              <Select.Item value="gu">지역구</Select.Item>
              <Select.Item value="city">행정구역</Select.Item>
            </Select.Content>
          </Select.Root>
          <Button size="3">검색</Button>
        </Flex>

        <Box className="mt-10">test</Box>
      </Flex>
    </>
  );
}
