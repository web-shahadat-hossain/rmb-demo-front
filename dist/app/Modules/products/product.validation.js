"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidation = exports.createProductZodSchema = void 0;
const zod_1 = require("zod");
exports.createProductZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is required' }),
        price: zod_1.z.string({ required_error: 'Price is required' }),
        description: zod_1.z.string({ required_error: 'Description is required' }),
        category: zod_1.z.string({ required_error: 'Category is required' }),
        subCategory: zod_1.z.string().optional(),
        image: zod_1.z.string({ required_error: 'Images is required' }),
        stock: zod_1.z.number({ required_error: 'Stock is required' }),
        color: zod_1.z.array(zod_1.z.string()).optional(),
        feature: zod_1.z.array(zod_1.z.string()).optional(),
        discount: zod_1.z.number().optional(),
        reviews: zod_1.z.array(zod_1.z.string()).optional(),
        size: zod_1.z.boolean().optional()
    })
});
exports.productValidation = {
    createProductZodSchema: exports.createProductZodSchema,
};
