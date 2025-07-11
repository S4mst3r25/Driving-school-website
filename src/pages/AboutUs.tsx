import { motion } from "framer-motion"
import FadeInImage from "../components/FadeInImage"

const AboutUs = () => {
  return (
    <div className="m-16">
      <h1 className="text-5xl font-bold mb-6">За Нас</h1>
      <div className="flex flex-row w-full h-[70vh] space-x-20">
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          <p className="text-lg">УЧЕБЕН ЦЕНТЪР „Дани Драйв“ ЕООД е създаден през 2019 г., в следствие продължение на дългогодишния опит  като инструктор на ръководителя на учебния център Данаил Цветанов Димитров. Той е с 20 годишен опит в обучението и подготовката на кандидат водачи за управление на моторни превозни средства. Стремежът на екипа е да подготвят всички кандидат - водачи за съвестни шофьори, които умело да прилагат и спазват  Закона за движение по пътищата.</p>
        </motion.div>
        <div className="flex flex-row w-full h-full gap-6">
          {[
            {
              name: "Данаил Димитров",
              img: "/images/instructor-1.png",
              desc: "Ръководител на учебния център и главен инструктор. С 20 години опит в обучението на кандидат-шофьори"
            },
            {
              name: "Цветелина Цветкова",
              img: "/images/instructor-2.jpg",
              desc: "Преподавател по теория и инструктор по кормуване с опит в обучението на кандидат-шофьори"
            }
          ].map((person, idx) => {
            const borderWidth = 2
            const cardPolygon = "16,0 400,0 400,484 384,500 0,500 0,16"
            const imagePoints = "9.6,0 400,0 400,300 0,300 0,9.6"
            return (
              <motion.div
                key={person.name}
                className="relative flex flex-col items-center w-1/2 p-6 shadow-xl bg-transparent aspect-[4/5] min-w-[220px]"
                style={{ background: 'transparent' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.15 }}
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
                  <div className="w-full aspect-[4/3] relative">
                    <svg
                      className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none"
                      viewBox="0 0 400 300"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <clipPath id={`imgcut-about-${idx}`}>
                          <polygon points={imagePoints} />
                        </clipPath>
                      </defs>
                      <foreignObject x="0" y="0" width="400" height="300" clipPath={`url(#imgcut-about-${idx})`}>
                        <FadeInImage
                          src={person.img}
                          alt={person.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            transform: 'scale(1.08)',
                            objectPosition: 'center',
                          }}
                        />
                      </foreignObject>
                    </svg>
                  </div>
                  <div className="flex-1 flex flex-col w-full mt-6">
                    <h2 className="text-2xl font-bold mb-3 text-center text-white">{person.name}</h2>
                    <p className="text-white text-center text-lg">{person.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AboutUs