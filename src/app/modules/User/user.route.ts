import express from 'express';
import { UserControlles } from './user.controller';


const router =express.Router();

router.post('/create-student',UserControlles.createStudent)