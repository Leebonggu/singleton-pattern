import { Request, Response } from 'express';
import { Cat, CatType } from './cats.model';

// Read ->  GET Total Data
export const readAllCat = async (req: Request, res: Response) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data :{
        cats,
      }
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message
    });
  }
};

// Read -> 특정 고양이 데이터 조회
export const readCat = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(id);
    const cat = Cat.find((cat) => {
      return cat.id === id;
    });
    console.log(cat);
    res.status(200).send({
      success: true,
      data: {
        cat
      }
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message
    });
  }
};

// Create -> Add New Cat
export const addCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    Cat.push(data);
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// PUT -> 전체업데이트
export const putCat = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    let result;
    Cat.forEach(cat => {
      if (cat.id === id) {
        cat = body;
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        result,
      }
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message
    });
  }
}
// PATCH -> 부분업데이트
export const patchCat = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    let result;
    Cat.forEach(cat => {
      if (cat.id === id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        result,
      }
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message
    });
  }
};
// DELETE -> 삭제
export const deleteCat = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const newCat = Cat.filter(cat => cat.id !== id);
    res.status(200).send({
      success: true,
      data: newCat,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message
    });
  }
};
