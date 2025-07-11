import CategoryCard from "../components/CategoryCard"

const courses = [
	{
		title: "Категория A",
		img: "/images/a-category.jpg",
		desc: "Курс за мотоциклети категория A с индивидуален подход и безопасност",
		children: (
			<div className="text-left">
				<p className="text-xl">Тази категория ви дава право да управлявате мотоциклети и триколесни моторни превозни средства.</p>
				<h3 className="mt-10 font-bold text-2xl">Теоретично обучение</h3>
				<p>- 1 учебен час – Общо устройство на мотоциклета</p>
				<h2 className="mt-6 font-bold text-2xl">Практическо обучение</h2>
				<p>- 20 учебни часа кормуване</p>
				<ul className="list-disc pl-6">
					<li>Изпълнение на основни елементи на полигон</li>
					<li>Управление в градски условия</li>
					<li>Научаване и изпълнение на правилата за движение по пътищата</li>
					<li>Нощно кормуване</li>
				</ul>
				<p className="mt-20 text-center">График за кормуване се изготвя с инструктор съобразно неговите и вашите възможности.</p>
			</div>
		)
	},
	{
		title: "Категория B",
		img: "/images/b-category.jpg",
		desc: "Обучение за шофьорска книжка категория B с модерни автомобили и опитни инструктори",
		children: (
			<div className="text-left">
				<p className="text-xl">Тази категория ви дава право да управлявате леки автомобили.</p>
				<h3 className="mt-6 font-bold text-2xl">Теоретично обучение</h3>
				<p>- 38 учебени часа</p>
				<ul className="list-disc pl-6">
					<li>Общо устройство на автомобила</li>
					<li>Правила за движение по пътищата</li>
					<li>Пътна безопасност</li>
				</ul>
				<h2 className="mt-6 font-bold text-2xl">Практическо обучение</h2>
				<p>- 31 учебни часа</p>
				<ul className="list-disc pl-6">
					<li>Придобиване на навици за работа с уредите за управление на автомобила</li>
					<li>Обучение на учебна площадка (полигон) за потегляне, спиране, маневри и паркиране</li>
					<li>Научаване и изпълнение на правилата за движение по пътищата</li>
					<li>Реални навици за управление на автомобил при интензивно градско движение, извънградски условия</li>
				</ul>
				<h2 className="mt-6 font-bold text-2xl">Необходими документи</h2>
				<ul className="list-disc pl-6">
					<li>Лична карта</li>
					<li>Медицинско свидетелство за съответната категория</li>
				</ul>
				<p className="text-gray-400">За кат. В78 е същото *</p>
				<p className="mt-6 text-center">График за кормуване се изготвя с инструктор съобразно неговите и вашите възможности.</p>
			</div>
		)
	},
	{
		title: "Категория C",
		img: "/images/c-category.jpg",
		desc: "Обучение за товарни автомобили категория C с професионални инструктори",
		children: (
			<div className="text-left">
				<p className="text-xl">Тези категории ви дават право да управлявате товарни автомобили с тегло включително и това на товара над 3,5 тона и до 8+1 места за сядане</p>
				<h3 className="mt-10 font-bold text-2xl">Теоретично обучение</h3>
				<p>Лекции и материали в учебния кабинет</p>
				<h2 className="mt-6 font-bold text-2xl">Практическо обучение</h2>
				<p>- 20 учебни часа</p>
				<h2 className="mt-6 font-bold text-2xl">Необходими документи</h2>
				<ul className="list-disc pl-6">
					<li>Лична карта</li>
					<li>Медицинско свидетелство за съответната категория</li>
					<li>Удостоверение за психологическа годност (психо-тест)</li>
					<li>Свидетелство за управление на МПС категория B</li>
					<li>Документ за професионална компетентност, ако нямате навършени 21 години</li>
				</ul>
				<p className="mt-6 text-center">График за кормуване се изготвя с инструктор съобразно неговите и вашите възможности.</p>
			</div>
		)
	},
	{
		title: "Категория C+E",
		img: "/images/ce-category.webp",
		desc: "Курс за управление на композиции от превозни средства категория C+E",
		children: (
			<div className="text-left">
				<p className="text-xl">Тази категория ви дава право да управлявате товарен автомобил категория С с ремарке (хенгер) или влекач с полуремарке (прицеп).</p>
				<h3 className="mt-10 font-bold text-2xl">Теоретично обучение</h3>
				<p>- 20 учебни часа</p>
				<h2 className="mt-6 font-bold text-2xl">Практическо обучение</h2>
				<p>- 16 учебни часа</p>
				<ul className="list-disc pl-6">
					<li>Обучение на полигон</li>
					<li>Придобиване на умения за управление на МПС с ремарке с маса над 750 кг.</li>
				</ul>
				<h2 className="mt-6 font-bold text-2xl">Необходими документи</h2>
				<ul className="list-disc pl-6">
					<li>Лична карта</li>
					<li>Медицинско свидетелство за съответната категория</li>
					<li>Свидетелство за управление категория C</li>
				</ul>
				<p className="mt-20 text-center">График за кормуване се изготвя с инструктор съобразно неговите и вашите възможности.</p>
			</div>
		)
	}
]

const Courses = () => {
	return (
		<div className="p-16">
			<h1 className="text-5xl font-bold mb-12 md:mb-0 md:mr-12 whitespace-nowrap self-center md:self-start">
				Нашите Курсове
			</h1>
			<div className="flex flex-row gap-8 items-center justify-center mt-20">
				{courses.map((course, idx) => (
					<CategoryCard key={idx} title={course.title} img={course.img} desc={course.desc}>
						{course.children}
					</CategoryCard>
				))}
			</div>
		</div>
	)
}

export default Courses;