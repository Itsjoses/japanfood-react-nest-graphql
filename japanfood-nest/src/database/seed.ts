import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();

async function seedingFoods() {
    const foods = [
        {
            name: 'soto banjar',
            price: 10000,
            image: 'https://www.maggi.id/sites/default/files/styles/image_744_x_419/public/srh_recipes/1d433617305f7c0ff167e223d6027eba.jpg?h=4f5b30f1&itok=ExTz_LQk',
            foodTypeId: 2,
        },
        {
            name: 'steak wagyu',
            price: 50000,
            image: 'https://www.masakapahariini.com/wp-content/uploads/2022/07/tingkat-kematangan-steak-besar.jpg',
            foodTypeId: 2,
        },
        {
            name: 'sushi salmon',
            price: 30000,
            image: 'https://img-global.cpcdn.com/recipes/c2e8eb590e6b5eed/400x400cq70/photo.jpg',
            foodTypeId: 2,
        },
        {
            name: 'Sake Jepang',
            price: 20000,
            image: 'https://redandwhiteshops.com/wp-content/uploads/2022/11/Culture-and-Drinking-Traditional-Japanese-Sake-Etiquette-1024x768.jpg',
            foodTypeId: 2,
        },
        {
            name: 'Nasi Goreng',
            price: 25000,
            image: 'https://img.kurio.network/ewrCJ9eRNpljU-80vrqWDQkN7o4=/1200x675/filters:quality(80)/https://kurio-img.kurioapps.com/20/10/10/a7e9eaa0-1c22-42b0-a11f-0a5ad1d30126.jpeg',
            foodTypeId: 2,
        },
        {
            name: 'Bakso Sehat',
            price: 30000,
            image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/9c4d9429-588b-46ab-8394-d65f0f0da0ce_file20191001-17424-1041cfs.jpeg?auto=format',
            foodTypeId: 2,
        },
        {
            name: 'Bakmie abun',
            price: 25000,
            image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/e075ce73-ba86-453d-bad5-494a83264ca1_Go-Biz_20210524_114341.jpeg?auto=format',
            foodTypeId: 2,
        },
        {
            name: 'Sate Senayan',
            price: 40000,
            image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/427e5bbc-5a05-43c7-8ad6-1759b2ba775f_brand-image_1597798729063.jpg?auto=format',
            foodTypeId: 1,
        },
        {
            name: 'Rujak Bukan Sultan',
            price: 19000,
            image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/445399eb-14ea-454b-9d00-8eecf509389c_Go-Biz_20241110_234426.jpeg?auto=format',
            foodTypeId: 1,
        },
        {
            name: 'Ayam Goreng Ternate',
            price: 13000,
            image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/bf40f18b-81d5-493a-8b0c-49864f720227_Go-Biz_20240701_215029.jpeg?auto=format',
            foodTypeId: 1,
        },
        {
            name: 'soto banjar',
            price: 10000,
            image: 'https://www.maggi.id/sites/default/files/styles/image_744_x_419/public/srh_recipes/1d433617305f7c0ff167e223d6027eba.jpg?h=4f5b30f1&itok=ExTz_LQk',
            foodTypeId: 1,
        },
        {
            name: 'steak wagyu',
            price: 50000,
            image: 'https://www.masakapahariini.com/wp-content/uploads/2022/07/tingkat-kematangan-steak-besar.jpg',
            foodTypeId: 1,
        },
        {
            name: 'sushi salmon',
            price: 30000,
            image: 'https://img-global.cpcdn.com/recipes/c2e8eb590e6b5eed/400x400cq70/photo.jpg',
            foodTypeId: 3,
        },
        {
            name: 'Sake Jepang',
            price: 20000,
            image: 'https://redandwhiteshops.com/wp-content/uploads/2022/11/Culture-and-Drinking-Traditional-Japanese-Sake-Etiquette-1024x768.jpg',
            foodTypeId: 3,
        },
        {
            name: 'Nasi Goreng',
            price: 25000,
            image: 'https://img.kurio.network/ewrCJ9eRNpljU-80vrqWDQkN7o4=/1200x675/filters:quality(80)/https://kurio-img.kurioapps.com/20/10/10/a7e9eaa0-1c22-42b0-a11f-0a5ad1d30126.jpeg',
            foodTypeId: 3,
        },
        {
            name: 'Bakso Sehat',
            price: 30000,
            image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/9c4d9429-588b-46ab-8394-d65f0f0da0ce_file20191001-17424-1041cfs.jpeg?auto=format',
            foodTypeId: 3,
        },
        {
            name: 'Bakmie abun',
            price: 25000,
            image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/e075ce73-ba86-453d-bad5-494a83264ca1_Go-Biz_20210524_114341.jpeg?auto=format',
            foodTypeId: 3,
        },
        {
            name: 'Sate Senayan',
            price: 40000,
            image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/427e5bbc-5a05-43c7-8ad6-1759b2ba775f_brand-image_1597798729063.jpg?auto=format',
            foodTypeId: 3,
        },
        {
            name: 'Rujak Bukan Sultan',
            price: 19000,
            image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/445399eb-14ea-454b-9d00-8eecf509389c_Go-Biz_20241110_234426.jpeg?auto=format',
            foodTypeId: 3,
        },
        {
            name: 'Ayam Goreng Ternate',
            price: 13000,
            image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/bf40f18b-81d5-493a-8b0c-49864f720227_Go-Biz_20240701_215029.jpeg?auto=format',
            foodTypeId: 3,
        },
    ];

    const data = foods.map(async (createFoodInput) => {
        const { name, price, image, foodTypeId } = createFoodInput;
        await prisma.food.create({
            data: {
                name,
                price,
                image,
                foodType: {
                    connect: {
                        id: foodTypeId,
                    },
                },
            },
            include: {
                foodType: true,
            },
        });
    });
}

async function seedingFoodType() {
    const foodType = [
        {
            name: 'Heavy Food',
        },
        {
            name: 'Light Food',
        },
        {
            name: 'Medium Food',
        },
    ];

    await prisma.foodType.createMany({
        data: foodType,
    });
}

async function seedingUser() {
    const username = 'jose';
    const password = 'jose1234';
    const email = 'josesusanto@gmail.com';
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
        },
    });
}

async function main() {
    await seedingUser();
    await seedingFoodType();
    await seedingFoods();
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        await prisma.$disconnect();
        process.exit(1);
    });
