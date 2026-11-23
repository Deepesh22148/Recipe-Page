import Image from "next/image";

export default function Home() {
  const prepartionList = [
    {
      title: "Total",
      description: "Approximately 10 minutes",
    },
    {
      title: "Preparation",
      description: "5 minutes",
    },
    {
      title: "Cooking",
      description: "5 minutes",
    },
  ];
  const ingredientList = [
    {
      item: 1,
      name: "2-3 large eggs",
    },
    {
      item: 2,
      name: "Salt, to taste",
    },
    {
      item: 3,
      name: "Pepper, to taste",
    },
    {
      item: 4,
      name: "1 tablespoon of butter or oil",
    },
    {
      item: 5,
      name: "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
    },
  ];

  const instructions = [
    {
      heading: "Beat the eggs",
      description:
        "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      heading: "Heat the pan",
      description:
        "Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      heading: "Cook the omelette",
      description:
        "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      heading: "Add fillings (optional)",
      description:
        "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      heading: "Fold and serve",
      description:
        "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      heading: "Enjoy",
      description: "Serve hot, with additional salt and pepper if needed.",
    },
  ];

  const nutritionList = [
    {
      name: "Calories",
      cal: "277kcal",
    },

    {
      name: "Carbs",
      cal: "0g",
    },
    {
      name: "Protein",
      cal: "20g",
    },
    {
      name: "Fat",
      cal: "22g",
    },
  ];

  return (
    <main className="font-outfit h-fit min-h-screen max-w-screen bg-[#f3e6d8] flex items-center justify-center p-0 text-gray-600 md:p-20">
      <div className="flex flex-col max-w-90 md:max-w-120 bg-white p-6 rounded-xl gap-4">
        <div>
          <Image
            src="/resources/image-omelette.jpeg"
            alt="Omelette served on a plate"
            loading="eager"
            width={656}
            height={300}
            className="h-auto w-full rounded-xl"
          />
        </div>
        <h1 className="font-young-serif text-xl text-black md:text-2xl">
          Simple Omelette Recipe
        </h1>
        <p className="text-[0.86rem] md:text-[0.65rem] text-gray-600">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <div className="bg-[#fff5fa] p-4 rounded-xl  flex flex-col gap-2">
          <h2 className="text-sm text-[#7b284f]">Preparation time</h2>
          <ul className="list-disc flex flex-col gap-1.5 ml-5 marker:text-[#7b284f]">
            {prepartionList.map((item, idx) => (
              <li key={idx} className="md:text-xs text-[0.85rem] text-wrap tracking-wider ">
                <span>
                  <span className="font-bold">{item.title} : </span>
                  {item.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="heading">Ingredients</h2>
          <ul className="list-disc flex flex-col gap-1.5  ml-5 marker:text-[#854632] text-sm md:text-xs">
            {ingredientList.map((item, idx) => (
              <li key={idx}>{item.name}</li>
            ))}
          </ul>
        </div>

        <div className="border-b border-gray-300" />
        <div className="flex flex-col gap-2">
          <h2 className="heading">Instructions</h2>
          <ul className="list-decimal flex flex-col gap-1.5  ml-5 marker:text-[#854632] text-[0.9rem] md:text-[0.7rem]">
            {instructions.map((item, idx) => (
              <li key={idx}>
                <div>
                  <span className="font-bold">{item.heading} : </span>
                  <span>{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-b border-gray-300" />
        <div className="flex flex-col gap-2 text-gray-600">
          <h2 className="heading">Nutrition</h2>
          <div>
            <div className="text-[0.9rem] md:text-[0.7rem] mb-2">
              The table below shows nutritional values per serving without the
              additional fillings.
            </div>
            <div className="text-shadow-gray-500">
              {nutritionList.map((nutrition, idx) => (
                <div className="flex min-h-5 border-b  gap-2 " key={idx}>
                  <div className="flex w-1/2 justify-between items-center">
                    <div className="ml-4 md:text-xs text-sm">
                      {nutrition.name}
                    </div>
                    <div className="text-end max-w-5 text-[#854632] font-bold">
                      {nutrition.cal}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
