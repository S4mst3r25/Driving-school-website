const AboutUs = () => {
  return (
    <div className="m-16">
      <h1 className="text-5xl font-bold mb-6">За Нас</h1>
      <div className="flex flex-row w-full h-[70vh] space-x-20">
        <div className="w-full h-full">
          <p className="text-lg">УЧЕБЕН ЦЕНТЪР „Дани Драйв“ ЕООД е създаден през 2019 г., в следствие продължение на дългогодишния опит  като инструктор на ръководителя на учебния център Данаил Цветанов Димитров. Той е с 20 годишен опит в обучението и подготовката на кандидат водачи за управление на моторни превозни средства. Стремежът на екипа е да подготвят всички кандидат - водачи за съвестни шофьори, които умело да прилагат и спазват  Закона за движение по пътищата.</p>
        </div>
        <div className="flex flex-row max-w-[800px] space-x-6">
          <div className="p-4 border-4">
            <img src="https://neweralive.na/wp-content/uploads/2024/06/lloyd-sikeba.jpg" />
            <div className="flex items-center flex-col text-center mt-6">
              <h1 className="font-bold text-xl">Name Surname</h1>
              <p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolores maiores ea at nostrum doloremque fugit quia ipsa repellendus autem.</p>
            </div>
          </div>
          <div className="p-4 border-4">
            <img src="https://neweralive.na/wp-content/uploads/2024/06/lloyd-sikeba.jpg" />
            <div className="flex items-center flex-col text-center mt-6">
              <h1 className="font-bold text-xl">Name Surname</h1>
              <p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolores maiores ea at nostrum doloremque fugit quia ipsa repellendus autem.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs