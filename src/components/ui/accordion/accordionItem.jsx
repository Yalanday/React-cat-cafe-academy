import React, { useState, useEffect, useRef } from "react";
import { Button, Arrow, ContentWrapper, TitleWrapper, Wrapper } from "./styles";

function AccordionItem({
  titleComponent, // компонент который нужно использовать для отрисовки заголовка
  title, // содержимое заголовка
  text, // содержимое текста
  open, // открыт ли элемент
  textComponent, // компонент который нужно использовать для отрисовки текста
  onClick, // клик по кнопке раскрытия аккордеона
  isHtml, // является ли текст html разметкой
}) {
  const [height, setHeight] = useState(0);
  const TitleConponent = titleComponent;
  const TextComponent = textComponent || "div";
  const contentWrapper = useRef(null);

  useEffect(() => {
    setHeight(contentWrapper.current.offSetHeight);
  }, [text]);

  return (
    <>
      <TitleWrapper open={open}>
        {TitleConponent ? <TitleConponent>{title}</TitleConponent> : title}
        <Button
          type="button"
          onClick={onClick}
          title={`${open ? "Скраыть" : "Раскрыть"} описание`}
        >
          <Arrow open={open} />
        </Button>
      </TitleWrapper>
      <Wrapper height={height} open={open}>
        <ContentWrapper ref={contentWrapper}>
          {" "}
          {isHtml ? (
            <TextComponent dangerouslySetInnerHTML={{ __html: text }} />
          ) : (
            <TextComponent>{text}</TextComponent>
          )}
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

export default AccordionItem;
