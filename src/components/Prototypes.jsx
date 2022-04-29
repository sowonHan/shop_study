import React from "react";
import useActions from "./../hooks/useAction";
import usePrototypes from "./../hooks/usePrototypes";

function Prototypes() {
  const prototypes = usePrototypes();
  const { addToOrder } = useActions();

  return (
    <main>
      <div className="prototypes">
        {prototypes.map((prototype) => {
          const { id, title, artist, desc, thumbnail, price, pieUrl } =
            prototype;
          const click = () => {
            addToOrder(id);
          };

          return (
            // 반복되는 리스트 데이터에는 반드시 key값 넣어주기!
            <div className="prototype" key={id}>
              <a href={pieUrl} target="_blank" rel="noreferrer">
                <div
                  style={{
                    padding: "25px 0 33px 0",
                  }}
                >
                  <video
                    autoPlay
                    loop
                    // 아이폰에서 자동재생 시 전체화면되는 것을 방지하는 속성(attribute) https://ossam5.tistory.com/155
                    playsInline
                    className="prototype__artwork prototype__edit"
                    src={thumbnail}
                    style={{
                      // https://developer.mozilla.org/ko/docs/Web/CSS/object-fit
                      objectFit: "contain",
                    }}
                  />
                </div>
              </a>
              <div className="prototype__body">
                <div className="prototype__title">
                  <div
                    className="btn btn--primary float--right"
                    onClick={click}
                  >
                    {/* https://developer.mozilla.org/ko/docs/Web/HTML/Element/i */}
                    <i className="icon icon--plus" />
                  </div>
                  {title}
                </div>
                <p className="prototype__price">${price}</p>
                <p className="prototype__desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Prototypes;
