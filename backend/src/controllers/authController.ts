import { prisma } from '../db.js';
import { Request, Response } from 'express';

export async function fazerLogin(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findFirst({ 
            where: { email, password },
        });

        res.status(200).json(user)
    } catch (error) {
        console.error(error);
    };
};