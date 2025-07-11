const AboutUs = () => {
  return (
    <div className="m-16">
      <h1 className="text-5xl font-bold mb-6">За Нас</h1>
      <div className="flex flex-row w-full h-[70vh] space-x-20">
        <div className="w-full h-full">
          <p className="text-lg">УЧЕБЕН ЦЕНТЪР „Дани Драйв“ ЕООД е създаден през 2019 г., в следствие продължение на дългогодишния опит  като инструктор на ръководителя на учебния център Данаил Цветанов Димитров. Той е с 20 годишен опит в обучението и подготовката на кандидат водачи за управление на моторни превозни средства. Стремежът на екипа е да подготвят всички кандидат - водачи за съвестни шофьори, които умело да прилагат и спазват  Закона за движение по пътищата.</p>
        </div>
        <div className="flex flex-row w-full h-full gap-6">
          {[
            {
              name: "Данаил Димитров",
              img: "/images/placeholder.jpg",
              desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolores maiores ea at nostrum doloremque fugit quia ipsa repellendus autem."
            },
            {
              name: "Цветелина Цветкова",
              img: "/images/placeholder.jpg",
              desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolores maiores ea at nostrum doloremque fugit quia ipsa repellendus autem."
            }
          ].map((person, idx) => {
            const borderWidth = 2
            const cardPolygon = "16,0 400,0 400,484 384,500 0,500 0,16"
            const imagePoints = "9.6,0 400,0 400,300 0,300 0,9.6"
            return (
              <div
                key={person.name}
                className="relative flex flex-col items-center w-1/2 h-full p-6 shadow-xl bg-transparent"
                style={{ background: 'transparent' }}
              >
                <svg
                  className="absolute inset-0 w-full h-full z-0 pointer-events-none"
                  viewBox="0 0 400 500"
                  preserveAspectRatio="none"
                >
                  <polygon
                    points={cardPolygon}
                    fill="black"
                    stroke="white"
                    strokeWidth={borderWidth}
                  />
                </svg>
                <div className="relative z-10 flex flex-col items-center w-full h-full">
                  <svg
                    className="absolute left-0 top-0 w-full h-[300px] z-0 pointer-events-none"
                    viewBox="0 0 400 300"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <clipPath id={`imgcut-about-${idx}`}>
                        <polygon points={imagePoints} />
                      </clipPath>
                    </defs>
                    <image
                      href={person.img}
                      x="0"
                      y="0"
                      width="400"
                      height="300"
                      preserveAspectRatio="xMidYMid slice"
                      clipPath={`url(#imgcut-about-${idx})`}
                    />
                  </svg>
                  <div className="h-[300px] mb-8" />
                  <h2 className="text-2xl font-bold mb-3 text-center text-white">{person.name}</h2>
                  <p className="text-white text-center text-lg">{person.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AboutUs