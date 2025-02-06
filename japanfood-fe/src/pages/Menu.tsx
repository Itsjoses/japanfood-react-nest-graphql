import { useEffect, useState } from "react";
import Header from "../components/layouts/Header";
import DynamicLayout from "../components/layouts/DynamicLayout";
import ProductCard from "../components/cards/ProductCard";
import { apiFood } from "../api/food";
import { useQuery, gql } from "@apollo/client";

interface FoodType {
  title: string;
  price: number;
  description: string;
  image: string;
}

const GET_FOOD = gql`
  query getFood($foodType: String!) {
    findSelectedFood(findFoodInput: $foodType) {
      name
      price
      image
      foodType {
        name
      }
    }
  }
`;

export default function Menu() {
  const [category, setCategory] = useState<string>("Light Food");

  const { loading, error, data } = useQuery(GET_FOOD, {
    variables: { foodType: category }, // Pass the variable here
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    console.log("testing", data);
  }, [data]);

  const handleChange = (categoryName: string) => {
    setCategory(categoryName);
  };

  return (
    <div>
      <Header menu="Menu" />
      <div className="bg-sushi-packet bg-cover bg-no-repeat bg-center relative before:w-full before:absolute before:h-full before:z-10 z-20 before:bg-gradient-to-b before:from-black before:to-transparent before:from-5% before:to-70%">
        <div className="p-28 z-50 relative flex justify-center items-center text-white flex-col">
          <div className="w-2/5 text-center flex flex-col gap-8">
            <p className="lg:text-5xl md:text-4xl text-3xl font-Merienda">
              MENU
            </p>
            <p className="lg:text-base md:text-sm text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              laudantium dicta quibusdam illum quas impedit tempore totam,
              consectetur ea delectus velit? Deleniti exercitationem odio illum
              quas sunt corrupti. Mollitia, quibusdam?
            </p>
          </div>
        </div>
      </div>

      <DynamicLayout border={false}>
        <div className="my-20">
          <div className=" flex justify-center items-center xl:gap-28 lg:gap-24 md:gap-16 gap-12 my-20">
            <p
              className={
                category === "Light Food"
                  ? "text-orange-500"
                  : "" + "hover:text-custom-orange hover:cursor-pointer"
              }
              onClick={() => handleChange("Light Food")}
            >
              Light Food
            </p>
            <p
              className={
                category === "Medium Food"
                  ? "text-orange-500"
                  : "" + "hover:text-custom-orange hover:cursor-pointer"
              }
              onClick={() => handleChange("Medium Food")}
            >
              Medium Food
            </p>
            <p
              className={
                category === "Heavy Food"
                  ? "text-orange-500"
                  : "" + "hover:text-custom-orange hover:cursor-pointer"
              }
              onClick={() => handleChange("Heavy Food")}
            >
              Heavy Food
            </p>
          </div>
          <div className="flex justify-center">
            <div className="xl:w-8/12 lg:w-9/12 md:w-11/12 w-11/12">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {data &&
                  data.findSelectedFood.map((data: any) => (
                    <ProductCard
                      background={data.image}
                      title={data.name}
                      price={data.price}
                    >
                      {"This is Food Description"}
                    </ProductCard>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </DynamicLayout>
    </div>
  );
}
