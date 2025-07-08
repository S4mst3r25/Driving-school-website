const AboutUs = () => {
  return (
    <div className="m-16">
      <h1 className="text-5xl font-bold mb-6">За Нас</h1>
      <div className="flex flex-row w-full h-[70vh] space-x-20">
        <div className="w-full h-full">
          <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dicta blanditiis eius laboriosam ipsam illo at ipsa repellat laborum? Tempora, inventore voluptates dignissimos cupiditate unde sit, qui omnis saepe accusantium quam, suscipit explicabo commodi magni possimus quod veritatis porro molestias. Dicta doloribus maiores officia fugit nisi, quam excepturi, velit soluta hic perferendis ad alias corrupti suscipit, rem doloremque quaerat laudantium! Tempora, optio perferendis explicabo quo adipisci animi numquam nulla modi eligendi error ad veniam non tempore, sequi quas! Culpa, itaque? Accusantium amet repellendus nobis tempore. Quia corrupti ipsa ullam officia dolor, atque, officiis eligendi, sequi iste eum rem reprehenderit et.</p>
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